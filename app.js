const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Jason';
const tags = 'web design, web development,programming';
let val;

val = firstName + lastName;
 
// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Jason ';
val += 'Paredes';

val = 'Hello my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome I can\'t wait'; 

// length 
val = firstName.length;

// concat
val = firstName.concat(' ' , lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexof()
val = firstName.indexOf('l');        // from left to right 0,1,2
val = firstName.lastIndexOf('l');    // from right to left 0,1,2

// charAt()
val = firstName.charAt('2');

// Get last char 
val = firstName.charAt(firstName.length -1);

// substring ()
val = firstName.substring(0, 4);

// slice()  mostly used with arrays
val = firstName.slice(0,4);
val = firstName.slice(-3);  // last 3 from string  iam

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Jason', 'Jack');

// includes()
val = str.includes('Hello');
console.log(val);

