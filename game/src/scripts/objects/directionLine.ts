import Amelia from './amelia'
import Equation from './equation'

export default class DirectionLine extends Phaser.GameObjects.Line {
    length: number
    player: Amelia
    equation: Equation    
    constructor(scene, player:Amelia, equation:Equation, length:number) {
        super(scene,0,0, player.x, player.y, player.x + length, player.y,0x000000,0.7)
        scene.add.existing(this)
        this.player = player
        this.equation = equation
        this.length = length
        this.setLineWidth(4,1)
        this.setStrokeStyle
    }

    update(){
        if(this.player.is_alive) this.setTo(...this.calc_line_position())
    }

    calc_line_position(){
        let x = this.player.x
        let y= this.player.y
        let x1 = x + this.length*Math.cos(this.equation.flight_angle)
        let y1 = y - this.length*Math.sin(this.equation.flight_angle)
        return [x,y,x1,y1]
    }

}