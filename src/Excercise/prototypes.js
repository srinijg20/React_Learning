
///always starts with caps as it is function constructor
let Person = function(name,DOB,job){
  this.name=name;
  this.DOB=DOB;
  this.job=job;

}
Person.prototype.age=function(){
  console.log(this.DOB);
  let year= new Date();
//  console.log(year.getFullYear());
  return year.getFullYear()-this.DOB;
}
Person.prototype.nationality= 'Indian';
let srini=new Person('Srini',1983,'SE',)
//console.log(srini.DOB);
console.log(srini.age());
console.log(srini.nationality)
console.log(srini.hasOwnProperty('jo'));
