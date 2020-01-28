// Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
// через if, 
// через switch-case 
// через многомерный массив без ифов и switch.

let lang = 'ru';

if (lang == 'ru') {
  console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if (lang == 'en') {
  console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
};

switch (lang) {
  case "en":
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
    break;
  case "ru":
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
    break;
  default:
    console.log("Выбери другой язык");
};

let week = [
  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
]

week = lang === 'ru' ? week[0] : 'en' ? week[1] : 'en';
console.log(week);


// У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
// 	Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
// Запушить проект в репозиторий для усложненных заданий на GitHub

let namePerson = 'Артем';

let position = namePerson === 'Артем' ? ((namePerson === 'Виталий' ? 'Студент' : 'Директор')) : (namePerson === 'Максим' ? 'Препод' : 'Студент')
console.log(position);