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


















