// Поиск максимального числа: Условие: Напишите программу, 
// которая находит максимальное число из массива и выводит его.

const arr = [1, -10, 21, 0, 1, 6, -11];
let maxNumber = arr[0];
for (let num of arr) {
    if (num > maxNumber) {
        maxNumber = num;
    }
}
console.log("Максимальное число: " + maxNumber);

// Генератор таблицы умножения: Условие: Выведите таблицу умножения для числа 5.
// const для объявления константы num и присваиваем ей значение 5
const num = 5;
// let для объявления переменной i
for (let i = 1; i <= 10; i++) {
    // Выводим в консоль строку с результатом умножения num на i
    console.log(`${num} * ${i} = ${num * i}`);
}
// Подсчет четных чисел: Условие:
// Напишите программу, которая подсчитывает количество четных чисел в
// заданном массиве.

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count =0;
for(let i = 0; i < list.length; i++){
    if(list[i] % 2 === 0){
        count++;        
    }  
}
console.log(count);

// Реверс массива: Условие: Напишите программу, которая переворачивает заданный массив.

const myArray = [1,2,3,4,5];
const reversArray = myArray.reverse();
console.log(reversArray);

// const myArray = [1,2,3,4,5];
// const reversArray = [];
// for(let i = myArray.length -1;i >=0;i--){
//     reversArray.push(myArray[i]);
// }
// console.log(reversArray)
    

