class Person {
    name: string
    age: number
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Halo,Nama saya ${this.name} dan saya berumur ${this.age} tahun`);
        
    }
}

class Employed extends Person {
    jobTitle: string

    constructor(name: string, age:number, jobTitle: string){
        super(name, age)
        this.jobTitle = jobTitle
    }

    work(){
        console.log(`${this.name} bekerja sebagai ${this.jobTitle}`);
        
    }
}

let employe1 = new Employed(`Riyan`, 20, `Pemancing Handal`)
employe1.greet()
employe1.work()