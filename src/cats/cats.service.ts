import { Request, Response } from "express";
import { Cat, CatType } from "./cats.model";

// read 고양이 전체 데이터 조회 -> get
export const readAllcat = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({ success: true, data: { cats } });
  } catch (error: any) {
    res.status(400).send({ success: false, error: error.message });
  }
};
//만들어진 서비스 패턴을 cat.route.ts에 적용시킨다.

// read 특정 고양이 데이터 조회 -> get
// 정적조회시 /cats/특정id값
// 동적조회시 /cats/:id
export const readCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    // console.log(params);
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
};

// create 새로운 고양이 추가(새로운 데이터 추가시) -> post
export const createCat = (req: Request, res: Response) => {
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
};

// update 고양이 데이터 업데이트 -> put
export const updateCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// update 고양이 데이터 부분적으로 업데이트 -> patch
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        //구조분해할당으로 부분적 수정
        //아이디가 fsduifh인 개체를 name만 수정할 때, body에 수정하고싶은 이름으로 보내면 /cats/fsduifh (patch) 해당 아이디의 네임이 수정된다.
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// delete 고양이 데이터 삭제 -> delete
export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    //각 원소에 cat.id와 params.id가 다른 경우를 필터링해서 나타냄 -> 기존에 있던 id가 없어짐 -> 새로운 데이터로
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
