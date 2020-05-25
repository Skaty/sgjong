import * as Phaser from "phaser";
import { MahjongNetClient } from "./common/Networking";

import TitleScene from "./scenes/TitleScene";
import JoinScene from "./scenes/JoinScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,

  callbacks: {
    preBoot: (game: Phaser.Game) => {
      new MahjongNetClient();
    },
  },
  parent: "phaser-example",
  scale: { autoCenter: Phaser.Scale.Center.CENTER_BOTH },
  scene: [TitleScene, JoinScene],
};

const game = new Phaser.Game(config);
