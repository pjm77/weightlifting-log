function calculate1RM() {
    let weight = document.getElementById('weight-text').value;
    let reps = document.getElementById('reps-text').value;
    let result = weight * (1 + (reps / 30));
    document.getElementById('result').value = result;
    document.getElementById('percentage-1').innerText =
        (document.getElementById('percentage-input-1').value  * 0.01 * result).toFixed(1);
    document.getElementById('percentage-2').innerText =
        (document.getElementById('percentage-input-2').value  * 0.01 * result).toFixed(1);
    document.getElementById('percentage-3').innerText =
        (document.getElementById('percentage-input-3').value  * 0.01 * result).toFixed(1);
    document.getElementById('percentage-4').innerText =
        (document.getElementById('percentage-input-4').value  * 0.01 * result).toFixed(1);
    document.getElementById('percentage-5').innerText =
        (document.getElementById('percentage-input-5').value  * 0.01 * result).toFixed(1);
    document.getElementById('percentage-6').innerText =
        (document.getElementById('percentage-input-6').value  * 0.01 * result).toFixed(1);
    document.getElementById('percentage-7').innerText =
        (document.getElementById('percentage-input-7').value  * 0.01 * result).toFixed(1);
    document.getElementById('percentage-8').innerText =
        (document.getElementById('percentage-input-8').value  * 0.01 * result).toFixed(1);
    document.getElementById('percentage-9').innerText =
        (document.getElementById('percentage-input-9').value  * 0.01 * result).toFixed(1);
    document.getElementById('percentage-10').innerText =
        (document.getElementById('percentage-input-10').value  * 0.01 * result).toFixed(1);
    document.getElementById('percentage-11').innerText =
        (document.getElementById('percentage-input-11').value  * 0.01 * result).toFixed(1);
    document.getElementById('percentage-12').innerText =
        (document.getElementById('percentage-input-12').value  * 0.01 * result).toFixed(1);
    document.getElementById('percentage-13').innerText =
        (document.getElementById('percentage-input-13').value  * 0.01 * result).toFixed(1);
}

function update(field, val) {
    document.getElementById(field).value = val;
}

// function that updates a section in General Strength tab
// whenever the user moves the slider it updates the corresponding number field and calculates 1 rep max
// when number field is updated it moves the slider and 1 rep max is calculated
function updateGS(fieldToUpdate,value,weightField,repsField,maxField) {
    document.getElementById(fieldToUpdate).value = value;
    let weight = document.getElementById(weightField).value;
    let reps = document.getElementById(repsField).value;
    document.getElementById(maxField).value = Math.round(weight * (1 + (reps / 30)) * 100) / 100;
}