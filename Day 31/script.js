//<-------Inheritance--------->
class Parent {
  constructor(){
    console.log("Entered parent consturctor");
  }
  
  hello() {
    console.log("Hello");
  }
}

class child extends Parent {
  constructor(childName){
    console.log("Entered child consturctor");
    super(); //invoked parent class constructor
    this.childName = childName;
    // console.log(childName);
    console.log("exited child consturctor");
  }
  // hi() {
  //   console.log("I'm child");
  // }

  //<----------Method Overriding----------->
  // hello() {
  //   console.log("I'm child");
  // }
}

let obj = new child("Hissee");
// obj.hello();

//example

// class person{
//   eat(){
//     console.log("Eating");
//   }
// }

// class student extends person{
//   reads(){
//     console.log("reading");
//   }
// }

// let student1 = new student();
// student1.eat();
// student1.reads();


//<------------Class in JS------------>
// class car {
//   constructor(brand, milage){
//     console.log("a car was created");
//     this.brand = brand,
//     this.milage = milage
//   }

//   start(){
//     console.log("Start");
//   }
//   stop(){
//     console.log("stop");
//   }

// setbrand(brand){
//   this.brand = brand
// }
// }

// let toyota = new car("toyota", 10);
// toyota.setbrand("toyota");
// let ford = new car();

// <-----------Prototype---------->
// const employee = {
//   calcTax() {
//     console.log("tax is 10 %");
//   }
// }

// const hissee = {
//   salary : 5000,
// }

// hissee.__proto__ = employee;
