import Amelia from '../objects/amelia'
import PlayButton from '../objects/play_button'
import Equation from '../objects/equation'
import SlopeButton from '../objects/buttons'
import ResetButton from '../objects/reset_button'
import DirectionLine from '../objects/directionLine'

export default class MainScene extends Phaser.Scene {
  //fpsText: FpsText
  equation: Equation
  amelia: Amelia
  play: PlayButton
  directionLine: DirectionLine

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    //Map and collision stuff
    const map = this.make.tilemap({key: 'map'})
    const platform = map.addTilesetImage('Ground', 'map_platformelements')
    const clouds = map.addTilesetImage('Clouds','map_cloud')
    const trees = map.addTilesetImage('Tree', 'map_tree')
    const cows = map.addTilesetImage('cow', 'map_cow')

    const cowlayer = map.createLayer('Cow', cows)
    const cloudlayer =  map.createLayer('Clouds',clouds)
    const treelayer = map.createLayer('Tree', trees)
    const groundlayer = map.createLayer('Ground', platform)
    const targetlayer = map.createLayer('Target', platform)

    treelayer.setCollisionByProperty({'collides':true})
    cloudlayer.setCollisionByProperty({'collides': true})
    cowlayer.setCollisionByProperty({'collides':true})
    groundlayer.setCollisionByProperty({'collides':true})
    targetlayer.setCollisionByProperty({'collides':true})

    //Regular game stuff
    const tile_size = map.tileHeight
    this.equation = new Equation(this).setScrollFactor(0)
    new SlopeButton(this, 20, this.cameras.main.height-50, this.equation, true).setScrollFactor(0).setScale(1.5,1.5)
    new SlopeButton(this, 120, this.cameras.main.height-50, this.equation, false).setScrollFactor(0).setScale(1.5,1.5)
    this.amelia = new Amelia(this,60,this.cameras.main.height-tile_size)
    this.play = new PlayButton(this, this.cameras.main.width / 2, this.cameras.main.height * 0.1, this.amelia, this.equation, 150).setScrollFactor(0)
    new ResetButton(this, this.cameras.main.width - 100, this.cameras.main.height - 100).setScrollFactor(0)
    
    //Add Line for better understanding
    //this.directionLine = new Phaser.Geom.LINE(this.amelia.x,this.amelia.y,-100,0,100,0,0x000000,0.7)
    this.directionLine = new DirectionLine(this,this.amelia,this.equation,100).setOrigin(0, 0)

    //Display Text Stuff
    this.add.text(this.cameras.main.width / 2, this.cameras.main.height * 0.1-50, "Play and Pause at any time",
    {color: '#000000',
    fontSize: '15px',}
    ).setOrigin(0.5,0.5).setScrollFactor(0)
    
    this.add
      .text(this.cameras.main.width - 15, 15, `Help Amelia to cross the atlantic\n by setting the equation of her plane\n\n Avoid stormy clouds and land \n safely on the other side`, {
        color: '#000000',
        fontSize: '22px',
        align: 'right'
      }).setScrollFactor(0)
      .setOrigin(1, 0)
      
    this.add.text(this.cameras.main.width - 100, this.cameras.main.height - 65, 'Restart the flight', {
      color: '#000000',
      fontSize: '15px'
    }).setOrigin(0.5,0.5)
    .setScrollFactor(0)

      //Camera and World Settigs
      this.cameras.main.setBounds(0,0,tile_size*400, this.cameras.main.height)
      this.cameras.main.setZoom(this.cameras.main.height/(tile_size*25))
      this.cameras.main.startFollow(this.amelia, false, 0.5, 0.5)
      this.physics.world.setBounds(0,0,tile_size*400, this.cameras.main.height)

      //Add colliders"start": "webpack serve --config webpack/base.js --open <your-preferred-browser.exe>"
      this.physics.add.collider(this.amelia, treelayer, ()=>{this.amelia.explode()})
      this.physics.add.collider(this.amelia, cloudlayer, ()=>{this.amelia.explode()})
      this.physics.add.collider(this.amelia, cowlayer, ()=>{this.amelia.explode()})
      this.physics.add.collider(this.amelia, groundlayer, ()=>{this.amelia.explode()})
      this.physics.add.collider(this.amelia, targetlayer, ()=>{this.scene.start('SuccessScene')})
    }
    

  update() {
    this.play.update()
    this.directionLine.update()
  }
}
