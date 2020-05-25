import * as Phaser from "phaser";

import TileAssetsLoader from "@/assets/tiles/TileAssetsLoader";

import Button from "@/components/ui/ButtonSprite";
import HandContainer from "@/sprites/gameplay/HandContainer";
import Tiles from "@/common/Tiles";

class TitleScene extends Phaser.Scene {
  constructor() {
    super({
      key: "TitleScene",
    });
  }

  preload() {
    TileAssetsLoader.loadTiles(this);
  }

  create() {
    this.add
      .text(
        this.game.scale.width / 2,
        this.game.scale.height / 2 - 50,
        "SGJong",
        { fontFamily: "Comic Sans MS", fontSize: 50 }
      )
      .setOrigin(0.5, 0.5);

    this.add.existing(
      new HandContainer({
        scene: this,
        x: this.game.scale.width / 2,
        y: 100,
        tiles: [Tiles.Animal.Cat, Tiles.Dots.Eight, Tiles.Flower.Four],
      })
    );

    const btn = new Button({
      scene: this,
      x: this.game.scale.width / 2,
      y: this.game.scale.height / 2 + 50,
      text: "Play!",
      onClick: () => {
        this.scene.start("JoinScene");
      },
    });
  }
}

export default TitleScene;
