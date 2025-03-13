'use strict';

const alp = {
  firstName  : "Erenalp",
  lastName : "YILMAZ",
  age  : 2025 - 2003,
  job   : 'full stack developer',
  friends : ["Eren","Alp","Steven"]
}

console.log(alp);

console.log(alp['lastName']); //=> İçine istediğim şeyi koyabilirim.
console.log(alp.lastName);//=> sadece alp objesinin lastName keyini alır.

const nameKey = 'Name';
console.log(alp['first'+nameKey]);
console.log(alp['last'+nameKey]);

// console.log(alp.'last' + nameKey); -> Bu şekilde bir kullanımı bulunmamaktadır.

const interestedIn = "job"; // Kullanicidan aldigimi varsayiyorum.
// console.log(alp.interestedIn); // undefined
console.log(alp[interestedIn]);

alp[interestedIn] ? console.log(alp[interestedIn]) : console.log("Sory that was wrong answer");

console.log(`${alp.firstName} has ${alp.friends.length} friends `);

