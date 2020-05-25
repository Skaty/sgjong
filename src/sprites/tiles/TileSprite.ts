import * as Phaser from "phaser";
import Tiles from "@/common/Tiles";

type TileConfig = {
  scene: Phaser.Scene;
  x: number;
  y: number;
  z: number;
  tile: Tiles;
};

// Defines a basic mahjong tile
class TileSprite extends Phaser.GameObjects.Sprite {
  private config: TileConfig;

  constructor(config: TileConfig) {
    super(config.scene, config.x, config.y, "tiles", config.tile as string);

    this.config = config;

    this._setDefaults();

    this.config.scene.add.existing(this);
  }

  private _setDefaults() {
    this.setInteractive();
    this.setDepth(this.config.z);
  }
}

export default TileSprite;
