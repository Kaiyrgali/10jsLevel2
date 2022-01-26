"use strict"

const database = {
    one: 1,
    two: 2,
    three: "anyString",
};
function multiplyNumeric (obj) {
    for (let key in obj) {
        if ( typeof (obj[key]) === 'number' ) {
            obj[key] = obj[key] * 4 ;
        } ;
    };
};
console.log (database); // original object
multiplyNumeric (database) ;
console.log (database); //changed object

const calculator = {
    read:  function() {
        let getNum1 = +prompt ("Введите значение №1", 2) ;
        this.num1 = getNum1 ;
        let getNum2 = +prompt ("Введите значение №2", 5) ;
        this.num2 = getNum2 ;
    },
    sum: function() {return this.num1 + this.num2 },
    mul: function() {return this.num1 * this.num2 },
}
calculator.read ();
console.log (calculator.sum ()) ;
console.log (calculator.mul ()) ;

let user = {
  name: "Василий Иванович",
  age: 35
};
let json = JSON.stringify (user);
let userNew = JSON.parse (json);
console.log (userNew);