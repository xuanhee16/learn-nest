import { Cat, CatType } from "./cats.model";
import { Router } from "express";

const router = Router(); //app 대신에 router인스턴스를 만들고 router 등록

// read 고양이 전체 데이터 조회
router.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({ success: true, data: { cats } });
  } catch (error: any) {
    res.status(400).send({ success: false, error: error.message });
  }
});

// read 특정 고양이 데이터 조회
// 정적조회시 /cats/특정id값
// 동적조회시 /cats/:id
router.get("/cats/:id", (req, res) => {
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

// 새로운 고양이 추가(새로운 데이터 추가시)
router.post("/cats", (req, res) => {
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

export default router;
