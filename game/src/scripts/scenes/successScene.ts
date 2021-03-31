import ResetButton from '../objects/reset_button'

export default class GuiScene extends Phaser.Scene {
    constructor() {
      super({ key: 'SuccessScene' })
    }
  
    create() {
    this.cameras.main.setBackgroundColor('#ffffff')
    this.add.sprite(0,0,'success').setOrigin(0,0)
    this.add.text(50, this.cameras.main.height - 50, "Click anywhere to restart game", 
    {fontSize:'25px',
    color:'#ffffff',
    align:'right'
    }).setOrigin(0,1)
    
    this.input.once('pointerup', ()=>{this.scene.start('MainScene')})
}

}