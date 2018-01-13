var http = require("http");
var fs = require("fs");

var myServer = http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type" : "text/html"});
  res.end(fs.readFileSync("index.html", "utf8"));
});

myServer.listen(5000, "127.0.0.3");
console.log("listening to port 5000");
