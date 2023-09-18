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