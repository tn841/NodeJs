//express 프레임워크 기본

var express = require('express');
var app = express();
app.locals.pretty = true; //템플릿 엔진을 통해 만들어진 html코드를 보기 좋게 만든다.
app.set('view engine', 'jade'); //템플릿 엔진과 express연결
app.set('views', './views');  //템플릿 엔진 디렉토리 지정(views가 디폴트임)
app.use(express.static('public'));  //정적인 파일 위치 지정 (미들웨어?)
app.get('/template', function(req, res){
  res.render('temp', {time:new Date(), _title:'Jade 타이틀'}); //jade의 메소드인 render를 이용하여 html 코드 띄우기, {}로 객체 전달하기
})
app.get('/', function(request, response){  //get방식, 홈으로 들어온 요청에 대해
  response.send('<h1>홈페이지 에요</h1>');
});
app.get('/login', function(req, res){ //get방식, login 페이지로 들어온 경우
  res.send('<p>로그인 하세요</p><hr>');
});
//get()메소드는 라우팅 메소드이다.

app.get('/route', function(req, res){
  res.send('<h1>Hello Router</h1> <hr> <img src="/0.png">');  //정적파일 불러오기
});

app.get('/dynamic', function(req, res){
  var lis = '';
  var time = Date();
  for(var i=0; i<5; i++){
    lis = lis + '<li>coding</li>';
  }
  var output = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
        Hello, Dynamic!
        <hr>
        <ul>
        ${lis}
        <li>${time}</li>
        </ul>
    </body>
  </html>`;
  res.send(output);
});

app.listen(3000, function(){
  console.log('Connected 3000 port!');
});
