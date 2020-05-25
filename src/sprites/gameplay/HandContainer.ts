import Tiles from "@/common/Tiles";
import TileSprite from "../tiles/TileSprite";

type HandContainerConfig = {
  scene: Phaser.Scene;
  tiles: Array<Tiles>;
  x: number;
  y: number;
};

// Represents the player's hand
class HandContainer extends Phaser.GameObjects.Container {
  private config: HandContainerConfig;
  private tileSprites: Array<TileSprite>;

  constructor(config: HandContainerConfig) {
    const { scene, x, y } = config;
    super(scene, x, y);

    this.config = config;

    this.tileSprites = config.tiles.map((tile, idx) => {
      const sprite = new TileSprite({
        scene,
        x: idx * 60,
        y: 0,
        z: 0,
        tile,
      });

      this._setupTileRearrangement(sprite);

      this.add(sprite);

      return sprite;
    });
  }

  private _moveTiles(oldPos: number, newPos: number) {
    this._swapTiles(oldPos, newPos);

    if (oldPos < newPos) {
      this.config.scene.tweens.add({
        duration: 200,
        targets: this.tileSprites[oldPos],
        x: "-=60",
      });
    } else if (oldPos > newPos) {
      this.config.scene.tweens.add({
        duration: 200,
        targets: this.tileSprites[oldPos],
        x: "+=60",
      });
    }
  }

  private _swapTiles(oldPos: number, newPos: number) {
    const tmp = this.tileSprites[newPos];
    this.tileSprites[newPos] = this.tileSprites[oldPos];
    this.tileSprites[oldPos] = tmp;

    this.moveTo(this.tileSprites[oldPos], oldPos);
  }

  private _setupTileRearrangement(sprite: Phaser.GameObjects.Sprite) {
    sprite
      .on(Phaser.Input.Events.GAMEOBJECT_DRAG_START, () => {
        sprite.setY(-90);
      })
      .on(
        Phaser.Input.Events.GAMEOBJECT_DRAG,
        (_ptr, x: number, _y: number) => {
          const oldPos = Math.floor(sprite.x / 60);
          const newPos = Math.max(
            0,
            Math.min(Math.floor(x / 60), this.config.tiles.length - 1)
          );
          const newX = newPos * 60;

          sprite.setX(newX);

          this._moveTiles(oldPos, newPos);
        }
      )
      .on(Phaser.Input.Events.GAMEOBJECT_DRAG_END, () => {
        sprite.setY(0);
      })
      .setInteractive();

    this.config.scene.input.setDraggable(sprite, true);
  }
}

export default HandContainer;
