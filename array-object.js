/*
 * Kaephas Kain
 * 4-24-2019
 * array-object.js
 *
 * Takes an array of varying value types and converts to an object
 * with fields that store the values of each data type
 */

// text input
let dataField = document.getElementById('data');
// add to array button
let arrayButton = document.getElementById('getData');
// done with adding button
let doneButton = document.getElementById('done');
// div within which to print the object info
let outputDiv = document.getElementById('printResult');

// initialize array
let dataArray = [];


// add-item button click
arrayButton.onclick = function() {
    addToArray();
};

// done-adding button click
doneButton.onclick = function() {

    // create a new object from the values in the array
    let newObject = createObject(dataArray);
    // display the object on the web page in a standard object layout
    displayObject(newObject);

    // clear array for new input
    dataArray = [];

};

// Main Function

// add each value in the array to the appropriate field
function createObject(objectArray) {
    // reset object display
    outputDiv.innerHTML = "";
    // add spaces after commas for readability
    let arrayString = objectArray.toString().replace(/,/g, ", ");
    // display the array to be converted
    outputDiv.innerHTML += '<p>Array: [ ' + arrayString + ' ]</p>';
    if(objectArray.length > 0) {

        // initialize object with empty arrays for each field
        let typeObject = {
            strings: [],
            numbers: [],
            booleans: []
        };

        // for each item in the array
        for(let item of objectArray) {
            // match to the right field
            // if isn't NaN (is a number) and all the characters are numbers
            if(!isNaN(parseInt(item)) && item == parseInt(item)) {
                typeObject.numbers.push(parseInt(item));
                // if true or false, parse to boolean
            } else if(item === 'true' || item === 'false') {
                typeObject.booleans.push(JSON.parse(item));
                // otherwise it should be a string
            } else if(typeof(item) === 'string') {
                typeObject.strings.push(item);
            } else {
                // not sure how this would happen, but just in case
                console.log("undefined or null value encountered");
            }
            // for debugging
            console.log("added item to object: " + item + " => " + JSON.stringify(typeObject));
        }
        return typeObject;
    } else {
        // do nothing
        console.log("Empty array.");
    }
}

// add value from text input to array
function addToArray() {
    if(dataField.value !== "") {
        // add input value to array
        dataArray.push(dataField.value);
        // empty input
        dataField.value = "";
        dataField.focus();

        // debugging: show full array after each input
        console.log('Array: ' + dataArray);
    }
}

// display the object
function displayObject(myObject) {
    // first line of output
    outputDiv.innerHTML += '<div>let typeObject = {<br>';
    let output = "";
    for(let type in myObject) {
        // add a space after each comma of default toString
        let value = JSON.stringify(myObject[type]).replace(/,/g, ", ");
        // space after and before brackets for readability
        value = value.replace('[', '[ ');
        value = value.replace(']', ' ]');
        // tab before to match standard spacing
        output += '&#8195;' + type + ': ' + value + ',<br>';
    }
    // remove comma after last field
    let pos = output.lastIndexOf(',');
    output = output.substring(0, pos) + output.substring(pos+1);
    // last line of output
    outputDiv.innerHTML += output + '};</div>';
}
