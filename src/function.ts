function sapa (nama:string){
    console.log("Halo, aku " + nama);
}

sapa("Riyan!")

function calculate (a:number, b:number, c:number){
    return a + b + c
}
let hasil : number = calculate(3,5,1)
console.log("Hasil Penjumlahan: " + hasil);

let multiplication = (x:number, y:number) => {
    return x * y 
}
let result = multiplication(5,8)
console.log("Hasil Perkalian: "+ result);

//Tugas no.1
let cube = (num:number) => {
    return num  ** 3
}

let result1:number = cube(3)
console.log("Hasilnya adalah: "+ result1)

// Object

let personn: {
    name: string,
    age: number,
    address: string 
}
personn = {
    name: "Riyan Nurhidayat",
    age: 20,
    address: "Tegal"
}
console.log(personn);









