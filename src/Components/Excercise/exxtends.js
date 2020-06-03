import Cars from './classes.js';

class MyCar extends Cars {

  constructor(make, model, year, price, type,drive){
    super();
    this.drive=drive;
  }
}
let myCar=new MyCar('Honda','Accord',2014,25000,'Diesel','Automatic');
console.log(myCar.emission());
console.log(myCar.drive);
