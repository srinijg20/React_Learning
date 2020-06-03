class Person {
name = 'Srini';
age=37;
printAge=()=>{console.log(this.name)};
}

const temp=new Person();
temp.printAge;
