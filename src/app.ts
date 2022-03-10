import * as express from "express";
import catsRouter from "./cats/cats.route"; //cats 폴더에서 등록된 라우터 가져오기

//싱글톤패턴 - 인스턴스가 찍힐 때 app이 하나 완성된다.
class Server {
  public app: express.Application;
  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    // import로 가져오고 읽을 수 있게 등록해주기
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("middleware");
      next();
    });

    // Json 파일을 읽을 수 있게 추가
    this.app.use(express.json());

    // route 가져오기
    this.setRoute();

    // 404 middleware
    this.app.use((req, res, next) => {
      console.log("error middleware");
      res.send({ error: "404 not found" });
    });
  }

  public listen() {
    // 미들웨어 셋팅
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("server is on...");
    });
  }
}

// const app: express.Express = express();
function init() {
  const server = new Server(); // 새로운 서버 인스턴스 생성
  server.listen();
}

init();
