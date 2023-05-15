var my_Favorite_Num = 22;
function add_Nums_1() {
    document.write(20 + my_Favorite_Num + "<br>");
}
function add_Nums_2() {
    document.write(my_Favorite_Num + 100 + "<br>");
}
add_Nums_1();
add_Nums_2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

