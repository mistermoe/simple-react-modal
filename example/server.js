var express = require('express');
var server = express();

//Logs in the console with a time stamp
function log() {
  var args = Array.from( arguments ),
    timestamp = `[${new Date().toUTCString()}]`;

  args.unshift( timestamp );
  console.log.apply( console, args );
}

//Prints logs
server.use(function(req, res, next) {
  log(req.method, req.url);
  next();
});

server.use(express.static(__dirname + "/public"));


server.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");  
});

server.listen(3000, function() {
  console.log(__dirname);
  console.log("server listening on port 3000");
});