'use strict';

let arr = ['21234', '4321', '1232', '7665', '998', '4345', '767'];

arr.forEach((item) => {
  if (item[0] === '2' || item[0] === '4') {
    console.log(item);
  }
});

// arr.forEach((item) => {
//   if (item.startsWith('2') || item.startsWith('4')) {
//     console.log(item);
//   }
// });

// for (let i = 0; i < arr.length; i++) {
//   console.log((arr[i][0] === '2' || arr[i][0] === '4'));
// }

// let filter = arr.filter(element => {
//   if (element[0] === '2' || element[0] === '4') {
//     console.log(element);
//   }
// });

// let map = arr.map(element => {
//   if (element[0] === '2' || element[0] === '4') {
//     console.log(element);
//   }
// });

// for (let i = 0; i < arr.length; i++) {
//   console.log((arr[i][0] === '2' || arr[i][0] === '4'));
// }

// 2-ое задание
for (let i = 1; i < 101; i++) {
  for (let k = 1; k < i; k++) {
    if (i % k === 0) {
      console.log('Число: ' + i + '. ' + 'Делители этого числа: ' + k);
    }
  }
}

