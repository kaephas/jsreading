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
let myArray = [];


// add-item button click
arrayButton.onclick = function() {
    addToArray(myArray);
};

// done-adding button click
doneButton.onclick = function() {

    let newObject = createObject(myArray);
    displayObject(newObject);

    // clear array for new input
    myArray = [];

};

function addToArray(dataArray) {
    if(dataField.value !== "") {
        // add input value to array
        dataArray.push(dataField.value);
        // empty input
        dataField.value = "";
        dataField.focus();
        // testing purposes
        console.log('data array: ' + dataArray);
        console.log('myArray: ' + myArray);
    }
}

function createObject(objectArray) {
    if(objectArray.length > 0) {
        // get type
        // intialize object
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
                // not sure how this would happen but just in case!
                console.log("undefined or null value encountered");
            }
            // for error checking
            console.log("added item to object: " + item + " => " + JSON.stringify(typeObject));
        }
        return typeObject;
    } else {
        // do nothing
        console.log("Empty array.");
    }
}

function displayObject(myObject) {
    // reset object display
    outputDiv.innerHTML = "";
    outputDiv.innerHTML += '<span>var result = {</span><br>';

    // outputDiv.innerHTML += '<span>&#8195;strings: ' + myObject.strings;
    // outputDiv.innerHTML += '<span>&#8195;numbers: ' + myObject.numbers;
    // outputDiv.innerHTML += '<span>&#8195;booleans: ' + myObject.booleans;

    for(let type in myObject) {
        outputDiv.innerHTML += '<span>&#8195;' + type + ': ' + myObject[type] + '</span><br>';;
    }

    // last line of output
    outputDiv.innerHTML += '<span>};</span>';
}
