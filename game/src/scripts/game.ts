import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import BackgroundScene from './scenes/backgroundScene'
import SuccessScene from './scenes/successScene'

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, BackgroundScene, MainScene, SuccessScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      //gravity: { y: 400 } //Put back in in case gravity should be the default
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
