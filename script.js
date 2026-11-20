"use strict";

console.log("JavaScript успішно підключено!");

const userName = "Артем"; 
let age = 17;
let averageGrade = 7;
let isStudent = true;

let unassignedValue;
let emptyValue = null;
const bigNumber = 9007199254740993n;
const uniqueId = Symbol("id");

console.log("userName:", userName, "| typeof:", typeof userName);
console.log("age:", age, "| typeof:", typeof age);
console.log("averageGrade:", averageGrade, "| typeof:", typeof averageGrade);
console.log("isStudent:", isStudent, "| typeof:", typeof isStudent);
console.log("unassignedValue:", unassignedValue, "| typeof:", typeof unassignedValue);
console.log("emptyValue:", emptyValue, "| typeof:", typeof emptyValue);
console.log("bigNumber:", bigNumber, "| typeof:", typeof bigNumber);
console.log("uniqueId:", uniqueId, "| typeof:", typeof uniqueId);


function logConversion(label, initialValue, convertedValue) {
  console.log(
    `${label}: початкове =`,
    initialValue,
    `(${typeof initialValue}) -> результат =`,
    convertedValue,
    `(${typeof convertedValue})`
  );
}

const raw1 = "125";
logConversion("1. '125' -> number", raw1, Number(raw1));

const raw2 = "15.75";
logConversion("2. '15.75' -> number", raw2, Number(raw2));

const raw3 = 250;
logConversion("3. 250 -> string", raw3, String(raw3));

const raw4 = true;
logConversion("4. true -> string", raw4, String(raw4));

const raw5 = "false";
logConversion("5. 'false' -> boolean", raw5, Boolean(raw5));

const raw6 = 0;
logConversion("6. 0 -> boolean", raw6, Boolean(raw6));

const raw7 = 1;
logConversion("7. 1 -> boolean", raw7, Boolean(raw7));

const raw8 = null;
logConversion("8. null -> number", raw8, Number(raw8));

const raw9 = "45px";
logConversion("9. '45px' -> number (Number)", raw9, Number(raw9));
logConversion("9b. '45px' -> number (parseInt)", raw9, parseInt(raw9, 10));

const raw10 = "12.5kg";
logConversion("10. '12.5kg' -> number (Number)", raw10, Number(raw10));
logConversion("10b. '12.5kg' -> number (parseFloat)", raw10, parseFloat(raw10));


const strA = "25";
const strB = "5";

const numA = Number(strA);
const numB = Number(strB);

const sum = numA + numB;
const diff = numA - numB;
const prod = numA * numB;

console.log("Сума (25 + 5):", sum);
console.log("Різниця (25 - 5):", diff);
console.log("Добуток (25 * 5):", prod);

const concatResult = strA + strB;
console.log('"25" + "5" (без перетворення):', concatResult, "| тип:", typeof concatResult);
console.log('Number("hello"):', Number("hello"));
console.log('Number(""):', Number(""));
console.log('Boolean("0"):', Boolean("0"));
console.log('Boolean(""):', Boolean(""));
console.log("String(null):", String(null));
console.log('"10" + 5:', "10" + 5);
console.log('"10" - 5:', "10" - 5);
console.log("typeof null:", typeof null);