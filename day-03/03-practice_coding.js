// const calcTip = (tip) => {
//   if (tip >= 50 && tip <= 300){
//     return tip  *  0.15;
//   }else{
//     return tip  *  0.20;
//   }
// };

const calcTip = function (bill) { 
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
 };

// return KOSUL ? true ise calisir : false ise calisir.

// function calcTip(tip){
//   if (tip >= 50 && tip <= 300){
//     return tip  *  0.15;
//   }else{
//     return tip  *  0.20;
//   }
// }

const tips = [];
const bills = [125,555,44];
const total = []

for (let index = 0; index < bills.length; index++) {
  tips.push(calcTip(bills[index]));
  total.push(bills[index] + tips[index]);
}

console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Totals: ${total}`);
