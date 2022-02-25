import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();

//next로 미들웨어를 사용할 수 있다. -> 위치 상관없이 사용가능
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("middleware");
  next();
});
app.get("/cats/som", (req, res, next) => {
  console.log("som middleware");
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});
app.get("/cats/blue", (req, res) => {
  console.log(req.rawHeaders[1]);
  res.send({ blue: Cat[0] });
});
app.get("/cats/som", (req, res) => {
  console.log(req.rawHeaders[1]);
  res.send({ som: Cat[1] });
});

//해당하는 라우터가 없을 때
app.use((req, res, next) => {
  console.log("error middleware");
  res.send({ error: "404 not found" });
});

app.listen(8000, () => {
  console.log("server is on..");
});
