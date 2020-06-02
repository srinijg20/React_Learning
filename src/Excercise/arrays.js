
const a1=[{age:36 ,name:"Srini"},{age:35,name:"Priya"},{age:5,name:"Adhya"}];
const a2=[{age:36,name:"Joghee"}]
const a3=a1.concat(a2)
//console.log(a3)

const mySet = new Set(a3)
mySet.add({age:36,name:"Srini"})
//console.log(mySet)

const a4=[20,25,29,2,5];

const newArray=a3.filter(n=>n.age ===36)
//console.log(newArray)

const mapArray= a3.map((a,index,a4)=>`${a.age} ::index:: ${index} ::array ${a4[index]}`)
console.log(mapArray)
 