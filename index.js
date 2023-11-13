// const express = require("express") ;  옛날 즉 commonjs 방식
import express from "express"; // 현대 방식 module 방식
import cors from "cors";
// 도움말 및 기능 테스트 Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
const port = 4000; // 서버에 접속시 포트번호

// cors 처리(웹브라우저로 접속시 보안관련 처리)
app.use(
  cors({
    origin: "*",
  })
);
// json 데이터 사용하겠다고 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// swagger 설정
const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// REST API 요청 처리
// 첫페이지
app.get("/", function (req, res) {
  res.send("인터파크 API");
});

//게시판 API (백엔드 호출 함수)
//get은 프론트에서 자료요청
//localhost:4000/board : 게시판 자료를 준다.
app.get("/board", (req, res) => {
  console.log("GET", req);
  // DB에서 조건을 보고 결과를 {} 만들어서 [] 담아준다.
  // MongoDB, MariaDB(MySql)
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희입니다.",
      contents: "내용입니다.",
    },
    {
      number: 3,
      writer: "훈희",
      title: "훈희입니다.",
      contents: "내용입니다.",
    },
  ];
  res.send(result);
});

//post는 프론트에서 백엔드로 자료 전송
//localhost:4000/board : 게시판 자료를 추가한다.
//axios.post("/board", {자료})
app.post("/board", (req, res) => {
  // console.log("POST", req);
  console.log("BODY 프론트가 보낸 데이터 ", req.body);
  // req.body 바탕으로 DB 에 내용 추가
  res.send("게시물 추가에 성공하였습니다.");
});

//인터파크 API (백엔드 호출 함수)
// visual 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/visual", (req, res) => {
  const result = {
    total: 7,
    visual_1: {
      file: "images/v1.png",
      url: "a.html",
      title: "visual_1",
    },
    visual_2: {
      file: "images/v2.png",
      url: "b.html",
      title: "visual_2",
    },
    visual_3: {
      file: "images/v3.jpg",
      url: "c.html",
      title: "visual_3",
    },
    visual_4: {
      file: "images/v4.jpg",
      url: "d.html",
      title: "visual_4",
    },
    visual_5: {
      file: "images/v5.jpg",
      url: "e.html",
      title: "visual_5",
    },
    visual_6: {
      file: "images/v6.jpg",
      url: "f.html",
      title: "visual_6",
    },
    visual_7: {
      file: "images/v7.jpg",
      url: "g.html",
      title: "visual_7",
    },
    visual_8: {
      file: "images/v7.jpg",
      url: "g.html",
      title: "visual_7",
    },
  };
  res.send(result);
});
// recommend 영역에 출력할 자료 요청
// localhost:4000/recommend
app.get("/recommend", (req, res) => {
  const result = {
    total: 12,
    good_1: {
      image: "images/r1.jpg",
      discount: 0,
      price: 26000,
      name: "[무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩 건조기가능/KC인증",
      url: "#",
    },
    good_2: {
      image: "images/r1.jpg",
      discount: 53,
      price: 26000,
      name: "[무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩 건조기가능/KC인증",
      url: "#",
    },
    good_3: {
      image: "images/r1.jpg",
      discount: 13,
      price: 26000,
      name: "[무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩 건조기가능/KC인증",
      url: "#",
    },
    good_4: {
      image: "images/r1.jpg",
      discount: 14,
      price: 26000,
      name: "[무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩 건조기가능/KC인증",
      url: "#",
    },
    good_5: {
      image: "images/r5.jpg",
      discount: 17,
      price: 26000,
      name: "[무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩 건조기가능/KC인증",
      url: "#",
    },
    good_6: {
      image: "images/r6.jpg",
      discount: 16,
      price: 26000,
      name: "[무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩 건조기가능/KC인증",
      url: "#",
    },
    good_7: {
      image: "images/r7.png",
      discount: 12,
      price: 26000,
      name: "[무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩 건조기가능/KC인증",
      url: "#",
    },
    good_8: {
      image: "images/r8.jpg",
      discount: 33,
      price: 26000,
      name: "[무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩 건조기가능/KC인증",
      url: "#",
    },
    good_9: {
      image: "images/r1.jpg",
      discount: 21,
      price: 26000,
      name: "[무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩 건조기가능/KC인증",
      url: "#",
    },
    good_10: {
      image: "images/r2.jpg",
      discount: 51,
      price: 26000,
      name: "[무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩 건조기가능/KC인증",
      url: "#",
    },
    good_11: {
      image: "images/r3.jpg",
      discount: 23,
      price: 26000,
      name: "[무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩 건조기가능/KC인증",
      url: "#",
    },
    good_12: {
      url: "go.html",
    },
  };
  res.send(result);
});
app.get("/tour", (req, res) => {
  const result = {
    total: 12,
    tour_1: {
      cate: "국적기직항",
      benefit: "5성급, 차오프라야강 리버뷰",
      name: "밀레니엄 힐튼 방콕",
      price: 198798,
      image: "images/t1.jpg",
      url: "#",
    },
    tour_2: {
      cate: "방콕",
      benefit: "5성급, 차오프라야강 리버뷰",
      name: "밀레니엄 힐튼 방콕",
      price: 198798,
      image: "images/t2.jpg",
      url: "#",
    },
    tour_3: {
      cate: "국적기직항",
      benefit: "5성급, 차오프라야강 리버뷰",
      name: "밀레니엄 힐튼 방콕",
      price: 198798,
      image: "images/t3.jpg",
      url: "#",
    },
    tour_4: {
      cate: "방콕",
      benefit: "5성급, 차오프라야강 리버뷰",
      name: "밀레니엄 힐튼 방콕",
      price: 198798,
      image: "images/t4.jpg",
      url: "#",
    },
    tour_5: {
      cate: "국적기직항",
      benefit: "5성급, 차오프라야강 리버뷰",
      name: "밀레니엄 힐튼 방콕",
      price: 198798,
      image: "images/t1.jpg",
      url: "#",
    },
    tour_6: {
      cate: "방콕",
      benefit: "5성급, 차오프라야강 리버뷰",
      name: "밀레니엄 힐튼 방콕",
      price: 198798,
      image: "images/t2.jpg",
      url: "#",
    },
    tour_7: {
      cate: "국적기직항",
      benefit: "5성급, 차오프라야강 리버뷰",
      name: "밀레니엄 힐튼 방콕",
      price: 198798,
      image: "images/t3.jpg",
      url: "#",
    },
    tour_8: {
      cate: "방콕",
      benefit: "5성급, 차오프라야강 리버뷰",
      name: "밀레니엄 힐튼 방콕",
      price: 198798,
      image: "images/t4.jpg",
      url: "#",
    },
    tour_9: {
      cate: "국적기직항",
      benefit: "5성급, 차오프라야강 리버뷰",
      name: "밀레니엄 힐튼 방콕",
      price: 198798,
      image: "images/t4.jpg",
      url: "#",
    },
    tour_10: {
      cate: "방콕",
      benefit: "5성급, 차오프라야강 리버뷰",
      name: "밀레니엄 힐튼 방콕",
      price: 198798,
      image: "images/t4.jpg",
      url: "#",
    },
    tour_11: {
      cate: "국적기직항",
      benefit: "5성급, 차오프라야강 리버뷰",
      name: "밀레니엄 힐튼 방콕",
      price: 198798,
      image: "images/t4.jpg",
      url: "#",
    },
    tour_12: {
      cate: "방콕",
      benefit: "5성급, 차오프라야강 리버뷰",
      name: "밀레니엄 힐튼 방콕",
      price: 198798,
      image: "images/t4.jpg",
      url: "#",
    },
  };
  res.send(result);
});

// 서버에서 Request 요청대기
app.listen(port, () => {
  console.log(`현재 웹서버가 ${port} 로 접속하였습니다.`);
});
