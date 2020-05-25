import { PacketTypes } from "@/common/Networking";
import Den from "./Den";

class ClientInstance {
  private socket: SocketIO.Socket;
  private den: Den = null;

  constructor(socket: SocketIO.Socket) {
    this.socket = socket;
    this._initListeners();
  }

  static instantiate(socket: SocketIO.Socket): ClientInstance {
    return new ClientInstance(socket);
  }

  private _onHostGame(): void {
    if (this.den !== null) {
      // ignore
      return;
    }

    this.den = new Den();
    this.socket.emit(PacketTypes.HostGame, this.den.getDenID());
  }

  private _initListeners(): void {
    this.socket.on(PacketTypes.HostGame, this._onHostGame);
  }
}

export default ClientInstance;
