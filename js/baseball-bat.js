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

// find the div that has the id of bat_size_calc
var calc = document.getElementById("bat_size_calc");
calc.innerHTML = "";


// make a row with a col-12 that has an h3 of "Select Age"
var row = document.createElement("div");
row.className = "custom-wrapper";
var col = document.createElement("div");
var h5 = document.createElement("h5");
h5.innerHTML = "Edad: ";
h5.className = "lead";
col.appendChild(h5);
row.appendChild(col);
calc.appendChild(row);


// make a row for all the buttons
var row_button = document.createElement("div");
row_button.className = "custom-wrapper";
calc.appendChild(row_button);

// make a div for ages 6 to 18
for (var i = 6; i <= 18; i++) {
    var col = document.createElement("div");
    col.className = "col-3 col-md-3 col-lg-2";
    var button = document.createElement("button");
    // make background light blue
    button.style.backgroundColor = "#F1EEE9";
    button.innerHTML = i;
    button.style.borderRadius = "5px";
    button.style.width = "100%";

    // give these buttons the class of button_a
    button.className = "button_a";

    // when clicked make the button dark blue and all the other buttons light blue
    button.onclick = function() {
        var buttons = document.getElementsByClassName("button_a");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#F1EEE9";
        }
        this.style.backgroundColor = "#EC994B";
    }

    // make spacing between the buttons
    button.style.margin = "5px";


    col.appendChild(button);
    row_button.appendChild(col);
    }

// make a new row for the h3 of "Select Height"
var row = document.createElement("div");
row.className = "custom-wrapper";
var col = document.createElement("div");
var h5 = document.createElement("h5");
h5.innerHTML = "Estatura:";
h5.className = "lead";
col.appendChild(h5);
row.appendChild(col);
calc.appendChild(row);

// make a new set of buttons for height: Alto, Promedio, Pequeño
var row_button = document.createElement("div");
row_button.className = "custom-wrapper";
calc.appendChild(row_button);

var heights = ["Pequeño", "Promedio", "Alto"];
for (var i = 0; i < heights.length; i++) {
    var col = document.createElement("div");
    col.className = "col-4 col-md-3 col-lg-2";
    var button = document.createElement("button");
    // make background light blue
    button.style.backgroundColor = "#F1EEE9";
    button.innerHTML = heights[i];
    button.style.borderRadius = "5px";
    button.style.width = "100%";

    // give these buttons the class of button_h
    button.className = "button_h";

    // when clicked make the button dark blue and all the other buttons light blue
    button.onclick = function() {
        var buttons = document.getElementsByClassName("button_h");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#F1EEE9";
        }
        this.style.backgroundColor = "#EC994B";
    }

    // make spacing between the buttons
    button.style.margin = "5px";

    col.appendChild(button);
    row_button.appendChild(col);
    }

// make a new row for the h3 of "Select Weight"
var row = document.createElement("div");
row.className = "custom-wrapper";
var col = document.createElement("div");
var h5 = document.createElement("h5");
h5.innerHTML = "Complexi&oacute;n:";
h5.className = "lead";
col.appendChild(h5);
row.appendChild(col);
calc.appendChild(row);

// make a new set of buttons for weight: Heavy, Promedio, Light
var row_button = document.createElement("div");
row_button.className = "custom-wrapper";
calc.appendChild(row_button);

var strengths = ["Pequeño", "Promedio", "Robusto"];
for (var i = 0; i < strengths.length; i++) {
    var col = document.createElement("div");
    col.className = "col-4 col-md-3 col-lg-2";
    var button = document.createElement("button");
    // make background light blue
    button.style.backgroundColor = "#F1EEE9";
    button.innerHTML = strengths[i];
    button.style.borderRadius = "5px";
    button.style.width = "100%";

    // give these buttons the class of button_w
    button.className = "button_w";

    // when clicked make the button dark blue and all the other buttons light blue
    button.onclick = function() {
        var buttons = document.getElementsByClassName("button_w");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#F1EEE9";
        }
        this.style.backgroundColor = "#EC994B";
    }

    // make spacing between the buttons
    button.style.margin = "5px";

    col.appendChild(button);
    row_button.appendChild(col);
    }

// make a new row for the h5 of "Select Skill Level"
var row = document.createElement("div");
row.className = "custom-wrapper";
var col = document.createElement("div");
var h5 = document.createElement("h5");
h5.innerHTML = "Nivel:";
h5.className = "lead";
col.appendChild(h5);
row.appendChild(col);
calc.appendChild(row);

// make a new set of buttons for skill level: Beginner, Intermediate, Adv.
var row_button = document.createElement("div");
row_button.className = "custom-wrapper";
calc.appendChild(row_button);

var skills = ["Principiante", "Intermedio", "Avanzado"];
for (var i = 0; i < skills.length; i++) {
    var col = document.createElement("div");
    col.className = "col-4 col-md-3 col-lg-2";
    var button = document.createElement("button");
    // make background light blue
    button.style.backgroundColor = "#F1EEE9";
    button.innerHTML = skills[i];
    button.style.borderRadius = "5px";
    button.style.width = "100%";

    // give these buttons the class of button_s
    button.className = "button_s";

    // when clicked make the button dark blue and all the other buttons light blue
    button.onclick = function() {
        var buttons = document.getElementsByClassName("button_s");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#F1EEE9";
        }
        this.style.backgroundColor = "#EC994B";
    }

    // make spacing between the buttons
    button.style.margin = "5px";

    col.appendChild(button);
    row_button.appendChild(col);
    }

// make the results row
var row = document.createElement("div");
row.className = "custom-wrapper border m-2 p-2 rounded bg-light";

// make the 'Bat Size' h3
var col = document.createElement("div");
var h5 = document.createElement("h5");
h5.innerHTML = "Tama&ntilde;o del bate recomendado:";
h5.id = "bat_size_recommendation";
h5.className = "mb-0";
h5.className = "lead";
col.appendChild(h5);
row.appendChild(col);
calc.appendChild(row);

// make the ???
var col = document.createElement("div");
var p = document.createElement("p");
p.id = "bat_size";
p.style.fontSize = "2.5rem";
p.style.color = "lightgrey";
p.innerHTML = "???";
p.className = "mb-0";
col.appendChild(p);
row.appendChild(col);

// get the value of the selected age
function getAge() {
    var buttons = document.getElementsByClassName("button_a");
    // set a varialbe of age to the value of the selected button
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].style.backgroundColor == "rgb(236, 153, 75)") {
            return buttons[i].innerHTML;
        }
    }
}

// get the value of the selected height
function getHeight() {
    var buttons = document.getElementsByClassName("button_h");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].style.backgroundColor == "rgb(236, 153, 75)") {
            return buttons[i].innerHTML;
        }
    }
}

// get the value of the selected weight
function getWeight() {
    var buttons = document.getElementsByClassName("button_w");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].style.backgroundColor == "rgb(236, 153, 75)") {
            return buttons[i].innerHTML;
        }
    }
}

// get the value of the selected skill level
function getSkill() {
    var buttons = document.getElementsByClassName("button_s");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].style.backgroundColor == "rgb(236, 153, 75)") {
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
            console.log(bat_sizing[i]);

            // append the p with the id of p.id = "bat_size"; with the bat_sizing[i][4]
            var p = document.getElementById("bat_size");
            p.style.color = "black";
            p.innerHTML = bat_sizing[i][4];
        }
    }
}