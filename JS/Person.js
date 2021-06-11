class  Person{

    constructor(name,age){
        this.name = name;
        this.age =  age;
    }

    fala(){
        console.log("Olá", this.name, "tudo bem?", this.age, "anos", "emprego",  this.empr)
    }
}

module.exports = Person