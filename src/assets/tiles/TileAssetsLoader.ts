import texture from "./texture.png";
import textureAtlas from "./texture.json";

class TileAssetsLoader {
  static loadTiles(scene: Phaser.Scene) {
    scene.load.atlas("tiles", texture, textureAtlas);
  }
}

export default TileAssetsLoader;
