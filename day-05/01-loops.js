 
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
  // typeArray[i] = typeof alpArrays[i];
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