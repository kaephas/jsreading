/*
 * Script for Chapter 2 assignment
 *
 * Kaephas Kain
 * 4-10-19
 * chapter2.js
 */

// hee haw 3 & 5
function heeHaw() {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        if (i % 3 == 0) {
            output += "Hee";
            if (!(i % 5 == 0)) {
                output += "!";
            }
        }

        if (i % 5 == 0) {
            if (i % 3 == 0) {
                output += " ";
            }
            output += "Haw!";
        }
        console.log(output);
    }
}