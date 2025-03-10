//  Değiştirilebilir değişken. 
let age = 30;
age = 31;
console.log(`Age: ${age}`)

//  Aynı zamanda boş değişken olarak da belirtilebiliyor.
let year;
year = 1991;
console.log(`Year: ${year}`);

// Bir kere tanımlandıktan sonra değiştirilemez.
const birthYear = 2003;
// birthYear = 2005;
console.log(birthYear);


// const job; =>  Sonradan değer atanamadığı için bu yöntemde kabul edilemezdir.

// Temiz kod açısından const kullanmak daha mantıklı. let i değiştirilebilecek değişkenlerde tutmak gerekir.
// örn 
const birthYear2 = 2003; // Değişmemesi gereken bir değişken.
let age2 = 25; // Program içinde değişmesi mümkün olan bir değişken.

// var eskidir ve yeni sürümlerde kullanılmaz.1
var job = 'programmer';
job = 'teacher';
console.log(job);
