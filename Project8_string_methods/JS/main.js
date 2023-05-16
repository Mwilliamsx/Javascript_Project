function slice_Method(){
    var Sentence = "All work and no play makes Michael a dull boy.";
    var Section = Sentence.slice(27,34);
    document.getElementById("Slice").innerHTML = Section;
}

function full_Sentence() {
    var part_1 = "I'm new ";
    var part_2 = "to coding, ";
    var part_3 = "hopefully this life take me far";
    var whole_Sentence = part_1.concat(part_2, part_3);
    document.getElementById("tapin").innerHTML = whole_Sentence;
}

function string_Method() {
    var X =182;
    document.getElementById("number_To_String").innerHTML = X.toString(); // This code would return “182.”//
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}