/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding: Unless provided with an object to reference, 'this' will simply refer to the window/console object in its entirety.
* 2. Implicit Binding: When calling a function with 'obj.function()' syntax, 'this' will refer to 'obj'.
* 3. New Binding: When creating a constructor, 'this' refers to every time the object is constructed and returned with new input.
* 4. Explicit Binding: 'this' is difined within a function which uses 'call' and 'apply' or when invoking a function with 'call' and 'apply' while referring to specific objects to be returned.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function globalFunction() {
    console.log("***'this' in Global Binding:\n", this);
  }
  globalFunction();
  
// Principle 2

// code example for Implicit Binding
const object1 = {
    name: "Ben",
    age: 29,
    likesTo: function(activity) {
        console.log("***'this' in Implicit Binding:\n", this);
        console.log(`Hi! I'm ${this.name}, I'm ${this.age}, and I like to ${activity}.`);
    }
};
object1.likesTo("run");

// Principle 3

// code example for New Binding
function Hobbies(person, hobby) {
    this.name = person;
    this.hobby = hobby;
    this.enjoys = function() {
        console.log(`${this.name} loves to ${this.hobby}.`);
    };
    console.log("***'this' in New Binding:\n", this);
}
const james = new Hobbies("James", "skate");
const lisa = new Hobbies("Lisa", "play soccer");
const chuan = new Hobbies("Chuan", "sing");

james.enjoys();
lisa.enjoys();
chuan.enjoys();

// Principle 4

// code example for Explicit Binding
console.log("***'this' in Explicit Binding:\n");
console.log("lisa.enjoys() using .call(james)");
    lisa.enjoys.call(james);
console.log("chuan.enjoys() using .apply(lisa)");
    chuan.enjoys.apply(lisa);
