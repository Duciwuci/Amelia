export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('phaser-logo', 'assets/img/phaser-logo.png')
    this.load.image('start_button', 'assets/img/PlayButton.png')
    this.load.image('up_button', 'assets/img/UpButton.png')
    this.load.image('down_button', 'assets/img/DownButton.png')
    this.load.spritesheet('amelia', 'assets/img/Amelia_sprite_small.png', {frameWidth:70, frameHeight:71})
    this.load.image('sky', 'assets/img/background.png')
    this.load.image('reset', 'assets/img/ResetButton.png')
    this.load.spritesheet('explosion', 'assets/img/Explosion_sprite.png', {frameWidth: 100, frameHeight: 100})
    this.load.image('success', 'assets/img/Amelia_sucess.jpg')
    
    //load stuff associated with map
    this.load.image('map_cloud','assets/map/cloud.png')
    this.load.image('map_tree','assets/map/tree.png')
    this.load.image('map_cow', 'assets/map/cow.png')
    this.load.image('map_platformelements', 'assets/map/platformPack_tilesheet.png')
    this.load.tilemapTiledJSON('map', 'assets/map/map.json')
  }

  create() {
    this.scene.start('BackgroundScene')
    this.scene.start('MainScene')

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
