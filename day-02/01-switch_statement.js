
const day = 'monday';

switch (day) {
    case "monday": // -> day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case "tuesday":
        console.log('Prepare theory videos');        
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Whire code examples.');
        break;
    case 'friday':
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend.');
        break;
    default:
        console.log("Not a valid day!");
}

const age = 23;
// Eğer yaşı 18 den büyükse çalışır.
age >= 18 ? console.log('I like to drink wine'):
console.log('I like to drink water');// değilse (else) çalışır.

// Genelde böyle kullanılır.
const drink = age >= 18 ? 'drink wine': 'drink water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'drink wine': 'drink water'}`);
