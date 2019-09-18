/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding is whatever is to the left of the "." === this
* 2. explicit binding is when this is used in .call, .apply or .bind
* 3. new binding is when using the new keyword to assign context to 'this'
* 4. window binding is when this is not givin context and default to the browser window object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
    name: "cody",
    age: 26,
    speak: function() {
        return `Hi, my name is ${this.name}. I am ${this.age} years old.`;
    }
}

console.log(myObj.speak());

// Principle 3

// code example for New Binding
function Animal(sound) {
    this.speak = sound;
}

let cat = new Animal("meow");

console.log(cat.speak);

// Principle 4

// code example for Explicit Binding
let soundFunction = function() {
    console.log(this.sound);
}

const dog = {
    sound: 'woof'
}

soundFunction.call(dog);