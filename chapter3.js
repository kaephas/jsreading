/*
 * Script for Chapter 3 assignment
 *
 * Kaephas Kain
 * 4-17-19
 * chapter3.js
 */

// hee haw 3 & 5 up to num
function heeHaw(number) {
    for (let i = 1; i <= number; i++) {
        let output = "";
        // mod 3 = hee
        if (i % 3 === 0) {
            output += "Hee";
            // if not mod 5, end line with !
            if (!(i % 5 === 0)) {
                output += "!";
            } else {
                output += " ";
            }
        }
        // mod 5 == haw -- add space first if also mod 3
        if (i % 5 === 0) {
            output += "Haw!";
        }

        console.log(i + ": " + output);
    }
}