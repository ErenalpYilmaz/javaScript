'use strict'; // Katı mod güvenli kod yazmayı kolaylaştırır. 
// Bazı düzensiz yapıları kurmaya izin vermez ve 
// Hata yaptığında geri döndürmeyeceği hataları da döndürür.
// Örneğin yazım yanlışı yaptın!

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio'; // Kelime hatasi
// const private = 546;
// const if = 23;