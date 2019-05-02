let input = document.getElementById("name");
let button = document.getElementById("search");
let output = document.getElementById("display");
let people = [];
// get all the people from the json file
let requestURL = "people.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    people = request.response;
    // error check values
    // for(let person of people) {
    //     console.log(person);
    //     for(let field in person) if(person.hasOwnProperty(field)){
    //         console.log(field + ": " + person[field]);
    //     }
    // }
};

button.onclick = function() {
    let found = checkName();
    output.innerHTML = "";
    if(found.length === 0) {
        output.innerHTML = "<p>No person found.</p>";
    } else {
        for(let person of found) {
            output.innerHTML += "<p>";
            for(let field in person) if (person.hasOwnProperty(field)) {
                output.innerHTML += field.replace(field[0], field[0].toUpperCase()) + ": " + person[field] + "<br>";
            }
            output.innerHTML += "</p>";
        }
    }
};

function checkName() {
    let results = [];
    for(let person of people) {
        // if(person.name.toLowerCase().indexOf(input.value.toLowerCase())) {
        if(person.name.toLowerCase().includes(input.value.toLowerCase())) {
        results.push(person);
        console.log("Pushing " + person.name);
        }
    }
    return results;
}

