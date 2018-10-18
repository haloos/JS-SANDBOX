// var, let, const
/*var name = 'John Doe';
console.log(name);
name  = 'Steve Smith';
console.log(name);




// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting); 

// letters, numbers, _, $
// Can't start with number

// Multi word vars
var firstName = 'John'; // Camel Case
var first_name = 'Sara'; // Underscor 
var FirstName = 'Tom'; // Pascal case
var firstname;  // Not recommend */

// Let
// let name = 'John Doe'; Example 1

//let name; Example 2
// name = 'John Doe'; Example 2

//console.log(name);
//name  = 'Steve Smith';
//console.log(name);

// Const
//const name = 'John';
//console.log(name);

// Can't reassign
//name = 'Sara';
// Have to assign a vaule 
//const greeting;

const person = {
  name: 'John',
  age: 33
}

// Common mistakes made
// Can't reasighn the var 'person', but can use it to rename
person.name = 'Sara';
person.age = 44;

//console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);
