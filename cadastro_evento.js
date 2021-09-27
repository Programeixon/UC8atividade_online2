let readlineSync = require ('readline-sync');
var nomeEvento;
var dataEvento = 5;
var nomeParticipante;
var idadeParticipante;
var listaParticipante = 100;

nomeEvento = readlineSync.question("Digite o nome do evento: ");
dataEvento = readlineSync.question("Digite a data do evento: ");

if(dataEvento > 4){
    //condição verdadeira
    console.log("Evento Cadastrado! ");
    nomeParticipante = readlineSync.question("Digite seu nome: ");
    idadeParticipante = readlineSync.question("Informe sua idade: ");
    if(idadeParticipante > 17){
        //condição verdadeira
        if(listaParticipante < 101){ 
            //condição verdadeira
            console.log("Cadastro CONCLUIDO! ");
        } else {
            //condição falsa
            console.log("Cadastro não permitido, quantidade de inscritos excedida! ");
        }
    } else {
        //condição falsa
        console.log("Cadastro não permitido, idade não permitida! ");
    }
} else { 
    //condição falsa
    console.log("Cadastro não permitido, informe data posterior! ");

}