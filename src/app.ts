import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();

// logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("middleware");
  next();
});

// read 고양이 전체 데이터 조회
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    // throw new Error("db connect error");
    res.status(200).send({ success: true, data: { cats } });
  } catch (error: any) {
    res.status(400).send({ success: false, error: error.message });
  }
});

// read 특정 고양이 데이터 조회
// 정적조회시 /cats/특정id값
// 동적조회시 /cats/:id
app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    // cats/fsduifh조회시
    // 프론트에서 세션이나 쿠키, jwt 등으로 고양이(유저)의 id를 백으로 보내서 조회
    // { id: 'fsduifh' }
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({ success: true, data: { cat } });
  } catch (error: any) {
    res.status(400).send({ success: false, error: error.message });
  }
});

// Json 파일을 읽을 수 있게 추가
app.use(express.json());

// 새로운 고양이 추가(새로운 데이터 추가시)
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    // console.log(data);
    // 프론트에서 바디로 요청한 값이 보임
    // { name: 'yellow', age: 3, species: 'Sharm', isCute: true, friends: [] }
    Cat.push(data);
    //그 값을 저장하고 다시 프론트에 보낼수있다.
    res.status(200).send({ success: true, data: { data } });
  } catch (error: any) {
    res.status(400).send({ success: false, error: error.message });
  }
});

// 404 middleware
app.use((req, res, next) => {
  console.log("error middleware");
  res.send({ error: "404 not found" });
});

app.listen(8000, () => {
  console.log("server is on..");
});
