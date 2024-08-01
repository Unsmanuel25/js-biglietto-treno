let discount = null;

// Fase raccolta dati
const kms = parseInt(prompt('Qunati km vuoi percorrere', 100))
const age = parseInt(prompt('Quanti anni hai?', 30))
console.log('kms', kms)
console.log('age', age)

// Fase di elaborazione

const basePrice = kms * pricePerkm;
let finalPrice = basePrice;

if (age > 65) discount = 40;
else if (age < 18) discount = 20

// Fase di output

totalElement.innerText = pricemessage + finalPrice.toFixed(2)