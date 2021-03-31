export default class Equation extends Phaser.GameObjects.Text {
    
    slope: number
    flight_angle: number
    default_delta: number

    constructor(scene) {
      super(scene, 10, 10, 'Flight Equation: y=0*x', { color: 'black', fontSize: '32px' })
      scene.add.existing(this)
      this.setOrigin(0)
      this.slope = 0
      this.default_delta = 0.25
    }
    
    increase_slope(delta=this.default_delta){
        this.slope += delta
        this.flight_angle = Math.atan(this.slope)
        this.update()
    }

    decrease_slope(delta=this.default_delta){
        this.slope -= delta
        this.flight_angle = Math.atan(this.slope)
        this.update()
    }

    update() {
      this.setText(`Flight Equation: y=${this.slope}*x`)
    }
  }