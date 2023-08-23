// Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
// Високосный год.
// Год, номер которого кратен 400, — високосный;
// Остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
// Остальные годы, номер которых кратен 4, — високосные [5].
// Все остальные годы — невисокосные.

// function getYear(year) {
//     if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//       return "Высокосный";
//     }
//     return "Невысокосный";
//   }
//   let year = Number(prompt("Enter the year"));
//   console.log(getYear(year));

// Дан массив с числами:
// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

// let numbers = [1, 2, 3, 4, 5];

// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// Дан массив:
// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.

// let numbers = [1, '', 2, 3, '', 5];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === '') {
//     numbers.splice(i, 1);
//     i--;
//   }
// }

// console.log(numbers);

// Дан массив. Удалите из него каждый пятый элемент.

// let numbers = [4, 25, 0, 25, 14, -7, 'auto', 'orange', 48, true, 28];

// for (let i = 4; i < numbers.length; i += 5) {
//   numbers.splice(i, 1);
//   i--;
// }

// console.log(numbers);

// Дан следующий объект:
// let obj = {
// 1: {
//     1: 11,
//     2: 12,
//     3: 13,
// },
// 2: {
//     1: 21,
//     2: 22,
//     3: 23,
// },
// 3: {
//     1: 24,
//     2: 25,
//     3: 26,
// },
// }
// Найдите сумму элементов этого объекта.

// let sum = 0;

// for (let key1 in obj) {
//   for (let key2 in obj[key1]) {
//     sum += obj[key1][key2];
//   }
// }

// console.log(sum);

// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

// let arr = [25, 11, 3, -45, 12, 66, 60, -30, 14, 20, 18];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 5 !==0){
//         arr.splice(i, 1);
//         i--;
//     }
// }

// console.log(arr);

// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

// function secondsToDays(seconds) {
//   const secondsInDay = 24 * 60 * 60;
//   const days = Math.floor(seconds / secondsInDay);
//   return days;
// }

// let seconds = Number(prompt("Enter seconds"));
// console.log(secondsToDays(seconds));

