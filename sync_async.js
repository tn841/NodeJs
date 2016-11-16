var fs = require('fs');

//sync
console.log(1);
var data = fs.readFileSync('text.data',{encoding:'utf8'});
console.log(data);

//async
console.log(2);
var data2;
fs.readFile('text.data',{encoding:'utf8'}, function(err, data2){
  console.log(3);
  console.log(data2);
});
console.log(4);
