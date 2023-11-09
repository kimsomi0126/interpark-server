// const express = require("express") ;  옛날 즉 commonjs 방식
import express from "express"; // 현대 방식 module 방식
import cors from "cors";

const app = express();
const port = 4000; // 서버에 접속시 포트번호

// cors 처리
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", function (req, res) {
  res.send("인터파크 API");
});

// 게시판 API
app.get("/board", (요청, 반응) => {
  const result = [
    {
      pk: 1,
      id: 1,
      user: "둘리",
      title: "hello",
      content: "text",
    },
  ];
  반응.send(result);
});

app.get("/good", (요청, 반응) => {
  // DB에서 목록 출력
  const result = [
    {
      title: "title",
      price: 4000,
      ddiscount: 25,
    },
  ];
  반응.send(result);
});

app.get("/visual", (요청, 반응) => {
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
  반응.send(result);
});

app.listen(port, () => {
  console.log(`현재 웹서버가 ${port} 로 접속하였습니다.`);
});
