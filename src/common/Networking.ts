import * as io from "socket.io-client";

enum PacketTypes {
  Connected = "connect",

  SetNickname = "set nickname",
  HostGame = "host game",
  JoinGame = "join game",
  LeaveGame = "leave game",
  StartGame = "start game",

  DealTiles = "deal tiles",
  MahjongAction = "action",
}

class MahjongNetClient {
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect();

    this.socket.on(PacketTypes.Connected, () => {});
  }
}

export { MahjongNetClient, PacketTypes };
