var taxi = {
    make: "Weville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,

    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        // drive code here;
    }
};

console.log("I drive a " + taxi.make + " " + taxi.model + " that was built in " + taxi.year)