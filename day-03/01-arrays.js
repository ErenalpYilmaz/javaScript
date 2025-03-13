'use strict';
const friends = ["Micheal", "Steven", "Peter"];
console.log("Friends: "+friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log("Years: "+years);

console.log(`${friends[0]}`);
console.log(`${friends[1]}`);
console.log(`${friends[2]}`);

console.log(`Friends dizisinin icindeki toplam eleman sayisi: ${friends.length}`);
// Friends dizisinin son elemanini alma.
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob','Alice'] Olamaz -> const olarak tanimli

const firstName = 'Erenalp';
const alp = [firstName,'Yilmaz',2025-2003,'Full Stack Developer', friends]
console.log(alp);

// Exercise 
const calcAge = function (birthYeah){
    return 2025 - birthYeah;
}
const year = [1990, 1967, 2002, 2010, 2018];

const ages = [
    calcAge(year[0]),
    calcAge(year[1]),
    calcAge(year[year.length-1])
];

console.log(ages);