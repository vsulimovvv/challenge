let num = 123456789;
let numStr = num.toString();
let mult = 1;
let out = document.querySelector('.out');
for (let i = 1; i <= numStr.length; i++) {
  mult *= i;
}
console.log(mult);

out.innerHTML = (mult ** 3).toString().slice(0, 2);


