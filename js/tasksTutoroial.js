/* let base = Number(prompt('Давай число'));
console.log(base);
let power = Number(prompt('Давай степень'));
console.log(power);
const result = base ** power;
console.log(result);
 */

/* Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */
// Math.random() * (max - min) + min
// const max = 80;
// const min = 10;

// const result = Math.random() * (max - min) + min;

// console.log(result);

//* switch

// const stars = 3;
// let price;

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

//*  Задача из видео
/* let totalSpend = 5000;
let payment = 1000;
let discount = 0;

if (totalSpend >= 100 && totalSpend < 999) {
  console.log(`Бронзовый партнер, скидка: 2%`);
  discount = 0.02;
} else if (totalSpend >= 1000 && totalSpend < 4999) {
  console.log(`Серебряный партнер, скидка: 5%`);
  discount = 0.05;
} else if (totalSpend >= 5000) {
  console.log(`Золотой партнер, скидка: 10%`);
  discount = 0.1;
} else {
  console.log(`Вы не партнер, скидка: 0%`);
}
payment = payment - payment * discount;

console.log(
  `Оформляем заказщ на сумму: ${payment}, со скидкой: ${discount * 100}%. Спасибо за покупку.`,
);

totalSpend += payment;

console.log(`Общая сумма потраченного в магазине: ${totalSpend}`); */

//* Пример из конспекта

/* const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

// Вертикальная запись удобнее для чтения
const updatedHouses = [...houses.slice(0, 1), 'Frey of the Crossing', ...houses.slice(2)];

console.log(updatedHouses);
// ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'] */

/* const greet = function (guest) {
  return `${guest}, welcome to ${this.name}!`;
};

const hotel = { name: 'Resort Hotel' };

console.log(greet.call(hotel, ['Mango']));
const hotelGreeter = greet.bind(hotel, 'Mango');

console.log(hotelGreeter());
 */

/* const greet = function (guest, stars) {
  return `${guest}, welcome to ${stars}-star ${this.name}!`;
};

const hotel = { name: 'Resort Hotel' };
const motel = { name: 'Sunlight Motel' };

console.log(greet.call(hotel, ['Mango', 5]));
// "Mango, welcome to 5-star Resort Hotel!"

console.log(greet.apply(motel, ['Poly', 4]));
// "Poly, welcome to 4-star Sunlight Motel!"
 */

/* // Колбэк-функция
function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
}

// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

registerGuest('Манго', greet);
 */

/* const Guest = function (name, room) {
  this.name = name;
  this.room = room;
};

Guest.prototype.showGuestInfo = function () {
  console.log(`name: ${this.name}, room: ${this.room}`);
};

const mango = new Guest('Mango', 28);
const poly = new Guest('Poly', 36);

mango.showGuestInfo(); // name: Mango, room: 28
poly.showGuestInfo(); // name: Poly, room: 36 */

// * Задача Кати

/* const trackList = [
  { name: 'Rosie Simpson', stats: [500, 1000, 1200, 1500] },
  { name: 'Hermion Klaine', stats: [500, 1000, 1050, 1500] },
  { name: 'Eden Clements', stats: [500, 1000, 1100, 1500] },
  { name: 'Annie Copelend', stats: [500, 600, 750, 900] },
];

const sortTracks = [];
for (const track of trackList) {
  const { stats } = track;
  if (
    stats[stats.length - 3] * 1.2 <= stats[stats.length - 2] &&
    stats[stats.length - 2] * 1.2 <= stats[stats.length - 1]
  ) {
    sortTracks.push(track);
  }
}
console.log(sortTracks); */

// Я люблю JavaScript!!!
