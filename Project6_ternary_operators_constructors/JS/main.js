function age_Function() {
    var age, can_Vote;
    age = document.getElementById("age").value;
    can_Vote = (age > 17) ? "You can " :"Your not old enough to ";
    document.getElementById("voter").innerHTML = can_Vote + "\n vote";
}