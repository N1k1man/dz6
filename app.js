var str = "hello";
var num = 10;

var undef;
console.log(undef);

console.log(Boolean(""));

console.log(Boolean(str));

console.log(num / str);

console.log(typeof num);

console.log(typeof str);





var sum = Number(prompt("Введи сумму:"));

if (isNaN(sum) || sum < 0) {
  console.log("Введи корректное число");
} else if (sum < 100) {
  console.log(`Сумма: ${sum}$, скидки нет`);
} else if (sum >= 100 && sum < 500) {
  var discount = (sum * 5) / 100;
  console.log(`Сумма: ${sum}$, скидка: ${discount.toFixed(2)}$`);
} else if (sum >= 500 && sum <= 1000) {
  var discount = (sum * 10) / 100;
  console.log(`Сумма: ${sum}$, скидка: ${discount.toFixed(2)}$`);
} else if (sum > 1000) {
  var discount = (sum * 15) / 100;
  console.log(`Сумма: ${sum}$, скидка: ${discount.toFixed(2)}$`);
}
