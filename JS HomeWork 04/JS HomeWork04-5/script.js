let arrayOfNumbers = [4, 12, 62, 70, -10];
let sum = Math.min(...arrayOfNumbers) + Math.max(...arrayOfNumbers);
console.log(`Min : ${Math.min(...arrayOfNumbers)}, Max : ${Math.max(...arrayOfNumbers)}, Sum: ${sum}`);