'use strict';

function logger() { // No parameters.
    console.log('My name is Alp');
}

// calling / running / invoking function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) { // With parameters.
    console.log(`Apples: ${apples},Oranges: ${oranges}`);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(10,20);
console.log(appleJuice)