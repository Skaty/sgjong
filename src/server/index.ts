import * as webpack from "webpack";
import * as middleware from "webpack-dev-middleware";
import * as express from "express";
import * as http from "http";

import * as randomWords from "random-words";

import * as config from "../../webpack/base.js";
import ClientsManager from "./ClientsManager";

const compiler = webpack(config);
const app = express();
const srv = new http.Server(app);

// debugging only
app.use(
  middleware(compiler, {
    publicPath: "/",
    watchOptions: {},
  })
);

srv.listen(3000);

const clientsManager = ClientsManager.fromServer(srv);
