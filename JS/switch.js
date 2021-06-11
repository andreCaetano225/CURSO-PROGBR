var nota1 = 5.0;
var nota2 = 2.8;

var media = nota1 + nota2 / 2;

var conceito= ""

if(media >=8){
 
    conceito = "Otimo";
}
else if(media >= 6.5){
    conceito = "Bom!"
}  
else{
   conceito = "Regular"
}
console.log(conceito)

switch(conceito){

    case "Otimo": 

    console.log("Parabens voce ta de ferias")
    break;
    
    case "Bom!":
        console.log("Parabens voce pode melhorar")
    break;
        

    
    case "Regular":
        console.log("Voce precisa estudar")
        break;



    default:
        console.log("Não recebi nenhuma nota!")

}