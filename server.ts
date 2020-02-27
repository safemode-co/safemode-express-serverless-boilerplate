const serverless = require("serverless-http");
import * as bodyParser from "body-parser";
import * as express from "express";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({
    status: 200,
  });
});

const port = 4000;

const server = app.listen(port, () => {
  console.log("Listening on port:", port);
});

module.exports.handler = serverless(app);
