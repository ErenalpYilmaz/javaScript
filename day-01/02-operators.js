// Şu anki tarihi özellikle değişken olarak yazdık. Kod okunurluğu ve temiz kod için gerekli.
// Daha sonra bu değeri değiştirmek isteseydik tek tek değerleri güncellemek zorunda kalırdık.
// Matematik Operatörleri
const now = 2037;
const ageAlp = now - 2003;
const ageSarah = now - 2019;
console.log(ageAlp, ageSarah);

// 2 ** 3 means => 2*2*2
console.log(ageAlp * 2 , ageSarah / 2 , 2 ** 3);



const firstName = "Erenalp";
const lastName = "Yilmaz";
console.log(firstName+' '+lastName);


// Atama Operatörleri
let x = 10 + 5; // 15
x += 10; // x = x + 10 } 25
x *= 4; // x = x * 4 } 100
console.log(`X => ${x}\nX type: ${typeof(x)}`);

console.log(ageAlp > ageSarah); // >, <, >=, <= 
console.log(ageSarah >= 19);

const isFullAge = ageSarah >= 18;
console.log(`isFullAge = ${isFullAge}`);

console.log(now - 1991 > now - 2018);

