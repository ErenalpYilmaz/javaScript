'use strict';

const alp = {
  firstName : "Erenalp",
  lastName : "YILMAZ",
  birthYeah : 1991,
  job : "Full Stack Developer",
  friends : ['Michael','Peter','Steven'],
  hasDriverLicense: true,

  // calcAge : function(birthYeah){ => Version 1
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () { => Version 2 
  //   console.log(this);
    
  //   return 2037 - this.birthYeah;
  // }

  // Versiyon 3 ( Uzun hesaplamalı işlemlerde aynı fonksiyonu tekrar ve tekrar kullanılmasını
  // önlemek amacıyla fonksiyonu 1 kere çalışmasına izin verirlir ve çalışan fonksiyon bir nesne döndürür.)
  calcAge: function () {
    this.age =  2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function(){
  return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? "a " : "no "} driver's license`;
  }

}

console.log(alp.age); // => Daha hesaplanmadigi icin undefined doner.
console.log(alp.calcAge());
console.log(alp.age);
console.log(alp.age);
console.log(alp.age);
console.log(alp.getSummary());




