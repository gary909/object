function CarConstructor (make, model, year, color, passengers, convertable, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertable = convertable;
    this.mileage = mileage;
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