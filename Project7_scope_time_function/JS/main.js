
var my_Favorite_Num = 22; // Global - var assigned outside of function//
function add_Nums_1() {
    document.write(20 + my_Favorite_Num + "<br>");
}
function add_Nums_2() {
    document.write(my_Favorite_Num + 100 + "<br>");
}
add_Nums_1();
add_Nums_2();


function add_Nums_1() {
    var my_Favorite_Num = 22; // Local - var assigned outside of function//
    document.write(20 + my_Favorite_Num + "<br>");
}
function add_Nums_2() {
    document.write(my_Favorite_Num + 100 + "<br>");
}
add_Nums_1();
add_Nums_2();

function age_Function() {
    age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.gegtElementById("how_Old_Are_You?").innerHTML = Vote;
}

function time_Function() {
    var time = new Date() .getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time >= 12 == time < 18) {
        reply = "It is afternoon.";
    }
    else {
        reply = "It is evening time";
    }
    document.getElementById("time_Of_Day").innerHTML = reply;
}

