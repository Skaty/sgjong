import * as Phaser from "phaser";
import HandContainer from "@/sprites/gameplay/HandContainer";
import Tiles from "@/common/Tiles";

class JoinScene extends Phaser.Scene {
  constructor(_) {
    super({
      key: "JoinScene",
    });
  }

  preload() {}

  create() {
    this.add.existing(
      new HandContainer({
        scene: this,
        x: this.game.scale.width / 2,
        y: 100,
        tiles: [Tiles.Animal.Centipede, Tiles.Dots.Eight, Tiles.Flower.Four],
      })
    );
  }
}

export default JoinScene;
