<<<<<<< HEAD
let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
=======
// Global Scope
var a = 1;
let b = 2;
const c = 3;


//function test(){            // Seperate Variable because of dif scope
//var a = 4;
//let b = 5;
//const c = 6;
//console.log('Function Scope: ', a, b, c,);
//}
//test();

//if(true) {  //Block Scope
  // Need to watch var in block scope, they over ride the "Global scope" (security issues)
//var a = 4;
//let b = 5;
//const c = 6;
//console.log('If Scope: ', a, b, c,);

//}

for(let a = 0; a < 10; a ++){
console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c,);


















>>>>>>> 299957d5588aff9471917d26ba7c8823aa93aea0
