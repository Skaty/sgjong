import * as http from "http";
import * as SocketIO from "socket.io";
import { PacketTypes } from "@/common/Networking";
import ClientInstance from "./ClientInstance";

class ClientsManager {
  private clients: Array<ClientInstance>;
  private server: SocketIO.Server;

  constructor(server: SocketIO.Server) {
    this.clients = [];
    this.server = server;
    this._initListeners();
  }

  newClient = (socket: SocketIO.Socket) => {
    this.clients.push(ClientInstance.instantiate(socket));
  };

  static fromServer(srv: http.Server): ClientsManager {
    return new ClientsManager(SocketIO(srv));
  }

  private _initListeners() {
    this.server.on(PacketTypes.Connected, this.newClient);
  }
}

export default ClientsManager;
