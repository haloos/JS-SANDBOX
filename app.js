
// FOR LOOP       "Use when you know how many times going to run"

//for(let i = 0; i < 10; i++){
  //console.log('Number ' + i);
  //if(i === 2){
    //console.log('2 is my favorite number'); // add words into the loop(keeps number2)
    //continue;   // "Stops loop here without conting next interation" (no number2)
  //}

  //if(i === 5){
    //console.log('Stop the loop');
    //break;
  //}
  //console.log('Number '+ i);   // "Really important statements to learn"
//}     

// While loop     "Use when unclear how many times to run"

//let i = 0;

//while(i < 10){
  //console.log('Number ' + i);
  //i++;    // Maker sure increment is inside while loop
//}

// Do While loop

//let i = 0;

//do {        //Do will always run  
  //console.log('Number ' + i);
  //i++;
//}

//while(i < 10);

// Loop Through Array
const cars = ['Ford','Chevy','Honda','Toyata'];

//for(let i = 0; i < cars.length; i++){
  //console.log(cars[i]);
//}

// Foreach loop
cars.forEach(function(car,index,array){   // Recommend way to loop through an array
  console.log(`${index} : ${car}`);
  console.log(array);
})

// MAP

//const users = [
  //{id: 1, name: 'John'},
  //{id: 2, name: 'Sara'},
  //{id: 3, name: 'Karen'},
//];
  
//const ids = users.map(function(user){
  //return user.id;
//});
//console.log(ids);

// FOR in loop
const user = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30,
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}




// FUNCTION DECLARATIONS

function greet(firstName = 'John' , lastName = 'Doe'){  // Best way for functions
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

//console.log(greet('John', 'Doe'));

// FUNCTION EXPRESSIONS

const square = function(x){
  return x*x;
};
//console.log(square(8));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

//(function() {
  //console.log("IIFE Ran..."); // must add (); for IIFEs to work
//})();

//(function(name) {
  //console.log('Hello '+ name);    // Very useful for certan design patterns
//})('Jason');

// PROPERTY METHODS

const todo = {
    add: function(){
      console.log('add todo..');
    }, edit: function(id){
      console.log(`edit todo ${id}`);
    }
}
todo.delate = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delate();

