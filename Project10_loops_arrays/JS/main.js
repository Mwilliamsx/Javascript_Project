function call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 22) {  // Counting all the way until 21// 
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var cars = ["Bmw 3 Series", "Dodge Challenger", "Corvette", "Mustang", "Dodge Challenger"]; //The output of this code would be this//
var content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < cars.length; Y++) {
        content += cars[Y] + "<br>";
    }
    document.getElementById("list_of_Cars").innerHTML = content;
}

function air_Jordans() {
    var air_Jordan = [];
    air_Jordans[0] = "Air Jordan 1's"
    air_Jordans[1] = "Air Jordan 6's"
    air_Jordans[2] = "Air Jordan 14's"
    document.getElementById("sneakers").innerHTML = "I just purchased a pair of " + air_Jordans[2] + ".";
}

//object with properties and a method in JavaScript below//
let car = {
    make: "Dodge",
    model: "Challenger",
    year: "2023",
    color: "red",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_Object").innerHTML = car.description();