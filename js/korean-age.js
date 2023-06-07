// Global variables
const currentYear = new Date().getFullYear();

// Insert current year
document.getElementById("korean-age-current-year").innerHTML = currentYear;

// Example one
document.getElementById("korean-age-example-one-result").innerHTML = currentYear - 2012 + 1;

// Calculate international age
function interAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}

// Examples block
document.getElementById("korean-age-ka-one-result").innerHTML = currentYear - 1997 + 1;
document.getElementById("korean-age-ia-one-result").innerHTML = interAge("1997/09/01");

document.getElementById("korean-age-ka-two-result").innerHTML = currentYear - 1992 + 1;
document.getElementById("korean-age-ia-two-result").innerHTML = interAge("1992/12/04");

document.getElementById("korean-age-ka-three-result").innerHTML = currentYear - 1993 + 1;
document.getElementById("korean-age-ia-three-result").innerHTML = interAge("1993/03/09");

document.getElementById("korean-age-ka-four-result").innerHTML = currentYear - 1995 + 1;
document.getElementById("korean-age-ia-four-result").innerHTML = interAge("1995/12/30");

document.getElementById("korean-age-ka-five-result").innerHTML = currentYear - 1997 + 1;
document.getElementById("korean-age-ia-five-result").innerHTML = interAge("1997/10/03");

document.getElementById("korean-age-ka-six-result").innerHTML = currentYear - 1999 + 1;
document.getElementById("korean-age-ia-six-result").innerHTML = interAge("1999/12/06");

// Call koreanAgeCalculator() by pressing enter
const onEnterKA = (e) => {
    if (e.key == 'Enter') {
        koreanAgeCalculator()
    }
}

// Calculate Korean age
const koreanAgeCalculator = () => { 
    const koreanAgeInput = document.getElementById('korean-age-input').value;
    document.getElementById("korean-age-result").innerHTML = currentYear - koreanAgeInput + 1;
}