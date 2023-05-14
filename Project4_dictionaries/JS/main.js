function my_Dictionary() {
    var animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Bully",
        Age:1,
        Sound:"Bark!", // The output of our code would be: Bark!//
    };
    delete animal.Sound;  // The output of this code would be: “undefined” since the value no longer exists in our “dictionary.”//
    document.getElementById("Dictionary").innerHTML = animal.Sound;
}