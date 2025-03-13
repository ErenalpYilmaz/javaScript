'use strict';

// Dizinin sonuna veri ekleme.
const friends = ["Micheal", "Steven", "Peter"];
friends.push("Erenalp");
console.log(friends);

// Push'un sonucunu dizinin uzunlugu olarak ta kullanabilirsin
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

// Dizinin basina veri ekler.
friends.unshift("Alp");
console.log(friends);

// Silme Islemleri
friends.pop(); // Son elemani siler.
console.log(friends);

const popped = friends.pop(); // Sildigi elemani degiskene atar.
console.log(popped);

friends.shift();
console.log(friends); // Dizinin ilk elemanini siler.

// Dizinin icinde eleman varsa elemanin index'ini dondurur.
console.log(friends.indexOf("Steven"));

// Dizinin icinde o eleman varsa true yoksa false döndürür.
// Daha modern bir yöntemdir.
console.log(friends.includes("Steven"));
console.log(friends.includes("Alp"));

if (friends.includes('Peter')){
    console.log("You have a friend called Steven");
}   
