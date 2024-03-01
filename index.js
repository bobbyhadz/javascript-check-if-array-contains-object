// EXAMPLE 1 - Check if an Array contains an Object with Array.some()

const people = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Adam'},
];

const isFound = people.some(element => {
  if (element.id === 1) {
    return true;
  }

  return false;
});

console.log(isFound); // 👉️ true

if (isFound) {
  // object is contained in the array
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if an Array Contains an Object with Array.find()

// const people = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Adam'},
// ];

// const person = people.find(element => {
//   if (element.id === 1) {
//     return true;
//   }

//   return false;
// });

// console.log(person); // 👉️ { id: 1, name: 'John' }

// if (person !== undefined) {
//   // 👉️ object is contained in the array
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if an Array Contains an Object with Array.findIndex()

// const people = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Adam'},
// ];

// const index = people.findIndex(element => {
//   if (element.id === 1) {
//     return true;
//   }

//   return false;
// });

// console.log(index); // 👉️ 0

// if (index !== -1) {
//   // 👉️ object is contained in the array
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if an Array Contains an Object with Array.filter()

// const people = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Adam'},
// ];

// const filteredArray = people.filter(element => {
//   if (element.id === 1) {
//     return true;
//   }

//   return false;
// });

// console.log(filteredArray); // 👉️ [ { id: 1, name: 'John' } ]

// if (filteredArray.length > 0) {
//   // 👉️ object is contained in the array
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if an Array Contains an Object with Array.includes()

// const obj = {id: 2, name: 'Adam'};

// const people = [{id: 1, name: 'John'}];

// people.push(obj);

// if (people.includes(obj)) {
//   // 👇️ this runs
//   console.log('The object is contained in the array');
// } else {
//   console.log('The object is NOT contained in the array');
// }

// ------------------------------------------------------------------

// // EXAMPLE 6 - Check if an Array Contains an Object using a `for...of` loop

// const people = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Adam'},
// ];

// let isContained = false;

// for (const obj of people) {
//   if (obj.id === 1) {
//     isContained = true;
//     console.log(obj); // 👉️ { id: 1, name: 'John' }
//     break;
//   }
// }

// console.log(isContained); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 7 - Check if an Array Contains an Object using a `for` loop

// const people = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Adam'},
// ];

// let isContained = false;

// for (let index = 0; index < people.length; index++) {
//   if (people[index].id === 1) {
//     isContained = true;
//     console.log(people[index]); // 👉️ { id: 1, name: 'John' }
//     break;
//   }
// }

// console.log(isContained); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 8 - Check if an Object is NOT contained in an array in JavaScript

// const arr = [
//   {id: 1, name: 'Alice'},
//   {id: 2, name: 'Bobby'},
//   {id: 3, name: 'Carl'},
// ];

// const notInArray = arr.every(obj => {
//   return obj.id !== 4;
// });

// console.log(notInArray); // 👉️ true

// if (notInArray) {
//   // 👇️ this runs
//   console.log('The object is NOT contained in the array');
// } else {
//   console.log('The object is contained in the array');
// }

// ------------------------------------------------------------------

// // EXAMPLE 9 - Check if a Value is NOT in an Array in JavaScript

// const arr = ['bobby', 'hadz', 'com'];

// if (!arr.includes('XYZ')) {
//   // 👇️ this runs
//   console.log('✅ value is not in array');
// } else {
//   console.log('⛔️ value is in array');
// }

// ------------------------------------------------------------------

// // EXAMPLE 10 - Check if a Value is NOT in an Array using indexOf

// const arr = ['bobby', 'hadz', 'com'];

// if (arr.indexOf('XYZ') === -1) {
//   // 👇️ this runs
//   console.log('✅ value is not in array');
// } else {
//   console.log('⛔️ value is in array');
// }
