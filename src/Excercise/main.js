function Details(firstName, lastName, sex, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sex = sex;
  this.age = age;
  this.fullName = function() {
    let name = this.firstName + " " + this.lastName;
    return name;
  };
}

function validation() {
  let uname = document.getElementById("username");
  let passwd = document.getElementById("password");
  let regx = /^[A-Z]([A-Za-z0-9\.-@]{12})$/;
  if (uname.value == "") {
    uname.style.cssText = "color: red; border: solid 2px red";
    document.getElementById("usererror").innerHTML = "Username cannot be blank!";
    document.getElementById("usererror").style.visibility = "visible";
    return false;
  } else if (passwd.value == "") {
    passwd.style.cssText = "color: red; border: solid 2px red";
    document.getElementById("passerror").innerHTML = "Password cannot be blank!";
    document.getElementById("passerror").style.visibility = "visible";
    return false;

  } else if (regx.test(passwd.value) == false) {
    document.getElementById("passerror").innerHTML = "InValid Password";
    document.getElementById("passerror").style.visibility = "visible";
    document.getElementById("passerror").style.color = "red";
    return false;
  }
  else {
    return true;
  }
}

function fade1(){
  $("#loginCheck").fadeToggle(20);
}

//template literals
function fncheck(){
  let a=20;
  if (true) {
    let a=50;
    console.log(a);
  }
//var b = a+2;
console.log(`values of a is "
${a}`);
}
//console.log(fncheck());

//default parameters

function go() {
  return ':P'
}

function withDefaults(a, b = 5) {
  return a+b;
}

function fnhello($a='hello!')
{
  return $a;
}

console.log(withDefaults(2));
console.log(fnhello("vv"));

///SPREAD operator

 function fnSpread(a=[]){
   return Math.min(...a)
 }
 console.log(fnSpread([10,29,30]));

 //arrow function

 let z=(a,b)=> a+b;
 console.log(z(2,3));

//ARRAYS

let colors=['red','green','blue'];
colors.forEach((element) => {
  console.log(element.length);
});

let a1=[{age:36 ,name:"Srini"},{age:35,name:"Priya"},{age:5,name:"Adhya"}];
let age1=(item)=>{
  return item.age;
}
console.log(a1.filer(age1));


// How to generate a random number

// let getRandomNumber = function(start, range) {
//   let getRandom = Math.floor(Math.random() * range + start);
//   while (getRandom > range) {
//     getRandom = Math.floor(Math.random() * range + start);
//   }
//   return getRandom;
// };
//
// // console.log(getRandomNumber(7, 12));
//
// function checkpalindrome(name){
// let a="";
// let b;
// let str=name.toUpperCase();
// let len=str.length;
// console.log(len);
// for (let i = len; i >=0; i--) {
//   a +=str.charAt(i);
//   console.log("a value is "+a);
// }
//
// if(a==str){
// b = name+" is palindrome";
// return b;
// }else
// {
//   b=name+" is not palindrome";
//   return b;
// }
// }
// console.log(checkpalindrome("Madam"));
