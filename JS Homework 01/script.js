//  Neznam samo kako da dodadam $ na krajot od sumata

let phones = 30;
let onePhone = 119.95;
let allPhones = phones * onePhone;
let taxRate = 5;
let priceWithTax = allPhones +(allPhones * 5 / 100);
// var priceWithTax = allPhones * (1+(5/100));

document.getElementById("priceOfOnePhone").innerHTML = onePhone;
document.getElementById("pricePhones").innerHTML = allPhones;
document.getElementById("allPhonesTax").innerHTML = priceWithTax;

// For console

console.log(`The price of one phone is: ${onePhone}$`)
console.log(`The price of 30 phones is: ${allPhones}$`)
console.log(`The price with tax: ${priceWithTax}$`)