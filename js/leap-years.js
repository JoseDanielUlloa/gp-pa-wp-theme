// Call isOrNotLeap function by pressing enter
const onEnterLeap = (e) => {
    if (e.key == 'Enter') {
        isOrNotLeap()
    }
}
// Calculate if input is a leap year
const isOrNotLeap = () => {
    const leapYearInput = document.getElementById('leap-year-input').value;
    if((leapYearInput % 4 === 0) && (leapYearInput % 100 !== 0) || (leapYearInput % 400 === 0)) {
        isLeap();
    } else {
        isNotLeap();
    }
}
// Show input is a leap year
function isLeap() {
    document.getElementById("result-calculator").innerHTML = "<br><p>Es a&ntilde;o bisiesto.</p>";
}
function isNotLeap() {
    document.getElementById("result-calculator").innerHTML = "<br><p>No es a&ntilde;o bisiesto.</p>";
}