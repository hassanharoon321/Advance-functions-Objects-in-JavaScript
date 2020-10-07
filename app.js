                                                //functions (Basics)

function calAge(birthYear){
        return 2020 - birthYear;
}

var ageHassan = calAge(1999);
var ageBaa = calAge(2015);
 
console.log(ageHassan);
console.log(ageBaa);

function yearsUntilRetirement(year, firstName){
    var age = calAge(year);
    var retirement = 65 - age;
    if(retirement>0 ){
        console.log(firstName + " retires in " + retirement+" years")
    }
    else{
        console.log(firstName +" is Already retired")
    }
}

yearsUntilRetirement(1999,"Hassan")
yearsUntilRetirement(1948,"Pawan")
yearsUntilRetirement(1969,"Jassas")


                                        //Functions Statements and Expressions

//Function Decleration
function whatDoYouDo(job,firstName){
    
}

//Function Expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case "teacher":
            return firstName + " teaches who to code"
        case "driver":
            return firstName + " drives a car in Uber"
        case "designer":
            return firstName + " Design Stunning Websites"
        default:
            return firstName + " Do Nothing"

    }
}

console.log(whatDoYouDo("teacher","Hassan"));
console.log(whatDoYouDo("driver","Hassan"));
console.log(whatDoYouDo("designer","Hassan"));
console.log(whatDoYouDo("retired","Hassan"));

                                            //Objects & Properties (video 3)

//Objects Literals
var john = {
    firstName : "John",
    lastName : "Smith",
    birthYear : 1990,
    family : ["Jane","Mark","Bob","Emily"],
    job: "teacher",
    isMarried: false
}

console.log(john.firstName);

console.log(john["lastName"]);
var x = "birthYear"
console.log(john[x]);

john.job = "designer"
john["isMarried"] = true;
console.log(john)

//New Object Syntax
var jane = new Object()
    jane.name = "jane";
    jane.birthYear = 1992;
    jane["lastName"] = "Smith";

console.log(jane)

                                    //Objects and Methods(video 4)

var john = {
    firstName : "John",
    lastName : "Smith",
    birthYear : 1999,
    family : ["Jane","Mark","Bob","Emily"],
    job: "teacher",
    isMarried: false,
    calcAge : function(){
         this.age =  2020-this.birthYear;
    }
    
};

john.calcAge();

console.log(john);

                                            //Coding Challenge(video 5)

var mark ={
    fullName: "Mark Smith",
    height: 0.14986,
    mass: 120,
    calBmi : function(){
        return this.bmi = this.mass / (this.height*this.height);
    }
}

var john = {
    fullName: "John Smith",
    height: 0.14478,
    mass: 130,
    calBmi : function(){
        return this.bmi = this.mass / (this.height*this.height);
    }
}

john.calBmi();
var johnBmi = john.bmi
console.log( john.fullName +" "+johnBmi)

mark.calBmi()
var markBmi = mark.bmi
console.log( mark.fullName+" "+markBmi)

if(johnBmi>markBmi){
    console.log(john.fullName + " has greater Bmi than "+ mark.fullName);
}
else if(markBmi>johnBmi){
    console.log(mark.fullName + " has greater Bmi than "+ john.fullName);
}
else if(markBmi===johnBmi){
    console.log(mark.fullName + " & " + john.fullName +" BMI were Equal");
}

// -------------------------------------Something which is called an easy------------------------
//--------------------------------------Sounds like advance topics-------------------------------

                        //Everything is an Object Inheritance and ProtoType chain(vido 6) 

//Theory
//Everything is an object in javascript not 100% correct


//PRIMITIVES:
    //.numbers
    //.strings
    //.booleans
    //.undefined
    //.null

//Everything else is object

//constructor and prototype were same
//In constructor we can create many instances we want

//SUMMARY:
// 1) Every javascript object has a prototype property, which makes inheritance possible in javascript
// 2) The prototype property of an object is where we put methods and properties that we want others objects to inherit
// 3) The constructor prototype property is NOT the prototype of the constructor itself, it's the prototype of 
    //All Instances that are created through it
// 4) When a certain method (or property) is called, the search starts in the object itself, and if it cannot be 
    //found, the search moves on the objects Prototype. This continues until the method is found: Protype chain  


                            //creating Objects Functions Constructors(video 7)

//function constructor

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//Inheritance
//Constructor function mai agr function bnaow gai to jab bh koi new constructor call hooga to us kai andar agr function call na karna hoto bahir akar inheritance karkay Person.prottype.functionName use kar skthay ho 
Person.prototype.calculateAge = function(){
    console.log(2020-this.yearOfBirth);
}

//Inhertnace 2
Person.prototype.lastName = "Smith";

var john = new Person("John",1999,"teacher");

var jane = new Person("Jane",1969,"designer");

var mark = new Person("Mark",1948,"retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


                                    //The prototype chain in the console(video 8)

// 1)john which is a person object
// 2)__prot__ is a protype proprty of the john object
// 3)we added calAge and lastName Inheritance inj object
// 4)Person.prototype
// 5)john__proto__ === Person.prototype (true)
// 6)john object constructor (Everything is an object)
// 7)john.hasOwnProperty("job") (true)
// 8)john.HasOwnProperty("lastName") (false) because we inherit it, not his own property
// 9)john instanceOf Person (true)
//10)agr array ko console mai open karoo to to waha par uskai __proto__ mai bh methods hoongai like push,pop,shift,unshift,splice (everything else is object)


                                    //Creating Object object.create(video 9)

var personProto = {
    calculateAge : function(){
        console.log(2020-this.yearOfBirth)
    }
}

var john = Object.create(personProto);
john.name = "john";
john.yearOfBirth = 1999;
john.job = "teacher";

var jane = Object.create(personProto,{
    name: {value:"jane"},
    yearOfBirth : {value: 1999},
    job: {value: "teacher"}
})

                                            //Primitives vs objects(video 10)

//primitives
var a = 23;
var b = a;
a = 46;
console.log(a)
console.log(b)

//Objects
var obj1 = {
    name: "john",
    age : 26
}
var obj2 = obj1
obj1.age = 30
console.log(obj1.age);
console.log(obj2.age);

//functions
var age = 27;
var obj = {
    name: "jonas",
    city: "karachi"
}

function change(a,b){
    a = 36;
    b.city="pak";
}

change(age,obj);
console.log(age)
console.log(obj.city)


//commit one end

                                //First Class Functions passing Functions as Argument(video 11)

// 1) A functions is an instance of the object
// 2) A behaves likes any others objects
// 3) We can store functions in a variables
// 4) We can pass a function as an argument to another function
// 5) We can return a function from a function 

var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr,fn){
    var arrRes = [];
    for(var i =0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el>=18 && el<=81){
    return Math.round(206.9 - (0.67 * el)); 
    }
    else{
        return -1;
    }
}

var ages = arrayCalc(years,calculateAge);

var fullAges = arrayCalc(ages,isFullAge);

var rates = arrayCalc(ages,maxHeartRate)

console.log(ages);
console.log(fullAges);
console.log(rates);

//First Class Functions

var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr,fn){
    var arrRes = [];
    for(var i =0;i< arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020 - el;
}

function isFullAge(el){
    return el >=18;
}

function maxHeartRate(el){
    if(el>=18 && el<=81){
    return Math.round(206.9 -(0.67*el));
    }
    else{
        return -1;
    }
}

var ages = arrayCalc(years,calculateAge);
var fullAge = arrayCalc(ages,isFullAge);
var rates = arrayCalc(ages,maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(rates);


 //First Class Functions Functions Returning Functions(video 12)

function interviewQuestion(job){
    if(job==="designer"){
        return function(name){
            console.log(name+ ", Can you please explain what UX design is?")
        }
        
    }
    else if(job==="teacher"){
        return function(name){
            console.log("What subject do you teach "+name)
        }
    }
    else{
        return function(name){
            console.log("Hello "+name+" What do you do")
        }
    }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");
var ellse = interviewQuestion("driver");

ellse("khan")
teacherQuestion("hassan");
designerQuestion("john");

designerQuestion("siddique")
designerQuestion("Haroon")
teacherQuestion("Badden");

//new way to assign
interviewQuestion("teacher")("hassan")



































