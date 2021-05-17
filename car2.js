function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertable = params.convertable;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function() {
        this.started = true;
    }
    this.stop = function() {
        this.started = false
    }
    this.drive = function() {
        if (this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            console.log("Start the engine first.")
        }
    }
};

var cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertable: false,
    mileage: 12892 
};

var cadi = new Car(cadiParams);

if (cadi instanceof Car) {
    console.log("Congrats, it's a Car!");
};

// var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
// var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
// var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281241);
// var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);

// var testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

//var cars = [chevy, cadi, taxi, fiat, testCar];


cadi.start();
cadi.drive();
cadi.drive();
cadi.stop();


