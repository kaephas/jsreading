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
        // mod 3 = hee
        if (i % 3 == 0) {
            output += "Hee";
            // if not mod 5, end line with !
            if (!(i % 5 == 0)) {
                output += "!";
            } else {
                output += " ";
            }
        }

        // mod 5 == haw -- add space first if also mod 3
        if (i % 5 == 0) {
            output += "Haw!";
        }

        console.log(i + ": " + output);
    }
}