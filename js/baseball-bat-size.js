// Call baseballBatWeight() by pressing enter
const onEnterBB = (e) => {
    if (e.key == 'Enter') {
        baseballBatWeight()
    }
}

// Calculate baseball bat weight by height and speed
const baseballBatWeight = () => { 
    const playerHeightToInches = document.getElementById('baseball-bat-weight-field_0').value / 2.54;
    const baseballBatVarA = playerHeightToInches * 0.307;
    const baseballBatVarB = document.getElementById('baseball-bat-weight-field_1').value * 0.1215;
    const baseballBatSum = baseballBatVarA + baseballBatVarB;
    document.getElementById("baseball-bat-weight-result").innerHTML = baseballBatSum.toPrecision(4);
}

// Calculate baseball bat size by age, height, strength and skill level
// create a bat sizing array
var bat_sizing = [
    [1, 1, 1, 6, '25/13'],
    [1, 1, 2, 6, '25/13'],
    [1, 1, 3, 6, '25/13'],
    [1, 2, 1, 6, '25/13'],
    [1, 2, 2, 6, '25/13'],
    [1, 2, 3, 6, '26/14'],
    [1, 3, 1, 6, '26/14'],
    [1, 3, 2, 6, '26/14'],
    [1, 3, 3, 6, '26/14'],
    [2, 1, 1, 6, '25/13'],
    [2, 1, 2, 6, '25/13'],
    [2, 1, 3, 6, '25/13'],
    [2, 2, 1, 6, '25/13'],
    [2, 2, 2, 6, '25/13'],
    [2, 2, 3, 6, '26/14'],
    [2, 3, 1, 6, '26/14'],
    [2, 3, 2, 6, '26/14'],
    [2, 3, 3, 6, '26/14'],
    [3, 1, 1, 6, '25/13'],
    [3, 1, 2, 6, '25/13'],
    [3, 1, 3, 6, '25/13'],
    [3, 2, 1, 6, '25/13'],
    [3, 2, 2, 6, '26/14'],
    [3, 2, 3, 6, '26/14'],
    [3, 3, 1, 6, '26/14'],
    [3, 3, 2, 6, '26/14'],
    [3, 3, 3, 6, '26/14'],
    [1, 1, 1, 7, '26/14'],
    [1, 1, 2, 7, '26/14'],
    [1, 1, 3, 7, '26/14'],
    [1, 2, 1, 7, '26/14'],
    [1, 2, 2, 7, '26/14'],
    [1, 2, 3, 7, '27/15'],
    [1, 3, 1, 7, '27/15'],
    [1, 3, 2, 7, '27/15'],
    [1, 3, 3, 7, '27/15'],
    [2, 1, 1, 7, '26/14'],
    [2, 1, 2, 7, '26/14'],
    [2, 1, 3, 7, '26/14'],
    [2, 2, 1, 7, '26/14'],
    [2, 2, 2, 7, '27/15'],
    [2, 2, 3, 7, '27/15'],
    [2, 3, 1, 7, '27/15'],
    [2, 3, 2, 7, '27/15'],
    [2, 3, 3, 7, '27/15'],
    [3, 1, 1, 7, '26/14'],
    [3, 1, 2, 7, '26/14'],
    [3, 1, 3, 7, '26/14'],
    [3, 2, 1, 7, '27/15'],
    [3, 2, 2, 7, '27/15'],
    [3, 2, 3, 7, '27/15'],
    [3, 3, 1, 7, '27/17'],
    [3, 3, 2, 7, '27/17'],
    [3, 3, 3, 7, '27/17'],
    [1, 1, 1, 8, '27/17'],
    [1, 1, 2, 8, '28/18'],
    [1, 1, 3, 8, '28/18'],
    [1, 2, 1, 8, '28/18'],
    [1, 2, 2, 8, '28/18'],
    [1, 2, 3, 8, '28/18'],
    [1, 3, 1, 8, '28/18'],
    [1, 3, 2, 8, '28/18'],
    [1, 3, 3, 8, '28/18'],
    [2, 1, 1, 8, '27/17'],
    [2, 1, 2, 8, '27/17'],
    [2, 1, 3, 8, '27/17'],
    [2, 2, 1, 8, '28/18'],
    [2, 2, 2, 8, '28/18'],
    [2, 2, 3, 8, '28/18'],
    [2, 3, 1, 8, '28/18'],
    [2, 3, 2, 8, '28/18'],
    [2, 3, 3, 8, '28/18'],
    [3, 1, 1, 8, '28/18'],
    [3, 1, 2, 8, '28/18'],
    [3, 1, 3, 8, '28/18'],
    [3, 2, 1, 8, '28/18'],
    [3, 2, 2, 8, '28/18'],
    [3, 2, 3, 8, '28/18'],
    [3, 3, 1, 8, '28/18'],
    [3, 3, 2, 8, '28/18'],
    [3, 3, 3, 8, '28/18'],
    [1, 1, 1, 9, '28/18'],
    [1, 1, 2, 9, '28/18'],
    [1, 1, 3, 9, '28/18'],
    [1, 2, 1, 9, '28/18'],
    [1, 2, 2, 9, '28/18'],
    [1, 2, 3, 9, '28/18'],
    [1, 3, 1, 9, '28/18'],
    [1, 3, 2, 9, '29/19'],
    [1, 3, 3, 9, '29/19'],
    [2, 1, 1, 9, '29/19'],
    [2, 1, 2, 9, '29/19'],
    [2, 1, 3, 9, '29/19'],
    [2, 2, 1, 9, '29/19'],
    [2, 2, 2, 9, '29/19'],
    [2, 2, 3, 9, '29/19'],
    [2, 3, 1, 9, '29/19'],
    [2, 3, 2, 9, '29/19'],
    [2, 3, 3, 9, '29/19'],
    [3, 1, 1, 9, '29/19'],
    [3, 1, 2, 9, '29/19'],
    [3, 1, 3, 9, '29/19'],
    [3, 2, 1, 9, '29/19'],
    [3, 2, 2, 9, '29/19'],
    [3, 2, 3, 9, '29/19'],
    [3, 3, 1, 9, '29/19'],
    [3, 3, 2, 9, '29/19'],
    [3, 3, 3, 9, '29/19'],
    [1, 1, 1, 10, '29/19'],
    [1, 1, 2, 10, '29/19'],
    [1, 1, 3, 10, '29/19'],
    [1, 2, 1, 10, '29/19'],
    [1, 2, 2, 10, '30/20'],
    [1, 2, 3, 10, '30/20'],
    [1, 3, 1, 10, '29/19'],
    [1, 3, 2, 10, '30/20'],
    [1, 3, 3, 10, '30/20'],
    [2, 1, 1, 10, '30/20'],
    [2, 1, 2, 10, '30/20'],
    [2, 1, 3, 10, '30/20'],
    [2, 2, 1, 10, '30/20'],
    [2, 2, 2, 10, '30/20'],
    [2, 2, 3, 10, '30/22'],
    [2, 3, 1, 10, '30/20'],
    [2, 3, 2, 10, '30/20'],
    [2, 3, 3, 10, '30/22'],
    [3, 1, 1, 10, '30/20'],
    [3, 1, 2, 10, '30/20'],
    [3, 1, 3, 10, '30/22'],
    [3, 2, 1, 10, '30/20'],
    [3, 2, 2, 10, '30/20'],
    [3, 2, 3, 10, '30/22'],
    [3, 3, 1, 10, '31/21'],
    [3, 3, 2, 10, '31/21'],
    [3, 3, 3, 10, '31/23'],
    [1, 1, 1, 11, '30/20'],
    [1, 1, 2, 11, '30/20'],
    [1, 1, 3, 11, '30/20'],
    [1, 2, 1, 11, '30/20'],
    [1, 2, 2, 11, '30/20'],
    [1, 2, 3, 11, '30/20'],
    [1, 3, 1, 11, '30/20'],
    [1, 3, 2, 11, '30/20'],
    [1, 3, 3, 11, '30/20'],
    [2, 1, 1, 11, '31/21'],
    [2, 1, 2, 11, '31/21'],
    [2, 1, 3, 11, '31/21'],
    [2, 2, 1, 11, '31/21'],
    [2, 2, 2, 11, '31/21'],
    [2, 2, 3, 11, '31/21'],
    [2, 3, 1, 11, '31/21'],
    [2, 3, 2, 11, '31/21'],
    [2, 3, 3, 11, '31/21'],
    [3, 1, 1, 11, '31/21'],
    [3, 1, 2, 11, '31/21'],
    [3, 1, 3, 11, '32/22'],
    [3, 2, 1, 11, '31/21'],
    [3, 2, 2, 11, '31/24'],
    [3, 2, 3, 11, '31/24'],
    [3, 3, 1, 11, '31/26'],
    [3, 3, 2, 11, '31/26'],
    [3, 3, 3, 11, '31/26'],
    [1, 1, 1, 12, '31/21'],
    [1, 1, 2, 12, '31/21'],
    [1, 1, 3, 12, '31/21'],
    [1, 2, 1, 12, '31/21'],
    [1, 2, 2, 12, '31/21'],
    [1, 2, 3, 12, '31/23'],
    [1, 3, 1, 12, '31/23'],
    [1, 3, 2, 12, '31/23'],
    [1, 3, 3, 12, '31/23'],
    [2, 1, 1, 12, '31/26'],
    [2, 1, 2, 12, '31/26'],
    [2, 1, 3, 12, '31/26'],
    [2, 2, 1, 12, '31/26'],
    [2, 2, 2, 12, '31/26'],
    [2, 2, 3, 12, '31/26'],
    [2, 3, 1, 12, '31/26'],
    [2, 3, 2, 12, '32/24'],
    [2, 3, 3, 12, '32/24'],
    [3, 1, 1, 12, '32/24'],
    [3, 1, 2, 12, '32/24'],
    [3, 1, 3, 12, '32/24'],
    [3, 2, 1, 12, '32/24'],
    [3, 2, 2, 12, '32/24'],
    [3, 2, 3, 12, '32/27'],
    [3, 3, 1, 12, '32/24'],
    [3, 3, 2, 12, '32/24'],
    [3, 3, 3, 12, '32/27'],
    [1, 1, 1, 13, '32/24'],
    [1, 1, 2, 13, '32/24'],
    [1, 1, 3, 13, '32/24'],
    [1, 2, 1, 13, '32/24'],
    [1, 2, 2, 13, '32/24'],
    [1, 2, 3, 13, '32/24'],
    [1, 3, 1, 13, '32/24'],
    [1, 3, 2, 13, '32/24'],
    [1, 3, 3, 13, '32/24'],
    [2, 1, 1, 13, '32/24'],
    [2, 1, 2, 13, '32/24'],
    [2, 1, 3, 13, '32/24'],
    [2, 2, 1, 13, '32/24'],
    [2, 2, 2, 13, '32/24'],
    [2, 2, 3, 13, '32/24'],
    [2, 3, 1, 13, '32/24'],
    [2, 3, 2, 13, '32/24'],
    [2, 3, 3, 13, '32/27'],
    [3, 1, 1, 13, '32/27'],
    [3, 1, 2, 13, '32/27'],
    [3, 1, 3, 13, '32/27'],
    [3, 2, 1, 13, '32/27'],
    [3, 2, 2, 13, '32/27'],
    [3, 2, 3, 13, '32/27'],
    [3, 3, 1, 13, '32/27'],
    [3, 3, 2, 13, '32/27'],
    [3, 3, 3, 13, '32/27'],
    [1, 1, 1, 14, '30/27'],
    [1, 1, 2, 14, '30/27'],
    [1, 1, 3, 14, '31/28'],
    [1, 2, 1, 14, '30/27'],
    [1, 2, 2, 14, '31/28'],
    [1, 2, 3, 14, '32/29'],
    [1, 3, 1, 14, '31/28'],
    [1, 3, 2, 14, '31/28'],
    [1, 3, 3, 14, '32/29'],
    [2, 1, 1, 14, '31/28'],
    [2, 1, 2, 14, '31/28'],
    [2, 1, 3, 14, '32/29'],
    [2, 2, 1, 14, '31/28'],
    [2, 2, 2, 14, '31/28'],
    [2, 2, 3, 14, '32/29'],
    [2, 3, 1, 14, '31/28'],
    [2, 3, 2, 14, '31/28'],
    [2, 3, 3, 14, '32/29'],
    [3, 1, 1, 14, '32/29'],
    [3, 1, 2, 14, '32/29'],
    [3, 1, 3, 14, '32/29'],
    [3, 2, 1, 14, '32/29'],
    [3, 2, 2, 14, '32/29'],
    [3, 2, 3, 14, '33/30'],
    [3, 3, 1, 14, '32/29'],
    [3, 3, 2, 14, '32/29'],
    [3, 3, 3, 14, '33/30'],
    [1, 1, 1, 15, '31/28'],
    [1, 1, 2, 15, '31/28'],
    [1, 1, 3, 15, '31/28'],
    [1, 2, 1, 15, '31/28'],
    [1, 2, 2, 15, '31/28'],
    [1, 2, 3, 15, '31/28'],
    [1, 3, 1, 15, '31/28'],
    [1, 3, 2, 15, '31/28'],
    [1, 3, 3, 15, '31/28'],
    [2, 1, 1, 15, '32/29'],
    [2, 1, 2, 15, '32/29'],
    [2, 1, 3, 15, '32/29'],
    [2, 2, 1, 15, '32/29'],
    [2, 2, 2, 15, '32/29'],
    [2, 2, 3, 15, '32/29'],
    [2, 3, 1, 15, '32/29'],
    [2, 3, 2, 15, '32/29'],
    [2, 3, 3, 15, '32/29'],
    [3, 1, 1, 15, '32/29'],
    [3, 1, 2, 15, '32/29'],
    [3, 1, 3, 15, '32/29'],
    [3, 2, 1, 15, '32/29'],
    [3, 2, 2, 15, '32/29'],
    [3, 2, 3, 15, '32/29'],
    [3, 3, 1, 15, '32/29'],
    [3, 3, 2, 15, '33/30'],
    [3, 3, 3, 15, '33/30'],
    [1, 1, 1, 16, '31/28'],
    [1, 1, 2, 16, '31/28'],
    [1, 1, 3, 16, '31/28'],
    [1, 2, 1, 16, '32/29'],
    [1, 2, 2, 16, '32/29'],
    [1, 2, 3, 16, '32/29'],
    [1, 3, 1, 16, '32/29'],
    [1, 3, 2, 16, '32/29'],
    [1, 3, 3, 16, '32/29'],
    [2, 1, 1, 16, '32/29'],
    [2, 1, 2, 16, '32/29'],
    [2, 1, 3, 16, '32/29'],
    [2, 2, 1, 16, '32/29'],
    [2, 2, 2, 16, '32/29'],
    [2, 2, 3, 16, '32/29'],
    [2, 3, 1, 16, '32/29'],
    [2, 3, 2, 16, '32/29'],
    [2, 3, 3, 16, '32/29'],
    [3, 1, 1, 16, '32/29'],
    [3, 1, 2, 16, '32/29'],
    [3, 1, 3, 16, '32/29'],
    [3, 2, 1, 16, '32/29'],
    [3, 2, 2, 16, '32/29'],
    [3, 2, 3, 16, '32/29'],
    [3, 3, 1, 16, '33/30'],
    [3, 3, 2, 16, '33/30'],
    [3, 3, 3, 16, '33/30'],
    [1, 1, 1, 17, '32/29'],
    [1, 1, 2, 17, '32/29'],
    [1, 1, 3, 17, '32/29'],
    [1, 2, 1, 17, '33/30'],
    [1, 2, 2, 17, '33/30'],
    [1, 2, 3, 17, '33/30'],
    [1, 3, 1, 17, '33/30'],
    [1, 3, 2, 17, '33/30'],
    [1, 3, 3, 17, '33/30'],
    [2, 1, 1, 17, '33/30'],
    [2, 1, 2, 17, '33/30'],
    [2, 1, 3, 17, '33/30'],
    [2, 2, 1, 17, '33/30'],
    [2, 2, 2, 17, '33/30'],
    [2, 2, 3, 17, '33/30'],
    [2, 3, 1, 17, '33/30'],
    [2, 3, 2, 17, '33/30'],
    [2, 3, 3, 17, '33/30'],
    [3, 1, 1, 17, '33/30'],
    [3, 1, 2, 17, '33/30'],
    [3, 1, 3, 17, '33/30'],
    [3, 2, 1, 17, '33/30'],
    [3, 2, 2, 17, '34/31'],
    [3, 2, 3, 17, '34/31'],
    [3, 3, 1, 17, '34/31'],
    [3, 3, 2, 17, '34/31'],
    [3, 3, 3, 17, '34/31'],
    [1, 1, 1, 18, '33/30'],
    [1, 1, 2, 18, '33/30'],
    [1, 1, 3, 18, '33/30'],
    [1, 2, 1, 18, '33/30'],
    [1, 2, 2, 18, '33/30'],
    [1, 2, 3, 18, '33/30'],
    [1, 3, 1, 18, '33/30'],
    [1, 3, 2, 18, '33/30'],
    [1, 3, 3, 18, '33/30'],
    [2, 1, 1, 18, '33/30'],
    [2, 1, 2, 18, '33/30'],
    [2, 1, 3, 18, '33/30'],
    [2, 2, 1, 18, '33/30'],
    [2, 2, 2, 18, '33/30'],
    [2, 2, 3, 18, '33/30'],
    [2, 3, 1, 18, '33/30'],
    [2, 3, 2, 18, '33/30'],
    [2, 3, 3, 18, '33/30'],
    [3, 1, 1, 18, '33/30'],
    [3, 1, 2, 18, '33/30'],
    [3, 1, 3, 18, '33/30'],
    [3, 2, 1, 18, '34/31'],
    [3, 2, 2, 18, '34/31'],
    [3, 2, 3, 18, '34/31'],
    [3, 3, 1, 18, '34/31'],
    [3, 3, 2, 18, '34/31'],
    [3, 3, 3, 18, '34/31'],
]

// make a div for ages 6 to 18
var age_wrapper = document.getElementById("age-wrapper");
for (var i = 6; i <= 18; i++) {
    var col = document.createElement("div");
    col.className = "col-3";
    var button = document.createElement("button");
    button.innerHTML = i;

    // give these buttons the class of button-a
    button.className = "button-a";

    // when clicked make the button dark blue and all the other buttons light blue
    button.onclick = function() {
        var buttons = document.getElementsByClassName("button-a");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#222";
        }
        this.style.backgroundColor = "#1e73be";
    }

    col.appendChild(button);
    age_wrapper.appendChild(col);
}

// make a new set of buttons for height: Alto, Promedio, Pequeño
var height_wrapper = document.getElementById("height-wrapper");
var heights = ["Pequeño", "Promedio", "Alto"];
for (var i = 0; i < heights.length; i++) {
    var col = document.createElement("div");
    col.className = "col-4";
    var button = document.createElement("button");
    button.innerHTML = heights[i];

    // give these buttons the class of button-h
    button.className = "button-h";

    // when clicked make the button dark blue and all the other buttons light blue
    button.onclick = function() {
        var buttons = document.getElementsByClassName("button-h");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#222";
        }
        this.style.backgroundColor = "#1e73be";
    }

    col.appendChild(button);
    height_wrapper.appendChild(col);
}

// make a new set of buttons for weight: Heavy, Promedio, Light
var weight_wrapper = document.getElementById("weight-wrapper");
var strengths = ["Pequeño", "Promedio", "Robusto"];
for (var i = 0; i < strengths.length; i++) {
    var col = document.createElement("div");
    col.className = "col-4";
    var button = document.createElement("button");
    button.innerHTML = strengths[i];

    // give these buttons the class of button-w
    button.className = "button-w";

    // when clicked make the button dark blue and all the other buttons light blue
    button.onclick = function() {
        var buttons = document.getElementsByClassName("button-w");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#222";
        }
        this.style.backgroundColor = "#1e73be";
    }

    col.appendChild(button);
    weight_wrapper.appendChild(col);
}

// make a new set of buttons for skill level: Beginner, Intermediate, Adv.
var skill_wrapper = document.getElementById("skill-wrapper");
var skills = ["Principiante", "Intermedio", "Avanzado"];
for (var i = 0; i < skills.length; i++) {
    var col = document.createElement("div");
    col.className = "col-4";
    var button = document.createElement("button");
    button.innerHTML = skills[i];

    // give these buttons the class of button-s
    button.className = "button-s";

    // when clicked make the button dark blue and all the other buttons light blue
    button.onclick = function() {
        var buttons = document.getElementsByClassName("button-s");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#222";
        }
        this.style.backgroundColor = "#1e73be";
    }

    col.appendChild(button);
    skill_wrapper.appendChild(col);
}

// get the value of the selected age
function getAge() {
    var buttons = document.getElementsByClassName("button-a");
    // set a varialbe of age to the value of the selected button
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].style.backgroundColor == "rgb(30, 115, 190)") {
            return buttons[i].innerHTML;
        }
    }
}

// get the value of the selected height
function getHeight() {
    var buttons = document.getElementsByClassName("button-h");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].style.backgroundColor == "rgb(30, 115, 190)") {
            return buttons[i].innerHTML;
        }
    }
}

// get the value of the selected weight
function getWeight() {
    var buttons = document.getElementsByClassName("button-w");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].style.backgroundColor == "rgb(30, 115, 190)") {
            return buttons[i].innerHTML;
        }
    }
}

// get the value of the selected skill level
function getSkill() {
    var buttons = document.getElementsByClassName("button-s");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].style.backgroundColor == "rgb(30, 115, 190)") {
            return buttons[i].innerHTML;
        }
    }
}

// run the functions when any button on the page is clicked
document.onclick = function() {
        
    var age = getAge();
    var height = getHeight();
    var weight = getWeight();
    var skill = getSkill();

    // get values in an array for the selections made
    let age_ = age;
    let height_ = 0; 
    let weight_ = 0;
    let skill_ = 0;

    if (height == "Pequeño") {
        height_ = 1;
    } else if (height == "Promedio") {
        height_ = 2;
    } else if (height == "Alto") {
        height_ = 3;
    }

    if (weight == "Pequeño") {
        weight_ = 1;
    } else if (weight == "Promedio") {
        weight_ = 2;
    } else if (weight == "Robusto") {
        weight_ = 3;
    }

    if (skill == "Principiante") {
        skill_ = 1;
    } else if (skill == "Intermedio") {
        skill_ = 2;
    } else if (skill == "Avanzado") {
        skill_ = 3;
    }

    // add the bat size and button links to the page
    for (var i = 0; i < bat_sizing.length; i++) {
        if (bat_sizing[i][3] == age_ && bat_sizing[i][0] == height_ && bat_sizing[i][1] == weight_ && bat_sizing[i][2] == skill_) {

            // append the p with the id of p.id = "bat-size"; with the bat_sizing[i][4]
            document.getElementById("bat-size").innerHTML = bat_sizing[i][4];
        }
    }
}