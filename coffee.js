function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.weight = function() {
        if (this.ounces >= 16) {
            console.log("You've ordered a large " + this.roast + " coffee.")
        } else if (this.ounces <= 8) {
            console.log("You've ordered a small " + this.roast + " coffee.")
        } else {
            console.log("You've ordered a medium " + this.roast + " coffee.")
        }
    }
}

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.weight());

var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.weight());

var lightRoast = new Coffee("Light Roast", 8);
console.log(lightRoast.weight());