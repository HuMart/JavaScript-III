/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window, is everything "not to be use"
* 2. inplicit is for use on objects
* 3. explicit is for use on functions
* 4. new is for constructors 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hello(name) {
return `Hello ${this.name}`;
}
console.log(hello("World!"));


// Principle 2

// code example for Implicit Binding
const myGreeting = {
    greeting: "Hello",
    speak: function(name) {
        console.log(`${this.greeting}, my name is ${name}`);
        console.log(this);
    }
};
myGreeting.speak("Hugo");


// Principle 3

// code example for New Binding
function MySelf(name, last_name, hobby) {
    this.name = name;
    this.last_name = last_name;
    this.hobby = hobby;
    this.speak = function() {
        console.log('My name is ' + this.name +' '+this.last_name+' and I like to '+ this.hobby);
        console.log(this);
    };
}
const hugo = new MySelf("Hugo","Martinez","ride my byke");
const santi = new MySelf("Santi","Martinez","play video games");
hugo.speak();
santi.speak();
// Principle 4

// code example for Explicit Binding

hugo.speak.call(santi);
santi.speak.apply(hugo);


