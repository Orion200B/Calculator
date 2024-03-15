const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number4 = document.querySelector(".number4");
const number5 = document.querySelector(".number5");
const number6 = document.querySelector(".number6");
const number7 = document.querySelector(".number7");
const number8 = document.querySelector(".number8");
const number9 = document.querySelector(".number9");
const number0 = document.querySelector(".number0");
const dot = document.querySelector(".dot");
const backspace = document.querySelector(".backspace");
const display = document.getElementById("display");
const clear = document.querySelector(".clear");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const changeSign = document.querySelector(".plusOrMinus");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equal");
const textArray = 0;
let str;
let a = 0;
let b = 0;
let finalNum;
let signBool = false;

number1.addEventListener("click", (e) =>{
    const splitNumber = display.textContent.split('');
    if(Number(display.textContent) === 0 && !splitNumber.includes(".")){
        display.textContent = "1";
    }else {
        display.textContent += "1";
    }
    b = Number(display.textContent);
});

number2.addEventListener("click", (e) =>{
    const splitNumber = display.textContent.split('');
    if(Number(display.textContent) === 0 && !splitNumber.includes(".")){
        display.textContent = "2";
    }else {
        display.textContent += "2";
    }
    b = Number(display.textContent);
});

number3.addEventListener("click", (e) =>{
    const splitNumber = display.textContent.split('');
    if(Number(display.textContent) === 0 && !splitNumber.includes(".")){
        display.textContent = "3";
    }else {
        display.textContent += "3";
    }
    b = Number(display.textContent);
});

number4.addEventListener("click", (e) =>{
    const splitNumber = display.textContent.split('');
    if(Number(display.textContent) === 0 && !splitNumber.includes(".")){
        display.textContent = "4";
    }else {
        display.textContent += "4";
    }
    b = Number(display.textContent);
});

number5.addEventListener("click", (e) =>{
    const splitNumber = display.textContent.split('');
    if(Number(display.textContent) === 0 && !splitNumber.includes(".")){
        display.textContent = "5";
    }else {
        display.textContent += "5";
    }
    b = Number(display.textContent);
});

number6.addEventListener("click", (e) =>{
    const splitNumber = display.textContent.split('');
    if(Number(display.textContent) === 0 && !splitNumber.includes(".")){
        display.textContent = "6";
    }else {
        display.textContent += "6";
    }
    b = Number(display.textContent);
});

number7.addEventListener("click", (e) =>{
    const splitNumber = display.textContent.split('');
    if(Number(display.textContent) === 0 && !splitNumber.includes(".")){
        display.textContent = "7";
    }else {
        display.textContent += "7";
    }
    b = Number(display.textContent);
});

number8.addEventListener("click", (e) =>{
    const splitNumber = display.textContent.split('');
    if(Number(display.textContent) === 0 && !splitNumber.includes(".")){
        display.textContent = "8";
    }else {
        display.textContent += "8";
    }
    b = Number(display.textContent);
});

number9.addEventListener("click", (e) =>{
    const splitNumber = display.textContent.split('');
    if(Number(display.textContent) === 0 && !splitNumber.includes(".")){
        display.textContent = "9";
    }else {
        display.textContent += "9";
    }
    b = Number(display.textContent)
});

number0.addEventListener("click", (e) =>{
    const splitNumber = display.textContent.split('');
    if(Number(display.textContent) === 0 && !splitNumber.includes(".")){
        display.textContent = "0";
    }else {
        display.textContent += "0";
    }
    b = Number(display.textContent);
});

dot.addEventListener("click", (e) => {
    const splitNumber = display.textContent.split('');
    if(splitNumber.includes(".")){
        display.textContent = display.textContent;
    }else{
        display.textContent += ".";
    }
});

backspace.addEventListener("click", (e) => {
    const splitNumber = display.textContent.split('');
    const removeLast = splitNumber.splice(0, splitNumber.length - 1);
    display.textContent = removeLast.join('');
    b = Number(display.textContent);
    if(display.textContent === ""){
        display.textContent = "0";
    }
});

clear.addEventListener("click", (e) => {
    display.textContent = "0";
    a = 0;
    b = 0;
    finalNum = 0;
});

function signToggle(){
    signBool = !signBool;
}

changeSign.addEventListener("click", (e) => {
    if(signBool && Number(display.textContent) > 0){
        const splitNumber = display.textContent.split('');
        splitNumber.splice(0, 0, '-');
        display.textContent = splitNumber.join('');
    }else if(!signBool  && Number(display.textContent) < 0){
        const splitNumber = display.textContent.split('');
        const removeMinus = splitNumber.slice('1');
        display.textContent = removeMinus.join('');
    }
});

add.addEventListener("click", (e) => {
    str = "add";
    if(a === 0){
        a = Number(display.textContent);
        display.textContent = "";
    } else if(a >= 0 && b === 0){
        b = Number(display.textContent);
        display.textContent = b;
    } else{
        finalNum = a + b;
        display.textContent = finalNum;
        a = 0;
        b = 0;
    }
});

subtract.addEventListener("click", (e) => {
    str = "subtract";
    if(a === 0){
        a = Number(display.textContent);
        display.textContent = "";
    } else if(a >= 0 && b === 0){
        b = Number(display.textContent);
        display.textContent = b;
    } else{
        finalNum = a - b;
        display.textContent = finalNum;
        a = 0;
        b = 0;
    }
});

multiply.addEventListener("click", (e) => {
    str = "multiply";
    if(a === 0){
        a = Number(display.textContent);
        display.textContent = "";
    } else if(a >= 0 && b === 0){
        b = Number(display.textContent);
        display.textContent = b;
    } else{
        finalNum = a * b;
        display.textContent = finalNum;
        a = 0;
        b = 0;
    }
    console.log(str);
});

divide.addEventListener("click", (e) => {
    str = "divide";
    if(a === 0){
        a = Number(display.textContent);
        display.textContent = "";
    } else if(a >= 0 && b === 0){
        b = Number(display.textContent);
        display.textContent = b;
    } else{
        finalNum = a / b;
        display.textContent = finalNum;
        a = 0;
        b = 0;
    }
});

equal.addEventListener("click", (e) => {
    if(str === "add"){
        finalNum = a + b;
        display.textContent = finalNum;
        a = 0;
    }else if(str === "subtract"){
        finalNum = a - b;
        display.textContent = finalNum;
        a = 0;
    }else if(str === "multiply"){
        finalNum = a * b;
        display.textContent = finalNum;
        a = 0;
    }else if(str === "divide"){
        finalNum = a / b;
        display.textContent = finalNum;
        a = 0;
    }
});