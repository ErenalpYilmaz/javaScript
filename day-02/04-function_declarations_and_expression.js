'use strict';

//Function Declarations
function calcAge1(birthYear) {
    return 2025 - birthYear;
}

const age1 = calcAge1(2003);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}

const age2 = calcAge2(2003)
console.log(age1,age2);
