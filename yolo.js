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

var events = require("events");
var util = require("util")

var Person = function(name){
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person("James");
var peter = new Person("Peter");
var john = new Person("John");
var emma = new Person("Emma");
var peca = new Person("Peca");
var pelon = new Person("Pelon");

var people = [james, peter, john, peca, emma, pelon];

people.forEach(function(person){
  person.on("speak", function(mssg){
    console.log(person.name + " said " + mssg);
  });
});

emma.emit("speak", "I'm a cute unicorn!");
peca.emit("speak", "I'm a Monkey, and I want banana");
pelon.emit("speak", "You guys are crazy");
james.emit("speak", "My name is James. You're kinda hot");
peter.emit("speak", "pelon is awesome");
john.emit("speak", "I love Pelony");












































// var counter = require("./mod2");

// console.log(counter(["Jay", "Jazzy", "Jazz"]));
