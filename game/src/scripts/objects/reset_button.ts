export default class ResetButton extends Phaser.Physics.Arcade.Sprite{
    constructor(scene: Phaser.Scene, x: number, y:number){
        super(scene,x,y,'reset')
        scene.add.existing(this)

        this.setInteractive().on('pointerdown', () => {
            let sure:boolean  = confirm("You are about to restart the game. \n You will loose any progress. Are you sure?")
            if(sure) scene.scene.restart()
        })
        
    }

}