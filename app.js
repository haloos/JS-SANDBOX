//if(something){
 // do something
//} else {
  //do something else
//}

const id = 100;

// Equal To
/*if(id == 100) {                   // Not reconmmend 2 ==
  console.log('Correct');         // === is the recommend way
} else {
  console.log('Incorrect');
}

// Not equal to
if(id != 101){
  console.log('Correct');
} else {
  console.log('Incorrect');
} 
// Equal to the vaule and type
if(id === 100) {                   
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Equal to the vaule and type
if(id !== 100) {                // !== not equal    
  console.log('Correct');
} else {
  console.log('Incorrect');
}*/

// Test if undefined
// if(typeof id !== 'undefined'){     // line 36 way to test something underfined
  //consold.log(`The id is ${id}`);
// } else {
 // console.log('no id');
// }

// Greater than or less than
//if(id > 200) {                
  //console.log('Correct');
//} else {
  //console.log('Incorrect');
//}

// If else 

const color = 'yellow';

//if(color === 'red') {
  //console.log('color is red');
//} else if(color === 'blue'){
  //console.log('color is blue');
//} else {
  //console.log('color is not red or blue');
//}


// Logical operator
const name = 'Steve';
const age = 40;

// And &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <=19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// Or || 
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
}else{
  console.log(`${name} is registed for the race`);
}

// Ternary operator 
console.log(id === 100 ? 'Correct' : 'Incorrect');  // much easier and prefered way

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
  else 
  console.log('INCORRECT');



















