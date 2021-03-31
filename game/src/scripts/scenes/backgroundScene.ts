
export default class GuiScene extends Phaser.Scene {
    constructor() {
      super({ key: 'BackgroundScene' })
    }
  
    create() {
      this.cameras.main.setBackgroundColor('#4ba9e4')
      let bg = this.add
        .sprite(0, 0, 'sky')
        .setScrollFactor(0)
        .setOrigin(0)
        .setScale(0.8)
    }
}