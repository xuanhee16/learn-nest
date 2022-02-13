import * as express from "express";
const app: express.Express = express();
const port: number = 8000;

app.get("/test", (req: express.Request, res: express.Response) => {
  res.send("We are the world");
});

//서버를 여는 역할이 listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
