//express 프레임워크 기본

var express = require('express');
var app = express();
app.get('/', function(request, response){  //get방식, 홈으로 들어온 요청에 대해
  response.send('<h1>홈페이지 에요</h1>');
});
app.get('/login', function(req, res){ //get방식, login 페이지로 들어온 경우
  res.send('<p>로그인 하세요</p><hr>');
});
//get()메소드는 라우팅 메소드이다.

app.listen(3000, function(){
  console.log('Connected 3000 port!');
});
