const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/play" });
  res.write("모오츠으");
  //설명한다.
  res.end();
});
server.listen(3500, (err) => {
  if (!err) {
    console.log("서버 안돌아감");
  } else {
    console.log("3500 포트에 돌아감 http:///localhost:3500");
  }
});
