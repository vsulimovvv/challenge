// 1) Создать переменную num со значением 266219 (тип данных число)
// 2) Вывести в консоль произведение (умножение) цифр этого числа
// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
// 4) Вывести на экран первые 2 цифры полученного числа

let num = 266219; //1296

function getNumbersSum(num) {
  return num.toString().split('').reduce(function (a, b) {
    return +a * +b;
  });
}
console.log(getNumbersSum(num));
console.log((getNumbersSum(num) ** 3).toString().slice(0, 2));