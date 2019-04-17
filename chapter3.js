/*
 * Script for Chapter 3 assignment
 *
 * Kaephas Kain
 * 4-17-19
 * chapter3.js
 */

// script loaded at top, so wait for window to load to add onclick
window.onload = function() {
    // button id = heeHaw
    myButton = document.getElementById('heeHaw');
    myButton.onclick = function() {
        // input field id = num
        myNum = document.getElementById('num').value;
        heeHaw(myNum);
    }
};

// // hee haw 3 & 5 up to number
// function heeHaw(number) {
//     for (let i = 1; i <= number; i++) {
//         let output = "";
//         // mod 3 = hee
//         if (i % 3 === 0) {
//             output += "Hee";
//             // if not mod 5, end line with !
//             if (!(i % 5 === 0)) {
//                 output += "!";
//             } else {
//                 output += " ";
//             }
//         }
//         // mod 5 == haw -- add space first if also mod 3
//         if (i % 5 === 0) {
//             output += "Haw!";
//         }
//
//         console.log(i + ": " + output);
//     }
// }

// hee haw 3 & 5 up to number
function heeHaw(number) {
    if(number > 0) {
        // output the values from 1 to number -- function re-run before output
        heeHawR(number - 1);

        // no more smaller numbers left, so begin output conditional
        if(number % 15 === 0) {
            console.log(number + ": Hee Haw!");
        } else if (number % 3 === 0) {
            console.log(number + ": Hee!");
        } else if (number % 5 === 0) {
            console.log(number + ": Haw!");
        } else {
            console.log(number);
        }
    }
}