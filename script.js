var apagar = document.querySelector("#apagar");
var limpar = document.querySelector("#limpar"); 
var igual = document.querySelector("#igual"); 

var btn0 = document.querySelector("#zero");
var btn1 = document.querySelector("#um");
var btn2 = document.querySelector("#dois");
var btn3 = document.querySelector("#tres");
var btn4 = document.querySelector("#quatro");
var btn5 = document.querySelector("#cinco");
var btn6 = document.querySelector("#seis");
var btn7 = document.querySelector("#sete");
var btn8 = document.querySelector("#oito");
var btn9 = document.querySelector("#nove");

var mais = document.querySelector("#mais");
var menos = document.querySelector("#menos");
var divisao = document.querySelector("#divisao");
var multiplicacao = document.querySelector("#multiplicacao");
var porcentagem = document.querySelector("#porcentagem");
var circulo = document.querySelector('#circulo');

var conta = document.querySelector("#conta");
var resultado = document.querySelector("#resultado");

btn0.onclick = () => {
    type_to(0);
}

btn1.onclick = () => {
    type_to(1);
}

btn2.onclick = () => {
    type_to(2);
}

btn3.onclick = () => {
    type_to(3);
}

btn4.onclick = () => {
    type_to(4);
}

btn5.onclick = () => {
    type_to(5);
}

btn6.onclick = () => {
    type_to(6);
}

btn7.onclick = () => {
    type_to(7);
}

btn8.onclick = () => {
    type_to(8);
}

btn9.onclick = () => {
    type_to(9);
}

mais.onclick = () => {
    type_to("+");
}

menos.onclick = () => {
    type_to("-");
}

multiplicacao.onclick = () => {
    type_to("X");
}

divisao.onclick = () => {
    type_to("/");
}

circulo.onclick = () => {
    type_to(".");
}

porcentagem.onclick = () => {
    type_to("%");
}

limpar.onclick = () => {
    limpartela();
}

igual.onclick = () =>{
    calcular();
}

apagar.onclick = () =>{
    apaganumero();
}

document.onkeyup = e =>{
    if(e.key == "0" || e.key == "Num0"){
        type_to(0);
    }else if(e.key == "1" || e.key == "Num1"){
        type_to(1);
    }else if(e.key == "2" || e.key == "Num2"){
        type_to(2);
    }else if(e.key == "3" || e.key == "Num3"){
        type_to(3);
    }else if(e.key == "4" || e.key == "Num4"){
        type_to(4);
    }else if(e.key == "5" || e.key == "Num5"){
        type_to(5);
    }else if(e.key == "6" || e.key == "Num6"){
        type_to(6);
    }else if(e.key == "7" || e.key == "Num7"){
        type_to(7);
    }else if(e.key == "8" || e.key == "Num8"){
        type_to(8);
    }else if(e.key == "9" || e.key == "Num9"){
        type_to(9);
    }else if(e.key == "+" || e.key == "Num+"){
        type_to("+");
    }else if(e.key == "/" || e.key == "Num/"){
        type_to("/");
    }else if(e.key == "*" || e.key == "Num*"){
        type_to("X");
    }else if(e.key == "-" || e.key == "Num-"){
        type_to("-");
    }else if(e.key == "%" || e.key == "Num%"){
        type_to("%");
    }else if(e.key == "." || e.key == "Num." || e.key == "," || e.key == "Num,"){
        type_to(".");
    }else if(e.key == "Enter" || e.key == "NumEnter"){      
        calcular();
    }else if(e.key == "Delete"){
        limpartela();
    }else if(e.key == "Backspace" || e.key == "Escape"){
        apaganumero();
    }
}

var type_to = text =>{
    if(conta.innerText == ""){
        conta.innerText = text;
    } else if (conta.innerText.length <= 23){
        conta.innerText = conta.innerText + text;
    }else{
        alert("Limite excedido!")
    }
}

var calcular = () =>{
    
    var res = conta.innerText;

    if(res.indexOf("%") == -1){
        if(res.indexOf("X") != -1){
            res = res.replaceAll("X", "*");
        }
    }else{
        res = res.replace("%", "");
        if(res.indexOf("X") != -1){
            var ress = res.split("X");
            var total = eval(ress[0]);
            var preciso = eval(ress[1]);
            res = (preciso / 100) * total;
        }else{
            alert("Erro matematico! Porcentagem não pode ser calculado sem multiplicação!")
        }
    }
    if(res == ""){
        resultado.innerText = "0";
    }else{
        resultado.innerText = "= " + eval(res);
    }
    
}

var limpartela = () => {
    conta.innerText = "";
    resultado.innerText= "0";
}

var apaganumero = () =>{
    conta.innerText = conta.innerText.substr(0, conta.innerText.length -1);
}
