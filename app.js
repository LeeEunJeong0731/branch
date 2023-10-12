const http = reqire("http");

const server = http.createSever((req, res) => {});
server.listen(3500, (err) => {
  if (err) {
    console.log("서버 안돌아감");
  } else {
    console.log("3500 포트에 돌아감 http:///localhost:3500");
  }
});
