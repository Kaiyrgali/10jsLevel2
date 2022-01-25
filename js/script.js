"use strict"

let firstMessage = "Hello World";
alert (firstMessage);

let userLogin = true;
let userAge = 123;
let userPassword = userLogin + userAge;
console.log(userPassword);
// Bollean значение "true" численно в математических выражениях преобразуется в единицу, "false" - в ноль

let login = "";
let secondMessage = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' : '' ;
alert (secondMessage);

let age = prompt('Введите свой возраст от 18 до 80', 18) ;
let thirdMessage = ( age >= 18 && age <= 80 ) ? 'Все нормально' : 'Возраст не верен' ;
alert (thirdMessage);

for (let index = 1; index < 10; index++) {
    if ( Number.isInteger (index / 2) ) continue ;
    console.log (index) ;
}

let index2 = 10
while (index2 < 20) {
    if ( index2 % 2 != 0) console.log (index2) ;
    index2 ++ ;
}

function max(a, b) {
  if ( a > b ) { return a;
 } else if ( b > a ) { return b;
    }   else { return 'a и b равны';
        }
};
console.log (max (100,20));