// let person = {
//   firstName: "Shashank",
//   lastName: "Gupta",
//   age: 25,
// };
// person.city = "Ghazipur";
// function sayHello(num1, num2) {
//   return `${num1} X ${num2} = ${num1 * num2}`;
// }
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// person.sayHello = function () {
//   // First metohd of creating method with annonymus function
//   console.log("Hello World!");
// };
// person.sayHello();

// function greet() {
//   // Second way of creating method ( create normal function then assign into method.) Simple! 😊
//   console.log("Hello World!");
// }
// person.sayHello = greet;
// person.sayHello();
// person.greetings = sayHello();
// person.sayHello(4, 6);
// for (let key in person) {
//   console.log(`${key} = ${person[key]}`);
// }

// let person = {
//   firstName: "Shashank",
//   lastName: "Gupta",
//   age: 25,
//   city: "Ghazipur",
//   greeting() {
//     console.log(
//       `Hello I am ${this.firstName} and I have a ${car.brand} car and it's model is ${car.model}`
//     );
//   },
// };

// let car = {
//   brand: "Tata",
//   model: "Safari",
// };
// person.greeting();

// console.log(Math.max(3, 23, 24, 123, 243, 56, 456, -34));
// function range(max, min) {
//   let rangeNo = Math.floor(Math.random() * (max - min + 1)) + min;
//   return rangeNo;
// }
// console.log(range(10, 25));

// let shashank = new Object();
// shashank.age = 25;
// shashank.favDrink = "Hot Coffee";
// console.log(shashank);

//   get getName() {
//     console.log(
//       `Hi My name is ${this.name} and my age and Mobile no. is respectively ${this.age} ${this.mobNo}. 😊 `
//     );
//     return this.name.toUpperCase();
//   },
// let shashank = {
//     objArr: ["S", "H", "A", "S", "H", "A", "N", "K"],
//     name: "Shashank",
//     age: 25,
//     mobNo: 9415881291,
//     set setName(n){
//         this.name = n.toUpperCase();
//     }
// };
// shashank.setName = "Rishi";
// console.log(shashank)

/********************* Constructor Object ************************************/
// let student_1 = {
//     firstName: "Shashank",
//     lastName: "Gupta",
//     age: 25,
//     class: "MCA",
//     mobNo: +8176990986,
//     city: "Ghazipur",
//     state: "Uttar Pradesh"
// };
// console.log(student_1);

/********************* Constructor Object Started ************************************/

// function Student(fName, lName, age, cls, mobNo, city, state){
//     this.firsName = fName;
//     this.lastName = lName;
//     this.age = age;
//     this.class = cls;
//     this.mobileNo = mobNo;
//     this.city = city;
//     this.state = state;
// }
// let student_1 = new Student ("Shashank", "Gupta", 25, "MCA", +918176990986, "Ghazipur", "Uttar Pradesh");
// let student_2 = new Student ("Harsh", "Gupta", 20, "Bsc", +91876234734, "Ghazipur", "Uttar Pradesh" );
// console.log(student_2)

/********************* Nested Object ************************************/
// let employe = {
//   id: 101,
//   company: "ReBrand Gurus",
//   personalInfo: {
//     name: "Shashank Gupta",
//     email: "shashank@rebranddev.com",
//     credentials: {
//       userId: "Rbg-Admin",
//       password: "Admin@9415!",
//     },
//   },
// };
// console.log(employe.personalInfo.credentials);

/********************* Hoisting ************************************/
// var x;
// x = 19;
// console.log(x);
// let X;
// x = 19;
// console.log(x);
/********************* Document Object Model ************************************/
// let list = document.getElementsByClassName("inner-list list-box");
// console.log(list.length);
// for(let i = 0 ; i < list.length ; i++){
//     list[i].innerHTML = "Hello";
// }

// let select = document.querySelectorAll(".list .inner-list");
// // select.innerHTML = "changed!"
// console.log(select)
// for(let i = 0; i<select.length; i++){
//     select[i].innerHTML = "changed!"
//     console.log(select[i])
// }

// let child = document.querySelector(".list");
// let parent = child.querySelector(".inner-list");
// let node = child.children;
// for(let i = 0; i<node.length; i++){

//     node[i].innerHTML = "Changed!"
// }
// console.log(node);

/********************* Create and Append Element ************************************/
// let introDiv = document.querySelector(".intro");
// let heading = document.createElement('h1');
// // let text = document.createTextNode("This heading is added by javascript");
// // heading.appendChild(text)
// heading.textContent = "This heading is added by Text Content Property."
// let para = document.getElementsByClassName("intro");
// let para_child = document.querySelector("p")
// heading.className = "heading_cls"
// document.body.appendChild(heading);
// console.log(para_child)

// let list = document.querySelector(".list");
// let new_added_item = document.createElement("li");
// new_added_item.textContent = "New List Added No. 6";
// let pos = list.
// list.insertBefore(new_added_item ,pos);
// // list.appendChild(new_added_item);
// new_added_item.className = "heading_cls"

/********************* Removing child element ************************************/

// let parent = document.querySelector(".menu");
// let elem = parent.firstElementChild.nextElementSibling;
// parent.removeChild(elem)

/********************* Cloning Element ************************************/
// let parent = document.querySelector(".menu");
// let cloneElem = parent.cloneNode(true);  // cloneNode(true/false); for cloning elements.( If true will be inside the paranthesis then it will return all child elements. In other case false will return the single parent element)
// document.body.appendChild(cloneElem);
// cloneElem.id = "mobile-menu";
// cloneElem.className = "mobile-menu"

//  console.log("Hi my name is " + name + "i have" +a + " Rs." );
// "  " // double quotes
// ' ' // single quotes
// ` ` // back tick

// console.log(`Hi my name is ${name} I have ${a}Rs.`);

// let employee = {
//     fName : "Shashank",
//     lastName: "Gupta",
//     age : 25,
//     city: "Noida",
//     mobNo: 9415881291,
//     pinCode: 233001

// }
// num = 12; // even / odd
// if (num % 2 == 0) {
//   console.log("number is even");
// } else {
//   console.log("number is odd");
// }

/********************* Insert Adjacent HtML ************************************/
/* ################### there are 4 parameter in insertAdjacentHTML-- beforebegin, afterbegin, beforeend, afterend #######################*/

// let menu_selected = document.querySelector(".menu");
// let html = "<h2>This line is added by insert Adjacent HTML</h2>";
// menu_selected.insertAdjacentHTML('beforeend', html);

/********************* Get and Change Attribute ************************************/
/* ################### we can get already set attribute using "getAttribute("attributeName") and also can change using setAttribute("attributeName", "value") and in case i have to check the existing attribute for that i have a method hasAttribute("attributeName") it will return true or false value now i have to remove the attribute for that i have property removeAttribute("attributeName")#######################*/

// let btn = document.getElementById("btn");
//  console.log(btn.hasAttribute("class"));

/********************* addEventListener in DOM ************************************/

// let btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     console.log("Button is clicked using annonymus function")
// });

/********************* removeEventListener in DOM ************************************/

// let btn = document.getElementById("btn");
// btn.addEventListener("click", click1);
// btn.addEventListener("click", click2);
// function click1(){
//     console.log("Click 1 is Activated");
// }
// function click2(){
//     console.log("Click 2 is Activated");
// }
// btn.removeEventListener("click", click1)
/********************* keyboard listener ************************************/
// window.addEventListener('keyup', check);

// function check(e){
//     console.log(e.key);
// }

/********************* Mouse Scroll Listener ************************************/

// window.addEventListener('scroll', function(){
//     console.log("Mouse is scrolling!");
// })

// window.addEventListener('wheel', function(event){
//     if(event.deltaY < 0){
//         console.log("Mouse wheel is going Up");
//     }
//     else{
//         console.log("Mouse Wheel is going down")
//     }
// })

// window.addEventListener('scroll', function(){
//     if(window.pageYOffset > 50){
//         document.body.style =  "background:#000; transition: all 0.7s ease";
//     }
//     else{
//         document.body.style =  "background: #fff; transition: all 0.7s ease";
//     }
// })

// let input = document.getElementById("input_field");
// input.addEventListener('focus', focusState);
// input.addEventListener('blur', blurState);
// input.addEventListener('input', changeState)
// function focusState(){
//     input.style = "background: burlywood"
// }
// function blurState(){
//     input.style = "background: purple"
// }
// function changeState(){
//     console.log(this.value);
// }

// let div = document.querySelector(".main-div");
// let btn = document.querySelector(".btn");
// div.addEventListener("click", myDivState, true);
// btn.addEventListener("click", mybodyState, true);
// document.body.addEventListener("click", mybtnState, true);

// function myDivState() {
//   console.log("Div clicked");
// }
// function mybtnState() {
//   console.log("button clicked");
// }
// function mybodyState() {
//   console.log("body clicked");
// }

/********************* Event Bubbling in Events ************************************/
// let main_div = document.querySelector(".main-div");
// let button = document.querySelector(".btn");
// main_div.addEventListener('click', myDivState );
// button.addEventListener('click', myButtonState);
// document.body.addEventListener('click', myBodyState);
// function myDivState(){
//     console.log("Div is clicked!");
// }
// function myButtonState(event){
//     console.log("Button Clicked!");
//     event.stopPropagation()
// }
// function myBodyState(){
//     console.log("Body is clicked!")
// }

/********************* Prevent Default ************************************/
// let myForm = document.querySelector(".form_class");
// myForm.addEventListener("keydown", checkName);

// function checkName(e) {
//   const key = e.key;
//   const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
//   if (!lowerCaseAlphabet.includes(key)) {
//     e.preventDefault();
//     displaywarning(
//       `Please use lowercase letters only.\n key pressed: ${key}\n`
//     );
//   }
// }
// let warningTimeOut;
// const warningBox = document.createElement("div");
// warningBox.className = "warning";
// function displaywarning(msg) {
//   warningBox.innerHTML = msg;

//   if (document.body.contains(warningBox)) {
//     clearTimeout(warningTimeOut);
//   } else {
//     myForm.parentNode.insertBefore(warningBox, myForm.nextSibling);
//   }
//   warningTimeOut = setTimeout(() => {
//     warningBox.parentNode.removeChild(warningBox);
//     warningTimeOut = -1;
//   }, 2000);
// }
/********************* Inner/outer Height/width of window************************************/

// console.log(`Inner Height ${window.innerHeight}`);
// console.log(`Inner Width ${innerWidth}`);
// console.log(`Outer Height ${window.outerHeight}`);
// console.log(`Outer Width ${outerWidth}`);

/******************** Popup window close and open ************************************/

// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2")
// let btn3 = document.getElementById("btn3");
// let win
// let google_url = "https://www.google.com";
// let yahoo_url = "https://www.yahoo.com";
// let features = "height = 500, width = 800";

// btn1.addEventListener('click',function(){
//     win = window.open(google_url, 'google', features);
// });
// btn2.addEventListener('click', function(){
//     window.open(yahoo_url, 'google', features)
// })
// btn3.addEventListener('click', function(){
//     console.log("button 3")
// })

/************************* Set Time Interval and set time out************************************/

// setTimeout(function(){
//     alert("I am annonymus function ( )")
// }, 2000);

// let stopButton = document.getElementById("stopBtn");

// let variable = setInterval(function(){
//     alert("Please Subscribe! Please Please Please 🙏🙏🙏");
//     if(stopButton.addEventListener('click', function(){
//         clearTimeout(variable);
//         alert("ThankYou DND Mode is activated");
//     }));
// },3000)

/************************* Location Object ************************************/

// console.log(location.href)

/************************* Default Parameter ************************************/

// function greetings (msg = "This is default Parameter"){
//     console.log(msg);
// }
// greetings("This is not default");

/************************* Rest Parameter and Spread Operator ************************************/

// function restParameter (...args){
//     let sum = 0;
//     for(let i = 0; i<args.length; i++){
//         sum += args[i];
//     }
//     return sum;
// }
// console.log(`Sum Of the total = ${restParameter(10, 20, 40, 15, 23, 53)}`);

// let array1 = [12,432,42,4,234,12,3,4132,4,34,23,4,343,4];
// let array2 = [3412,412,4,124,34,34,243,3,42,234,234,2];

// console.log(Math.max(...array1));  // Spread Syntax

/************************* For Of Loop ************************************/

// let dummyArray = "My Name is Shashank Gupta"
// for(let key of dummyArray){
//     console.log( key );
// }

/************************* Template Literals ************************************/

// let name = `My name is Shashank
// Gupta`;
// console.log(name);

/************************* Array Destructing ************************************/

// function arrayDestructuring() {
//   let Shashankdetails = [
//     "Shashank",
//     "Gupta",
//     25,
//     "ReBrand Gurus",
//     "Web Developer",
//     9415881291,
//     "Noida",
//   ];
//   let [
//     firsName,
//     lastName,
//     age,
//     company,
//     designation,
//     mobileNo,
//     city = "Ghazipur",
//   ] = Shashankdetails;
//   return arrayDestructuring;
// }
// console.log(arrayDestructuring());

/************************* Object Destructing ************************************/

// let person = {
//   firstName: "Shashank",
//   lastName: "Gupta",
//   age: 25,
//   company_details: {
//     companyName: "ReBrand Gurus",
//     location: "Noida sector 63",
//     empId: "145fdf23",
//   },
// };

// let {
//   firstName: name,
//   lastName,
//   age,
//   company_details: { companyName, location, empId },
// } = person;
// console.log(name);

// function sum(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total = total + args[i];
//   }
//   console.log(total / args.length);
// }
// sum(10, 20, 30, 50);

// import { user } from "./modules/user.js";
// import { cook } from "./modules/user.js";
// import { widthdraw, deposit } from "./modules/account.js";

// widthdraw();
// deposit();
// cook();

// function average(...args) {
//   let total = 0;
//   for (let i = 0; i <= args.length; i++) {
//     (total = total + args[i]) / args.length + 1;
//   }
//   return total;
// }
// console.log(average(20, 10));

// function avr(arg1, arg2, ...args) {
//   let total = 0;
//   for (key of args) {
//     total = total + key;
//   }
//   return Math.floor(total / args.length);
// }
// console.log(avr(2, 3, 4));

// import { widthdraw } from "./modules/account.js";
// import { widthdraw } from "./modules/account.js";
// widthdraw();

// import * as usr from "./modules/account.js";

// usr.deposit();

// import { default as td } from "./modules/account.js";
// td();

// import { type } from "./modules/user";
// import { widthdraw } from "./modules/account";
// type();

// import { circle } from "./modules/circle";
// import { square } from "./modules/square";
// import { triangle } from "./modules/triangle";

// circle();
// square();
// triangle();

// let dummyArray = ["banana", "apple", "guava", "Orange"];
// console.log(dummyArray.length);
// dummyArray.length = 10;
// console.log(dummyArray.length);
// console.log(Object.keys[dummyArray]);

// console.log(dummyArray);

// let person = {}
// console.log(person);
// function PersonFunction(n){
//     this.name = n;

// }
// let person3 = new PersonFunction("Shashank")
// console.log(person3)
/************************* Constructor Function ************************************/
// function Person (fName, lName, age){
//     this.firstName = fName,
//     this.lastName = lName,
//     this.age = age
// }
// Person.prototype.fullName = function(){
//     console.log(this.firstName + " " + this.lastName);
// }
// let person1 = new Person("Shashank", "Gupta", 25); // Making object using constructor Function
// let person2 = new Person("Harsh", "Gupta", 19);

// console.log(person1)
// console.log(person2)
// console.log(person1.fullName())

/*************************clases and Object ************************************/

// class person {
//   // we can define 3 types of method inside the class, 1): constructor method (It calls automatically..). 2): Normal Method (which method we will define ), 3): Static Method (Static Method can be define using static keyword and it can not be call through object. It will be call using class)
//   constructor(n, a) {
//     // Constructor calls automatically.

//     this.name = n;
//     this.age = a;
//   }
//   sayHello() {
//     console.log("Hello World!");
//   }
//   static hi() {
//     // Static method will be call using class, there is no need to create object.
//     console.log(
//       "Hii Shashank!!! I am calling from class and I am static Method"
//     );
//   }
// }

// let realPerson = new person("Shashank", 25); // we are creating object.
// console.log(realPerson);
// realPerson.sayHello(); // for calling the function write the object name and concatinate the function with dot (.)

// person.hi();

/************************* Inheritence In ES6 ************************************/

// class emp {
//     constructor (name, age, designation){
//         this.name = name;
//         this.age = age;
//         this.designation = designation;
//     }
// }
// // let employee = new emp();
// class manager extends emp{

// }
// let manager1 = new manager();
// console.log(manager1)
/************************* Arrow Function ************************************/

// function sum(a, b){
//     return a + b;
// }

// let sum = (a, b) =>{
//     return a + b;
// }

// let sum = (a, b) => a + b ;
// console.log(sum(2, 5))

// let double = a => 2*a;
// console.log(double(5))

// let random = (max, min) => Math.floor(Math.random() * (max - min + 1))+ min
// console.log(random(10, 50));

// let button = document.getElementById("btn");
// let ludoButton = document.querySelector(".ludo");
// let heading = document.createElement("h3");
// let container = document.getElementById("headingContainer");
// heading.textContent = "Hurrey!!";
// function randomNum(max, min) {
//   let number = Math.floor(Math.random() * (max - min + 1)) + min;
//   if (number == 6) {
//     console.log("Play Again");
//     document.body.appendChild(heading);
//     container.appendChild(heading);
//   }
//   return number;
// }
// button.addEventListener("click", function () {
//   console.log("button clicked...");
//   ludoButton.innerHTML = randomNum(1, 7);
// });

// let bedardArray = ["abc", "bcd", "fda", "daas", "ewer"];
// console.log(bedardArray.length);
// bedardArray[150] = "asddf";
// console.log(bedardArray.length);

/************************* Arrow Function Used ************************************/
// document.addEventListener("click", () => {
//   console.log("Clicked....!!!!");
// });

/************************* CallBack Function ************************************/

// function sayHello() {
//   console.log("Hello I am SayHello Function");
// }
// function sayHi(){
//     console.log("Hii");
// }
// function addition(num1, num2, callback) {
//   console.log(num1 + num2);
//   callback();
// }
// let a = 1434;
// let b = 342;
// console.log(addition(a, b, sayHello));
// console.log(addition(424, 23, sayHi));
// addition(234, 2342, function(){
//     console.log("Hello by annonymus..!!!")
// })

/************************* Map ************************************/

// let mapArray = [23, 234, 12, 10, 9, 1245, 234];
// let newArray = [];
// function usingMap(){
//     for(let i = 0; i<mapArray.length; i++){
//         newArray[i] = mapArray[i] * 2;
//     }
//     console.log(newArray)
//     console.log(mapArray);
// }

// newArray = mapArray.map(function(val){
//     return val * 2;
// });
// console.log(newArray);

// newArray = mapArray.map((val) => val * 3);
// console.log(newArray);

/************************* Filter ************************************/
// newArray = mapArray.filter(val => val > 10);
// console.log(newArray);

// let team = [
//     {
//         name : "Shashank",
//         designation: "Developer"
//     },
//     {
//         name : "Pooja",
//         designation: "SEO"
//     },
//     {
//         name : "Abhishek",
//         designation: "Developer"
//     },
//     {
//         name : "Sazia",
//         designation: "Developer"
//     },
//     {
//         name : "Santosh",
//         designation: "E-mail Marketing"
//     },
//     {
//         name : "Ashutosh",
//         designation: "Project Manager"
//     },
// ]

// let teamList = [{}];
// teamList = team.filter(val => val.designation == 'Developer');
// console.log(teamList);

// document.cookie = "Item = Laptop; expires = Thu, 14 Dec 2023 12:00:00 UTC"

// document.cookie = "Item = Constaints"

// let programLang = ["Hindi", "English", "Math"];

// let subjectiveLang = ["C", "Java", "JavaScript"];

// let lang = [...programLang, ...subjectiveLang];
// // console.log(lang);

// let array1 = [12,432,42,4,234,12,3,4132,4,34,23,4,343,4];
// console.log(Math.max(array1));

// let arr = ["I", "am", "Shashank", "This", "is", "well", "known", "thing", "."];
// console.log(arr[1]);
// delete arr[1];
// console.log(arr);
// console.log(arr.length);

// // arr.splice(0, 3, "I", "am", "Harsh");
// arr.splice(3, 0, "Gupta", "and");
// console.log(arr)
// console.log(arr.splice(-4, 3));
// console.log(arr);
// console.log(arr);
// arr.slice(3, 5);
// let arr = [1, 2, 4, 1, 4, 5, 6, 7, 12, 23, 32, 1, 2, 3, 3]
// let removeDuplicateElement = Array.from(new Set(arr));
// console.log(removeDuplicateElement);
// let arr = ["S", "H", "A", "N", "K"];
// let copyOfArr = arr.slice(1, 4);
// console.log(copyOfArr);

// console.log("Hello Browser!");
// setTimeout(function(){
//     console.log("Hey Asynchronous...!");
//     console.log("Hello Synchronous...!!!");
// }, 2000);

// console.log("Hello");
// console.log("Hello1");
// setTimeout(function () {
//   console.log("Hello2");
// }, 0);
// console.log("Hello 3")

/************************* Promises ************************************/

// let ans = new Promise((res, rej) => {
//   if (false) {
//     return res();
//   } else {
//     return rej();
//   }
// });
// ans
//   .then(function () {
//     console.log("Resolved!");
//   })
//   .catch(function () {
//     console.log("Rejected State!");
//   });

// let ans = new Promise((rej, res) =>{
//   let n = Math.floor(Math.random * 10);
//   if(n < 5){
//     return res();
//   }
//   else{
//     return rej();
//   }
// });
// ans
//   .then(function(){
//     console.log("Statement Resolved!")
//   })
//   .catch(function(){
//     console.log("Statement Rejected!")
//   })

// Asynchronius ko Synchronious ki trah chalayenge

// let ans = new Promise((res, rej) => {
//   return res("Sabse phle ghar pr aao");
// });

// let P2 = ans.then(function (data) {
//   console.log(data);
//   new Promise((res, rej) => {
//     return res("Gate kholo aur Gate lagao..");
//   });
// });

// P2.then((function(data1){
//   console.log(data1)

//   // new Promise((res, rej) =>{
//   //   return res("")
//   // })
// }))

// = assignment operator
// == equal to a == b
// === strict equal

// let employee = ["shashank", "25", "Noida"];
// for(let i = 0; i<employee.length; i++){
//   console.log(`Total Number of elements is ${employee.length} ${[i+1]}`)
// }

// const newUsers = {
//     userName : "Shashank",
//     age: 25,
//     fees : 999,
//     gender: "Male",
//     welcomeMessage : function(){
//         console.log(`Hello ${this.userName}  `)
//     }
// }
// console.log(newUsers.welcomeMessage());

// const arrowFn = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(arrowFn(12, 23));

// const addTwo = (num1, num2) => {
//     return num1 + num2 };
// console.log(addTwo(321, 133));

// let fnPractice = function () {
//   function fnInsideFn() {
//     let fName = "Shashank";
//     console.log(fName);
//   }
//   console.log(fName);
// };
// fnPractice.fnInsideFn();

// let x = 10, y = 20, z= 30;
// let name = "Shashank"

// const result = x + y + z;
// console.log(typeof name)

// console.error("Hello World!");

// const myNum = [12, 1234, 21, 34, 5, 6, 2, 1, 0];

// const result = myNum.filter( (key) => {
//      key > 12;
// } );

// console.log(result);

// let num = 12, flag = 0;

// for(let i = 0; i < num/2; i++){
//     if(n % i == 0){
//         flag == 1;
//     }
// }
// if()

// let x = 112341, rem, sum = 0
// while(x != 0){
//     rem = x % 10;
//     sum = sum * 10 + rem;
//     x = Math.floor(x / 10);
// }
// console.log(sum)

// let userName = "John"; //Global
// function show(){
//     let userName = "Shashank"; // Local
//     console.log(userName);
// }
// console.log(userName); // JOhn
// show();                 // Shashank
// console.log(userName); // Shashank , John

// console.log(a);
// var a;

// function primeNumber() {
//     if (number < 2) {
//       console.log(number + "is not a prime number");
//     } else if (number < 2 & number / 1 == 0 & number / number == 0){
//       console.log(number + "is a prime number");
//     }
//     } else {
//       console.log(number + "is not a prime number");

//   }
//   primeNumber(25);

//   function pM () {
//     if (num < 2){
//         console.log(number + "is not a prime number");
//     }
//     else if (number < 2 && number / 1 == 0 && number / number == 0){
//         console.log(number + "is a prime number");
//     }
//     else{
//         console.log(number + "is not a prime number");
//     }
//   }

// console.log(10 > "2");
// console.log("10" < 2);

// let array = [ 134,314,124,1412,431243124,124,1,324,1,24,1,24];

// for (let i = 0; i<array.length; i++){
//     array[i] = array[i] +1;
//     console.log(array[i]);
// }

// var a = 234;
// let x = 123;

// let dummyArray = [1, 34, 3, 5, 7, 43, 4]

// for (let i = 0 ; i < dummyArray.length; i++){
//     if(dummyArray [i] = 5){
//         console.log(dummyArray[i]);
//     }
// }

// console.log(dummyArray.shift(5));
// console.log

// dummyArray.filter(5);

// let newArray = dummyArray.filter( (key) => key !== 5 )
// console.log( newArray );

// let cAdding = document.getElementById("circle");
// let test = document.getElementById("test")

// function customAddFun (className){
//     cAdding.classList.add = className;
// }
// test.customAddFun("testing")

// let example = function customAddFun (element, className){
//     element.classList.add = className;
// }

// let arr = [134, 34, 1234, 12, 42, 4, 3, 65];

// function higherFunction() {
//   return function regularFunction() {
//     console.log("Hello Guys!!!");
//   };
// }
// let a = higherFunction();
// a();

// function musicCreator(songName, singer, songFun){
//     this.songName = songName;
//     this.singer = singer;
//     function songFun(){
//         return("Arjit Singh");
//     }
// }
// let newMusic = new musicCreator("let me down slowly", "Elie Goudling")
// console.log(newMusic)
// console.log(newMusic.songFun());

// function abcd (){
//     let a = 13;
// }
// let a = 23415;
// console.log(a)
// let array = [12, 45, 13, 15, 75, 23]
// let target = 38;
// // let result = 0;
// function addTwoSum() {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === target) {
//                 // console.log("Yes Found!");
//                 console.log([i, j]);
//             }
//         }
//     }
// }
// console.log(addTwoSum())
// addTwoSum();
// addTwoSum(array = [13, 43, 7, 5, 73, 4, 19], 12);

// let array = [3, 0, 1, 3, 7];

// filter

// function positiveNum(num){
//     // console.log(num)
//     // for(let i = 0; i<num.length; i++){
//     //     console.log(num[i]);
//     // }
//    let result =  num.filter(val => {
//          return val > 0 ;
//     })
//     return result;
// };
// console.log(positiveNum([4325, -2444442, -2452, -26, 1235235, 43646, 14]));

// let quizData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = Math.floor(Math.random() * quizData.length);
// // for(let i = 0; i < quizData.length; i++){

// //     console.log(result, quizData[i])
// // }

// let node = document.createElement("div");
// node.innerHTML = (result);
// node.appendChild(result)

// let students = ["Shashank", "Harsh", "Aarti"];
// let result = students.filter((name) => name.length > 5);
// console.log(result);

// console.log(typeof null);

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// Revision Starts 31/03/2021
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

// tricky example
// let a = 10, b = 10, c = 10;
// if(a == b == c){                         // Find the output
//     console.log("Hello World");
// }
// else{
//     console.log("Bye Bye!")
// }

/**
* Data type conversion
*/

// let score = Number;
// console.log(typeof score);
// console.log(Number(score));


// 33 => 33
// "33" =>  33
// "33abc" => NaN
// true => 1; false => 0