var names = ['Andrew', 'Jose', 'Julie', 'Jen'];

names.forEach(function (name) {
  console.log('forEach: ' + name);
});

//arrow function: They can be used in place of anon functions

names.forEach((name) => {
  console.log('arrowFunc', name)
});

//no curly braces, only one statement
names.forEach((name) => console.log('ShortArrowFunc', name));

//proving that the expresion gets returned by iteself
var returnMe = (name) => name  + '!';
console.log(returnMe('Randy'));

//anon functions have this binding and arrow funcs have parent binding
// var person = {
//   name: 'Randy',
//   greet: function () {
//     names.forEach(function (n) {
//       console.log(this.name + ' says hi to ' + n);
//     });
//   }
// };


var person = {
  name: 'Randy',
  greet: function () {
    names.forEach((n) => {
      console.log(this.name + ' says hi to ' + n);
    });
  }
};

// person.greet();

//challenge
function add(a, b) {
  return a + b;
}

// expression version which allows one line and returns the value
var addExpression = (a, b) => a + b;
// statement version which allows multiple lines
var addStatament = (a, b) => {
  return a + b;
};

console.log(addStatament(1, 3))
