# JavaScript Loops and Array Operations

Bu repo, JavaScript'te **for döngüsü**, **continue & break** ifadeleri ve **dizi işlemleri** ile ilgili örnek kodları içermektedir.

## İçerik

Kodda aşağıdaki işlemler gerçekleştirilmiştir:

1. **For Döngüsü Kullanımı:**
   - 1'den 10'a kadar dönen bir `for` döngüsü ile her iterasyonda konsola bir mesaj yazdırılır.

2. **Dizi Elemanlarını İnceleme:**
   - `alpArrays` adında bir dizi tanımlanmış ve içerisindeki elemanlar `typeof` operatörü ile veri türleriyle birlikte ekrana yazdırılmıştır.
   - `typeArray` adında bir boş dizi oluşturularak `alpArrays` dizisindeki her elemanın türü içine eklenmiştir.

3. **Continue & Break Kullanımı:**
   - `continue` kullanarak sadece **string** veri tipine sahip elemanlar ekrana yazdırılmıştır.
   - `break` kullanarak ilk **number** veri tipine sahip eleman bulunana kadar döngü çalıştırılmıştır.

## Kod

```javascript
for (let i = 1; i <= 10 ; i++){
  console.log(`Lifting weights repetition ${i} 😂`);
};

const alpArrays = [
  'Alp',
  'YILMAZ',
  2037-2003,
  'Full Stack Developer',
  ['Alp','Eren','Osman'],
  true
];
const typeArray = []

// Dizinin eleman sayısını length methodu ile alıyoruz.
for (let i = 0; i < alpArrays.length; i++) {
  console.log(alpArrays[i], typeof alpArrays[i]);
  typeArray.push(typeof alpArrays[i]);
};

console.log(typeArray);

// continue and break
console.log('--------- ONLY STRINGS ---------');

for (let i = 0; i < alpArrays.length; i++) {
  if (typeof alpArrays[i] !== 'string') continue;
  console.log(alpArrays[i], typeof alpArrays[i]);
};

console.log('--------- BREAK WITH NUMBER ---------');

for (let i = 0; i < alpArrays.length; i++) {
  if (typeof alpArrays[i] !== 'number') break;
  console.log(alpArrays[i], typeof alpArrays[i]);
};
```

## Çalıştırma

Bu kodu bir JavaScript çalışma ortamında (örneğin, tarayıcı konsolu veya Node.js) çalıştırarak çıktıları gözlemleyebilirsiniz.


