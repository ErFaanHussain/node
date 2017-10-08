var http = require('http');
var os = require('os');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("The OS you are running is: " + os.platform());
  res.write("The Architecture you have is: " + os.arch());
  res.write("The endiannes of your cpu is: " + os.endiannes());
  res.end();
}).listen(8082);
