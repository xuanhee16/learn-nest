import * as express from "express";
import catsRouter from "./cats/cats.route"; //cats 폴더에서 등록된 라우터 가져오기

const app: express.Express = express();

// logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("middleware");
  next();
});

// Json 파일을 읽을 수 있게 추가
app.use(express.json());
//import로 가져오고 읽을 수 있게 등록해주기
app.use(catsRouter);

// 404 middleware
app.use((req, res, next) => {
  console.log("error middleware");
  res.send({ error: "404 not found" });
});

app.listen(8000, () => {
  console.log("server is on..");
});
