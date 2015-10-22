// We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
// 1) What is the purpose of the 'this keyword'?
// 
//Answer
placeholder
for an object, much like "John"
would be
    - in the context of a sentence -
    redressed by the word "he"
when referred to,
further down the line.
    // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?
    //Answer
Keep in mind I inherited this definition of the word from someone
else, and do not claim ownership over it 's authenticity.
The value of "this", when used in a

function, is the object that "owns"
the

function.
The value of“ this ", when used in an object, is the object itself.
The keyword“ this "in an object constructor does not have a value. It is only a substitute for the new object.
The value of“ his " will become the new object when the constructor is used to create an object.
    // 3) What is the difference between call and apply?
    //Answer
So that 's the difference between call and apply . 
Both can be called on functions, which they run in the context of the first argument.
In call the subsequent arguments are passed in to the

function as they are,
while apply expects the second argument to be an array that it unpacks as arguments
for the called

function.
// 4) What does .bind do?
//Answer
Bind in javascript is a method--Function.prototype.bind.bind is a method.
It is called on

function prototype.
This method creates a

function whose body is similar to the

function on which it is called but the 'this'
refers to the first parameter passed to the bind method.Its syntax is
var bindedFunc = Func.

//Next Problem

//Create an object called user which has the following properties.
//username --> which is a string
//email --> which is a string
//getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

//Code Here
var user = {
    username: "Phillip",
    email: "phillippuckett88@gmail.com",
    getUsername: function () {
        return this.username;
    }
};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
console.log(user.getUsername());

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

//Function Invocations Here
var Car = function (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function () {
        return this.move += 10;
    }
};
var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);
debugger;
prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. 
//You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function () {
    return this.year;
};

//Above you're given the getYear function. 
//Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function 
//with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Code Here
getYear.call(mustang);


//New Problem



var user = {
    username: 'iliketurtles',
    age: 13,
    email: 'iliketurtles@gmail.com'
};

var getUsername = function () {
    console.log(this.username);
};

setTimeout(getUsername(user), 5000);

getUsername.apply(user);

/*Above you're given an object, a function, and a setTimeout invocation. 
After 5 seconds, what will the getUsername function return?*/

//Answer Here
undefined

/*In the example above, what is the 'this keyword' bound to when 
getUsername runs?*/

//Answer Here
getUsername

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

{ 
    sayName: function() { 
    alert("Squire"); }, 
        whoAreYou: function() { 
            return this.sayName(); 
        } 
}