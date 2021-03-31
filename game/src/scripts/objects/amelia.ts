export default class Amelia extends Phaser.Physics.Arcade.Sprite {on
    is_alive: boolean
    constructor(scene: Phaser.Scene, x: number, y: number){
      super(scene, x, y, "amelia")
      scene.add.existing(this)
      scene.physics.add.existing(this)
      this.is_alive = true
        
      this.setCollideWorldBounds(true)
      .setBounce(0.1)

      scene.anims.create({
          key:'fly',
          frames: scene.anims.generateFrameNumbers('amelia', {start:0, end:3}),
          frameRate: 10,
          repeat: -1
      })

      scene.anims.create({
          key:'explode',
          frames: scene.anims.generateFrameNumbers('explosion', {start:0, end:47}),
          frameRate: 55,
          repeat:0
        })
    }

    set_flying_animation(is_flying:boolean){
        if(this.is_alive && is_flying && !this.anims.isPlaying){
            this.play('fly')
        }
        else if(this.is_alive && !is_flying && this.anims.isPlaying){
            this.stop()
        }
        else{
        }
    }

    explode(){
        if(this.is_alive){
        this.is_alive = false
        this.play('explode',false)
        }
    }
  }