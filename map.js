// Repaso de forEach

const numbers = [5, -3, 7, -1, 8, -6, 2, -9, 4, -7, 2];

// forEach()

// const fnForEach = (element, index, array) => {}

// numbers.forEach(fnForEach);

let total = 0;

numbers.forEach((number) => {
  // total += number;
  total = number + total;
}); // undefined

// console.log(total);

const animals = [
  { name: 'Ideafix', age: 5, species: 'dog' },
  { name: 'Nevado', age: 10, species: 'dog' },
  { name: 'Bola de Nieve', age: 6, species: 'cat' },
  { name: 'Pequeño Ayudante de Santa', age: 8, species: 'dog' },
];

const cats = [];

animals.forEach((element) => {
  if (element.species === 'cat') {
    cats.push(element);
  }
});

// console.log(cats);

// Repaso de map

const _numbers = numbers.map((element) => {
  return element * 2;
});

// console.log(_numbers);
// console.log(numbers);

// const array = [
//   {name: "Luis", age: 13, city: "Madrid"},
//   {name: "Ana", age: 30, city: "Barcelona"},
//   {name: "Carlos", age: 35, city: "Valencia"},
//   {name: "Maria", age: 9, city: "Sevilla"},
//   {name: "Pedro", age: 45, city: "Madrid"},
//   {name: "Pepe", age: 17, city: "Madrid"}
// ];

// const obj = { name: 'Luis', age: 13, city: 'Madrid' };

// obj.ofLegalAge = false;
// console.log(obj);

const newArray = array.map((element) => {
  if (element.age >= 18) {
    element.ofLegalAge = true;
  } else {
    element.ofLegalAge = false;
  }
  return element;
});

// console.log(newArray);

const _array = []

array.forEach((element) => {
  if (element.age >= 18) {
    element.ofLegalAge = true;
  } else {
    element.ofLegalAge = false;
  }
  _array.push(element);
})

// console.log(_array)