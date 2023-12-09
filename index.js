/* 
1. Знайти суму та кількість позитивних елементів.
2. Знайти максимальний елемент масиву та його порядковий номер.
3. Визначити кількість негативних елементів.
4. Знайти кількість непарних позитивних елементів.
5. Визначити кількість парних позитивних елементів.
6. Знайти суму парних позитивних елементів.
7. Знайти суму непарних позитивних елементів.
8. Знайти добуток позитивних елементів.
*/

const numbers = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let countPositives = 0;
let sumOfPositives = 0;
let maxElement = numbers[0];
let maxElementIndex = 0;
let countNegatives = 0;
let countOddPositives = 0;
let countEvenPositives = 0;
let sumOfOddPositives = 0;
let sumOfEvenPositives = 0;
let productOfPositives = 1;

for (let i = 0; i < numbers.length; i++) {
  let currentNumber = numbers[i];

  if (currentNumber > 0) {
    countPositives++;
    sumOfPositives += currentNumber;
    productOfPositives *= currentNumber;

    if (currentNumber % 2 === 0) {
      countEvenPositives++;
      sumOfEvenPositives += currentNumber;
    } else {
      countOddPositives++;
      sumOfOddPositives += currentNumber;
    }
  } else if (currentNumber < 0) {
    countNegatives++;
  }

  if (maxElement < currentNumber) {
    maxElement = currentNumber;
    maxElementIndex = i;
  }
}

const result = alert(`
Результат обчислень:
- Кількість позитивних елементів: ${countPositives};
- Сума позитивних елементів: ${sumOfPositives};
- Максимальний елемент масиву та його індекс: елемент ${maxElement} / індекс ${maxElementIndex};
- Кількість негативних елементів: ${countNegatives};
- Кількість непарних позитивних елементів: ${countOddPositives};
- Кількість парних позитивних елементів: ${countEvenPositives};
- Сума парних позитивних елементів: ${sumOfEvenPositives};
- Сума непарних позитивних елементів: ${sumOfOddPositives};
- Добуток позитивних елементів: ${productOfPositives}
`);

console.log(countPositives);
console.log(sumOfPositives);
// console.log(numbers.reduce((prev, curr) => (curr > 0 ? prev + curr : prev), 0));
console.log(countEvenPositives);
console.log(sumOfEvenPositives);
console.log(countOddPositives);
console.log(sumOfOddPositives);
console.log(productOfPositives);
console.log(countNegatives);
console.log(maxElement);
console.log(maxElementIndex);
