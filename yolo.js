// var stuff = require("./mod2");
//
// console.log(stuff.adder("Fish", " Mooney"));
//
// console.log(stuff.subtractor(200, 125));
//
//
// function trialFunc(text){
//   console.log(stuff.multiplier(23, 374) + text);
// }
//
// trialFunc(", Just Kidding");
//
// console.log(stuff.adder(stuff.pi, 5));
//
// console.log(stuff.adder(12, 73) + stuff.multiplier(233, 87));


//////////////// EVENTS PRACTICE

////////////  EMITTER

// var events = require("events");
//
// var myEmitter = new events.EventEmitter();
//
// myEmitter.on("someEvent", function(mssg){
//   console.log(mssg);
// });
//
// myEmitter.emit("someEvent", "The event was emitted");


// var events = require("events");
//
// var emitter = new events.EventEmitter();
//
// emitter.on("haha", function(action){
//   console.log(action);
// });
//
// emitter.emit("haha", "I took action!");


// var events = require("events");
// var coolEmitter = new events.EventEmitter();
//
// coolEmitter.on("batFace", function(signal){
//   console.log(signal);
// });
//
// coolEmitter.emit("batFace", "Wahhhhhhh");

// var events = require("events");
// var emitter = new events.EventEmitter();
//
// var numbers = function(numb1, numb2){
//   console.log(`Guess how much you're getting paid... ${numb1 * numb2}`);
// }
//
// emitter.on("puppyBark", function(){
//   return numbers(323, 37);
// })
//
// emitter.emit("puppyBark");



// var events = require("events");
//
// var personalEmitter = new events.EventEmitter();
//
// personalEmitter.on("myEvent", function(){
//   console.log("I'm a beast!");
// });
//
// function yolo(yo, lo){
//   return yo + lo;
// };
//
// personalEmitter.on("anotherEvent", function(){
//   console.log(yolo(324, 43));
// });
//
// personalEmitter.emit("anotherEvent");
// personalEmitter.emit("myEvent");

// var events = require("events");
// var emitter = new events.EventEmitter();
//
// emitter.on("clicking", function(sendData){
//   sendData = "I just sent the data";
//   console.log(sendData);
// });
//
// emitter.on("hovering", function(getData){
//   console.log(getData);
// });
//
// emitter.emit("clicking");
// emitter.emit("hovering", "I got the data!");


//////////////// UTIL
//
// var events = require("events");
// var util = require("util")
//
// var Person = function(name){
//   this.name = name;
// }
//
// util.inherits(Person, events.EventEmitter);
//
// var james = new Person("James");
// var peter = new Person("Peter");
// var john = new Person("John");
// var emma = new Person("Emma");
// var peca = new Person("Peca");
// var pelon = new Person("Pelon");
//
// var people = [james, peter, john, peca, emma, pelon];
//
//
//
// people.forEach(function(person){
//   person.on("speak", function(mssg){
//     console.log(person.name + " said " + mssg);
//   });
// });
//
// emma.emit("speak", "I'm a cute unicorn!");
// peca.emit("speak", "I'm a Monkey, and I want banana");
// pelon.emit("speak", "You guys are crazy");
// james.emit("speak", "My name is James. You're kinda hot");
// peter.emit("speak", "pelon is awesome");
// john.emit("speak", "I love Pelony");

// COMPARE THIS TOP ONE WITH THE BOTTOM ONE

// var events = require("events");
// var util = require("util");
//
// var Person = function(name){
//   this.name = name;
// }
//
// util.inherits(Person, events.EventEmitter);
//
// var john = new Person("John");
// var charles = new Person("Charles");
// var lindsey = new Person("Lindsey");
//
// var people = [john, charles, lindsey];
//
// people.forEach(function(random){
//   random.on("speak", function(msg){
//     console.log(random.name + " said " + msg)
//   })
// })
//
// charles.emit("speak", "I'm becoming a Beast!");
// lindsey.emit("speak", "I'm hot");

/////////////// FS
//
// var fs = require("fs");
// var sample = fs.readFileSync("sample.txt", "utf8");
// console.log(sample);
// fs.writeFileSync("sample2.txt", sample);
//

//READING WRITTING SYNC
// var fs = require("fs");
// var sample2 = fs.readFileSync("sample2.txt", "utf8");
// console.log(sample2);
// var indexHtml = fs.readFileSync("index.html", "utf8");
// fs.writeFileSync("cuteBatty.html", indexHtml);


//READING WRITTING ASYNC
// var fs = require("fs");
// fs.readFile("yolo.js", "utf8", function(err, data){
//   fs.writeFile("freakingAwesome.js", data);
// });

//DELETING FILES
// var fs = require("fs");
//
// fs.unlink("sample.txt");
// fs.unlink("sample2.txt");

// var fs = require("fs");
//
// fs.readFile("mod1.js", "utf8", function(err, data){
//   fs.writeFile("uglyBatty", data);
// })
//
// fs.mkdir("ImAwesome", function(){
//   fs.readFile("mod1.js", "utf8", function(err, data){
//     fs.writeFile("ofCourseYouAre.vicious");
//   });
// });

// fs.unlink("./ImAwesome/ofCourseYouAre.vicious", function(){
//   fs.rmdir("ImAwesome");
// })



// var counter = require("./mod2");

// console.log(counter(["Jay", "Jazzy", "Jazz"]));
// var fs = require("fs");
// var http = require('http');
//
// var personalServer = http.createServer(function(req, res){
//   console.log("Request has been made" + req.url)
//   res.writeHead(200, {"Content-Type": "text/plain"});
//   res.end("Thank you for your request!");
// });
//
// personalServer.listen(2000);
// console.log("Listening to port 2000, enjoy");

// var http = require('http');
//
// function localize(req, res){
//   console.log("Request has been made");
//   res.writeHead(200, "Request: " + req.url);
//   res.write("Check it out!");
//   res.end();
// }
//
//
// var server = http.createServer(localize).listen(4444);
// console.log("Server is now running....");

// var http = require('http');
//
// function myResponse(req, res){
//   console.log("Request has been made" + req.url);
//   res.writeHead(200, {"Content-Type" : "text/plain"});
//   res.write("This is my cool little experiment! I'm a beast!");
//   res.end()
// }
//
// var server = http.createServer(myResponse).listen(5555);
// console.log("server is now running....")






// var http = require('http');
//
// function newResponse(req, res){
//   console.log("Request has been made by: " + req.url);
//   res.writeHead(200, {"Content-Type":"text/plain"});
//   res.write("Once I was 7 years old!");
//   res.end();
// }
//
// var server = http.createServer(newResponse);
// console.log("My server is now running. Like a Boss.....")
//
// server.listen(9999);


// var http = require('http');
//
// var server = http.createServer(function(req, res){
//   console.log("Request has been made by: " + req.url);
//   res.writeHead(200, {"Content-Type": "text/html"});
//   res.write("Just Kidding");
//   res.end();
// });
//
// server.listen(7777);
// console.log("Server is now running....")
//


// READABLE AND WRITTABLE STREAMS

//readable
// var fs = require('fs');
// var http = require('http');
//
// var myReadStream = fs.createReadStream(__dirname + '/rubbish.txt', 'utf8');
//
// myReadStream.on('data', function(chunk){
//   console.log("new chunk received:")
//   console.log(chunk);
// })
//


// var fs = require('fs');
//
// var myReadStream = fs.createReadStream(__dirname + '/rubbish.txt', 'utf8');
//
// myReadStream.on('data', function(chunk){
//   console.log('New Chunk');
//   console.log(chunk);
// })
//


var fs = require('fs');

var newReadStream = fs.createReadStream(__dirname + '/rubbish.txt', 'utf8');

newReadStream.on('data', function(newChunk){
  console.log('New Stream:');
  console.log(newChunk);
});





























































/////////////// CREATING A SERVER

// var http = require("http");
//
//
//
// var server = http.createServer(function(req, res){
//   console.log("request was made: " + req.url)
//   res.writeHead(200, {"Content-Type": "text/plain"});
//   res.end("My awesome Response");
// });
//
// server.listen(3000, "127.0.0.1");
// console.log("Listening to port 3000, enjoY");

//RESPONSE IS SET UP
