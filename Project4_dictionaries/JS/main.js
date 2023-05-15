function my_Dictionary() {
    var animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Bully",
        Age:1,
        Sound:"Bark!",
    };
    document.getElementById("Dictionary").innerHTML = animal.Sound; // The output would be Bark!//
}

function my_Dictionary2() {
    var animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Bully",
        Age:1,
        Sound:"Bark!",
    };
    delete animal.Sound;  // The output of this code would be: “undefined” since the value no longer exists in our “dictionary.”//
    document.getElementById("Dictionary1").innerHTML = animal.Sound; // The output would be Bark!//
}
