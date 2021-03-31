import Amelia from './amelia'
import Equation from './equation'

export default class PlayButton extends Phaser.Physics.Arcade.Sprite {
    equation: Equation
    running: boolean
    player: Amelia
    base_speed:number
    constructor(scene, x: number, y:number, player: Amelia, equation:Equation, base_speed:number=100) {
      super(scene, x, y, 'start_button')
      scene.add.existing(this)
    
      this.equation = equation
      this.player = player
      this.running = false
      //simple switch between two states
      this.setInteractive().on('pointerdown', () => {
        this.running = !this.running
      })
    this.base_speed = base_speed
    }

    update(){
      if(this.running && this.player.is_alive){
        //TODO: Normalize speed
        this.player.set_flying_animation(true)
        this.player.setVelocityX(this.base_speed*Math.cos(this.equation.flight_angle))
        this.player.setVelocityY(-this.base_speed*Math.sin(this.equation.flight_angle))
      }
      else{
        this.player.set_flying_animation(false)
        this.player.setVelocityX(0)
        this.player.setVelocity(0)
      }
      
    }

  }