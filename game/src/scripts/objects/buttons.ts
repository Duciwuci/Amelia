import Equation from './equation'

export default class SlopeButton extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x: number, y:number, equation: Equation, up:boolean=true) {
      if(up){super(scene, x, y, 'up_button')}
      else{super(scene, x, y, 'down_button')}
      scene.add.existing(this)
      
      this.setInteractive().on('pointerdown', () => {
        if(up){
            equation.increase_slope()
        }
        else{
            equation.decrease_slope()
        }
      })
    }

  }