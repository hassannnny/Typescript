"use strict";
var age = 23;
var theName = "Hassan";
var isAlive = true;
let first = reverseString(theName);
console.log(first);
function reverseString(word) {
    var temp = "";
    for (let i = word.length - 1; i >= 0; i--) {
        temp += word[i];
    }
    return temp;
}
let second = fib(10);
console.log(second);
function fib(num) {
    var prev = 0;
    var pres = 1;
    var holder = 0;
    let array = [];
    array.push(prev);
    array.push(pres);
    for (let i = 0; i < num - 2; i++) {
        holder = pres;
        pres = pres + prev;
        array.push(pres);
        prev = holder;
    }
    return array;
}
let thirdAndFourth = palindrone("racecar", 45);
console.log(thirdAndFourth);
function palindrone(word, num) {
    let array = [];
    var isWordTrue = true;
    for (let i = 0, j = word.length - 1; i < word.length / 2; i++, j--) {
        if (word[i] != word[j]) {
            isWordTrue = false;
            break;
        }
    }
    var num2 = num.toString();
    var isNumTrue = true;
    for (let i = 0, j = num2.length - 1; i < num2.length / 2; i++, j--) {
        if (num2[i] != num2[j]) {
            isNumTrue = false;
            break;
        }
    }
    array.push(isWordTrue);
    array.push(isNumTrue);
    return array;
}
let fifth = leapYear(1998);
console.log(fifth);
function leapYear(year) {
    return (year % 4 == 0);
}
let sixth = prime(11);
console.log(sixth);
function prime(num) {
    var count = 0;
    for (let i = 2; i < num; i++) {
        if (num / i == 0) {
            count++;
        }
    }
    return (count == 0);
}
//# sourceMappingURL=index.js.map