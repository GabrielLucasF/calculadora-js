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

igual.onclick = () => {
    calcular();
}

apagar.onclick = () => {
    apaganumero();
}

document.onkeydown = e => {
    if (e.key == "0" || e.key == "Num0") {
        zero.style.backgroundColor = '#121212'
        zero.style.color = '#ffffff'
    } else if (e.key == "1" || e.key == "Num1") {
        um.style.backgroundColor = '#121212'
        um.style.color = '#ffffff'
    } else if (e.key == "2" || e.key == "Num2") {
        dois.style.backgroundColor = '#121212'
        dois.style.color = '#ffffff'
    } else if (e.key == "3" || e.key == "Num3") {
        tres.style.backgroundColor = '#121212'
        tres.style.color = '#ffffff'
    } else if (e.key == "4" || e.key == "Num4") {
        quatro.style.backgroundColor = '#121212'
        quatro.style.color = '#ffffff'
    } else if (e.key == "5" || e.key == "Num5") {
        cinco.style.backgroundColor = '#121212'
        cinco.style.color = '#ffffff'
    } else if (e.key == "6" || e.key == "Num6") {
        seis.style.backgroundColor = '#121212'
        seis.style.color = '#ffffff'
    } else if (e.key == "7" || e.key == "Num7") {
        sete.style.backgroundColor = '#121212'
        sete.style.color = '#ffffff'
    } else if (e.key == "8" || e.key == "Num8") {
        oito.style.backgroundColor = '#121212'
        oito.style.color = '#ffffff'
    } else if (e.key == "9" || e.key == "Num9") {
        nove.style.backgroundColor = '#121212'
        nove.style.color = '#ffffff'
    } else if (e.key == "+" || e.key == "Num+") {
        mais.style.backgroundColor = '#121212'
        mais.style.color = '#ffffff'
    } else if (e.key == "/" || e.key == "Num/") {
        divisao.style.backgroundColor = '#121212'
        divisao.style.color = '#ffffff'
    } else if (e.key == "*" || e.key == "Num*") {
        multiplicacao.style.backgroundColor = '#121212'
        multiplicacao.style.color = '#ffffff'
    } else if (e.key == "-" || e.key == "Num-") {
        menos.style.backgroundColor = '#121212'
        menos.style.color = '#ffffff'
    } else if (e.key == "%" || e.key == "Num%") {
        porcentagem.style.backgroundColor = '#121212'
        porcentagem.style.color = '#ffffff'
    } else if (e.key == "." || e.key == "Num." || e.key == "," || e.key == "Num,") {
        circulo.style.backgroundColor = '#121212'
        circulo.style.color = '#ffffff'
    } else if (e.key == "Enter" || e.key == "NumEnter") {
        igual.style.backgroundColor = '#121212'
        igual.style.color = '#ffffff'
    } else if (e.key == "Delete") {
        limpar.style.backgroundColor = '#121212'
        limpar.style.color = '#ffffff'
    } else if (e.key == "Backspace" || e.key == "Escape") {
        apagar.style.backgroundColor = '#121212'
        apagar.style.color = '#ffffff'
    }
}

document.onkeyup = e => {
    if (e.key == "0" || e.key == "Num0") {
        type_to(0);
        zero.style.backgroundColor = '#efefef'
        zero.style.color = '#121212'
    } else if (e.key == "1" || e.key == "Num1") {
        type_to(1);
        um.style.backgroundColor = '#efefef'
        um.style.color = '#121212'
    } else if (e.key == "2" || e.key == "Num2") {
        type_to(2);
        dois.style.backgroundColor = '#efefef'
        dois.style.color = '#121212'
    } else if (e.key == "3" || e.key == "Num3") {
        type_to(3);
        tres.style.backgroundColor = '#efefef'
        tres.style.color = '#121212'
    } else if (e.key == "4" || e.key == "Num4") {
        type_to(4);
        quatro.style.backgroundColor = '#efefef'
        quatro.style.color = '#121212'
    } else if (e.key == "5" || e.key == "Num5") {
        type_to(5);
        cinco.style.backgroundColor = '#efefef'
        cinco.style.color = '#121212'
    } else if (e.key == "6" || e.key == "Num6") {
        type_to(6);
        seis.style.backgroundColor = '#efefef'
        seis.style.color = '#121212'
    } else if (e.key == "7" || e.key == "Num7") {
        type_to(7);
        sete.style.backgroundColor = '#efefef'
        sete.style.color = '#121212'
    } else if (e.key == "8" || e.key == "Num8") {
        type_to(8);
        oito.style.backgroundColor = '#efefef'
        oito.style.color = '#121212'
    } else if (e.key == "9" || e.key == "Num9") {
        type_to(9);
        nove.style.backgroundColor = '#efefef'
        nove.style.color = '#121212'
    } else if (e.key == "+" || e.key == "Num+") {
        type_to("+");
        mais.style.backgroundColor = '#efefef'
        mais.style.color = '#121212'
    } else if (e.key == "/" || e.key == "Num/") {
        type_to("/");
        divisao.style.backgroundColor = '#efefef'
        divisao.style.color = '#121212'
    } else if (e.key == "*" || e.key == "Num*") {
        type_to("X");
        multiplicacao.style.backgroundColor = '#efefef'
        multiplicacao.style.color = '#121212'
    } else if (e.key == "-" || e.key == "Num-") {
        type_to("-");
        menos.style.backgroundColor = '#efefef'
        menos.style.color = '#121212'
    } else if (e.key == "%" || e.key == "Num%") {
        type_to("%");
        porcentagem.style.backgroundColor = '#efefef'
        porcentagem.style.color = '#121212'
    } else if (e.key == "." || e.key == "Num." || e.key == "," || e.key == "Num,") {
        type_to(".");
        circulo.style.backgroundColor = '#efefef'
        circulo.style.color = '#121212'
    } else if (e.key == "Enter" || e.key == "NumEnter") {
        calcular();
        igual.style.backgroundColor = '#87ceeb';
        igual.style.color = '#ffffff'
    } else if (e.key == "Delete") {
        limpartela();
        limpar.style.backgroundColor = '#efefef'
        limpar.style.color = '#121212'
    } else if (e.key == "Backspace" || e.key == "Escape") {
        apaganumero();
        apagar.style.backgroundColor = '#efefef'
        apagar.style.color = '#121212'
    }
}

var type_to = text => {
    if (conta.innerText == "") {
        conta.innerText = text;
    } else if (conta.innerText.length <= 23) {
        conta.innerText = conta.innerText + text;
    } else {
        alert("Limite excedido!")
    }
}


/*
let botao = "%";

if (botao === "%") {
    let valor = 10;
    let percent = 1;
    let calc = (valor / 100) * percent;
    let total = calc + valor;
    console.log(total);
}
*/
var calcular = () => {

    var res = conta.innerText;

    if (res.indexOf("%") == -1) {
        if (res.indexOf("X") != -1) {
            res = res.replaceAll("X", "*");
        }
    } else {



        if (res.indexOf("X") != -1) {
            var ress = res.split("X");
            var total = eval(ress[0]);
            var preciso = eval(ress[1]);
            res = (preciso / 100) * total;
        } else if (res.match(/%.*/)) {

            var str = res.split("+");
            var valor = str[0];
            var percent = str[1].replaceAll("%", "");
            res = eval(valor) + eval(((valor / 100) * percent));
            alert(res)
        } else {
            alert("Erro matematico! Porcentagem não pode ser calculado sem multiplicação!")
        }
    }
    if (res == "") {
        resultado.innerText = "0";
    } else {
        resultado.innerText = "= " + eval(res);
    }

}

var limpartela = () => {
    conta.innerText = "";
    resultado.innerText = "0";
}

var apaganumero = () => {
    conta.innerText = conta.innerText.substr(0, conta.innerText.length - 1);
}