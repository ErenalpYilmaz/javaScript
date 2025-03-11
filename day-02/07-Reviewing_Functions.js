'use strict';

const calcAge = function (birthYear) { 
    return 2037 - birthYear;
 }

const yearsUntilRetirement = function (birthYear,firstName)  {
    const age =calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0){
        return retirement;
    } else {
        return -1;
    }


}
console.log(yearsUntilRetirement(1991,'Alp'));
console.log(yearsUntilRetirement(1950,'Mike'));
