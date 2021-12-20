function OldCar() {
    this.brand = "Audi";
    this.model = "A8";
    this.sayHi = function () {
        console.log(`Hello from ${this.brand}! I'm model ${this.model}`);
    }
}

class Car {

    constructor({brand: brandModel, model = "A8"}) {
        this.brand = brandModel;
        this.model = model;
    }

    sayHi() {
        console.log(`Hello from ${this.brand}! I'm model ${this.model}`);
    }
}

const car = new Car({model: "A3", brand: "Audi"});
car.sayHi();