/*
 * Kaephas Kain
 * 5-1-2019
 * json-search.js
 *
 * load json file, compare input to contents, display on web page
 */

// get elements
let input = document.getElementById("name");
let button = document.getElementById("search");
let output = document.getElementById("display");

// to store people found in json file
let people = [];

// get all the people from the json file
let requestURL = "people.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();

// store the request in people
request.onload = function() {
    people = request.response;
};

// clicking search button
button.onclick = function() {
    // get matching names
    let found = checkName();
    // reset display
    output.innerHTML = "";
    // if none found
    if(found.length === 0) {
        output.innerHTML = "<p>No person found.</p>";
    } else {    // if >= 1 found
        for(let person of found) {
            // paragraph for each person
            output.innerHTML += "<p>";
            // for each field in person object -- also make sure that person object has the property
            //                                 -- feels redundant but doesn't run without
            for(let field in person) if (person.hasOwnProperty(field)) {
                output.innerHTML += field.replace(field[0], field[0].toUpperCase()) + ": " + person[field] + "<br>";
            }
            output.innerHTML += "</p>";
        }
    }
};

// check if search value is in any of the names
function checkName() {
    let results = [];
    // compare value to the name field of each person
    for(let person of people) {
        // add to results if string is found in name field
        if(person.name.toLowerCase().includes(input.value.toLowerCase())) {
        results.push(person);
        }
    }
    return results;
}

