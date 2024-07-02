"use strict";
function sapa(nama) {
    console.log("Halo, aku " + nama);
}
sapa("Riyan!");
function calculate(a, b, c) {
    return a + b + c;
}
let hasil = calculate(3, 5, 1);
console.log("Hasil Penjumlahan: " + hasil);
let multiplication = (x, y) => {
    return x * y;
};
let result = multiplication(5, 8);
console.log("Hasil Perkalian: " + result);
//Tugas no.1
let cube = (num) => {
    return num ** 3;
};
let result1 = cube(3);
console.log("Hasilnya adalah: " + result1);
// Object
let personn;
personn = {
    name: "Riyan Nurhidayat",
    age: 20,
    address: "Tegal"
};
console.log(personn);
