export default class ResetButton extends Phaser.Physics.Arcade.Sprite{
    constructor(scene: Phaser.Scene, x: number, y:number){
        super(scene,x,y,'reset')
        scene.add.existing(this)

        this.setInteractive().on('pointerdown', () => {
            let sure:boolean  = confirm("Willst du das Spiel wirklich neu starten?")
            if(sure) scene.scene.restart()
        })
        
    }

}