function vehicle(Make, Model, Year, Color) {
    this.vehicle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicle_Year = Year;
    this.vehicle_Color = Color;
}
var Jr = new vehicle("BMW", "3-Series", "2023", "Blue");
var Carson = new vehicle("Dodge", "Challenger", "2023", "Red");
var Skye = new vehicle("Mercedes-Benz", "C300", "2023", "Pink");
function my_Function() {
    document.getElementById("keywords_And_Constructors").innerHTML =
    "Carson drives a " + Carson.vehicle_Color + "-colored" + Carson.vehicle_Model +
    "manufactured in" + Carson.vehicle_Year;
}