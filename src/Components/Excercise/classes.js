class Cars {
  constructor(make, model, year, price, type) {

    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
    this.type = type;
    this.emission = (type) => {
      if ('Diesel') {
        return 'more';
      }
      else {
        return 'moderate';
      }
    }

  }
}
export Cars default;
//  class MyCar extends Cars {
//
//    constructor(make, model, year, price, type,drive){
//      super();
//      this.drive=drive;
//    }
//  }
// let myCar=new MyCar('Honda','Accord',2014,25000,'Diesel','Automatic');
// console.log(myCar.emission());
// console.log(myCar.drive);
