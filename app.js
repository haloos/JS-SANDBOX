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