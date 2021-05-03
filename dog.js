function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

/* Duck contructor test
function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}
*/

//How to create a dog using the constuctor =
var fido = new Dog("Fido", "Mixed", 38);

//...and another
var fluffy = new Dog("Fluffy", "Poodle", 30);

//...and another
var spot= new Dog("Spot", "Chihuahua", 10);

var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
    var size = "small";
    if (dogs[i].weight > 10) {
        size = "large";
    }
    console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
}

console.log(fido)
console.log(fido.name)
