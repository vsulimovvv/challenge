// 1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
// — Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
// — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
// — Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)
// 2) Запушить проект в репозиторий для усложненных заданий на GitHub

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// let hello = '     Hello my Friends! Nice to meet you!  AAAAAAAAAAAAA  ';
let hello = 122;


function challenge(hello) {
  if (isNumber(hello) !== true) {
    console.log(hello.trim(hello.slice(0, 30) + '...'));
  } else {
    console.log('Не строка');
  }
}
challenge(hello);



// let i = document.querySelector('.i');
// let button = document.querySelector('.button');
// let out = document.querySelector('.out');
// function challenge(hello) {
//   hello = i.value;
//   if (isNumber(hello) !== true) {
//     out.innerHTML = hello.trim(hello.slice(0, 30) + '...');
//     console.log(hello.trim(hello.slice(0, 30) + '...'));
//   } else {
//     out.innerHTML = 'Не строка';
//     console.log('Не строка');
//   }
//   i.value = '';
// }

// button.addEventListener('click', challenge);



// let hello = '     Hello my Friends! Nice to meet you!  AAAAAAAAAAAAA  ';

// function challenge(hello) {
//   if (typeof hello !== 'string') {
//     console.log('Не строка');
//   } else {
//     console.log('Строка');
//   }
//   if (hello.length >= 30) {
//     console.log(hello.trim(hello.slice(0, 30) + '...'));
//   }
// }
// challenge(hello);