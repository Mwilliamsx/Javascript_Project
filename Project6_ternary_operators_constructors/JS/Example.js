function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var starting_Point = 9;
        function plus_One() {starting_Point += 1;}
        plus_One();
        return starting_Point;
    }
}