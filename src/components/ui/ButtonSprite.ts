import * as Phaser from "phaser";

type ButtonConfig = {
  scene: Phaser.Scene;
  x: number;
  y: number;
  onClick: () => void;
  text: string;
};

class Button {
  private config: ButtonConfig;
  private textObject: Phaser.GameObjects.Text;
  private backgroundBoxObject: Phaser.GameObjects.Rectangle;
  private boundingBoxObject: Phaser.GameObjects.Rectangle;

  constructor(config: ButtonConfig) {
    this.config = config;
    const { scene, x, y } = config;

    this.textObject = new Phaser.GameObjects.Text(scene, x, y, config.text, {
      fontFamily: "Comic Sans MS",
      fontSize: "25pt",
    }).setOrigin(0.5, 0.5);

    this.boundingBoxObject = new Phaser.GameObjects.Rectangle(
      scene,
      x,
      y,
      this.textObject.width + 15,
      this.textObject.height + 15
    )
      .setOrigin(0.5, 0.5)
      .setInteractive();

    this.backgroundBoxObject = new Phaser.GameObjects.Rectangle(
      scene,
      x + 5,
      y + 5,
      this.textObject.width + 15,
      this.textObject.height + 15
    ).setOrigin(0.5, 0.5);

    scene.add.existing(this.backgroundBoxObject);
    scene.add.existing(this.boundingBoxObject);
    scene.add.existing(this.textObject);

    this._setDefaultColors();

    this.setUpEventListeners(config);
  }

  setUpEventListeners(config: ButtonConfig) {
    this.boundingBoxObject.on(
      Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,
      () => {
        const { x, y } = this.backgroundBoxObject;

        this.textObject.setPosition(x, y);
        this.boundingBoxObject.setPosition(x, y);
      }
    );

    this.boundingBoxObject.on(
      Phaser.Input.Events.GAMEOBJECT_POINTER_OUT,
      () => {
        const { x, y } = this.config;

        this.textObject.setPosition(x, y);
        this.boundingBoxObject.setPosition(x, y);
      }
    );

    this.boundingBoxObject.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
      const { x, y } = this.config;

      this.textObject.setPosition(x, y);
      this.boundingBoxObject.setPosition(x, y);

      config.onClick();
    });
  }

  private _setDefaultColors() {
    this.backgroundBoxObject.setFillStyle(0x808080);
    this.boundingBoxObject.setFillStyle(0xffffff);
    this.textObject.setFill("black");
  }
}

export default Button;
