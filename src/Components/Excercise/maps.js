let temp = new Map();
temp.set('srini','vasan')
temp.set('priya','CG')
temp.set('adhya','srini')
console.log(temp.get('srini'))
console.log(temp.size)
console.log(temp.values())
console.log(temp.keys())
for (let [key, value] of temp) {
  console.log(`${key} = ${value}`);

}
temp.forEach((value,key)=>console.log(`${key} :: ${value}`))
