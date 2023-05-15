// 'typeof' This type of operator gives the data type of a variable'.
document.write(typeof "I love my family"); // <-- string //

//The following expression below is written to combine a string and a number//
document.write("2023" + 22);


// '==' is used to check for equality within the value//
document.write((10 + 5) == 15);

// '===' test for strict equality, meaning both the 'type' and 'value'
//     we are comparing have to be the same//

x = 10;
y = 10;
document.write(x === y);

var dateOfBirth1 = "10/12/2025";
var dateOfBirth2 = "10/12/2025";
document.write(dateOfBirth1 === dateOfBirth2);

// '&&' Determines the logic between values or variables, both must be true to return "true"//
document.write(8 > 2 && 16 > 4);

// '||' (or) either logic between values or variables may be true//
document.write(6 > 10 || 10 > 4);
document.write(8 < 4 || 7 < 16 ); 

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}





