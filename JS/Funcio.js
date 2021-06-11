const Person = require('./Person')
class Funcio extends Person{
    constructor(name,age,empr){
        super(name,age)
        this.empr = empr;
    }
    fala(){
        console.log("Olá", this.name, "tudo bem?", this.age, "anos", "emprego",  this.empr)
    }
}

module.exports = Funcio