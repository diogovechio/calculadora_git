var display = document.querySelector('div.tela')
var subDisplay = document.querySelector('div.subtela')

var valor1 = null
var opCalculo = null
var varResultado

function adicionarNum(num) {
    if(display.innerHTML == "" || display.innerHTML == "0" || display.innerHTML == "Não é possível dividir por zero" ||
    display.innerHTML == "+" || display.innerHTML == "-" || display.innerHTML =="÷" ||
    display.innerHTML == "x") {
        display.innerHTML = num
    } else {
        display.innerHTML += num
    }
}

function adicionarPonto() {
    if(display.innerHTML == "" || display.innerHTML == "Não é possível dividir por zero" ||
    display.innerHTML == "+" || display.innerHTML == "-" || display.innerHTML =="÷" ||
    display.innerHTML == "x") {
        display.innerHTML = "0,"
    } else if(!display.innerHTML.includes(',')) {
        display.innerHTML += ","
    }
}

function adicionarOp(op) {
    if(display.innerHTML == "Não é possível dividir por zero" ||

    display.innerHTML == "+" || display.innerHTML == "-" || display.innerHTML =="÷" ||
    display.innerHTML == "x") {} else {

        if(valor1 == null) {
            valor1 = Number(display.innerText.replace(",","."))
        } else if (opCalculo != null) {
            valor1 = opCalculo(valor1,Number(display.innerText.replace(",",".")))
            subDisplay.innerHTML = valor1
            subDisplay.innerHTML = subDisplay.innerHTML.replace(".",",")
        }
    }

    switch(op) {
        case "+":
            opCalculo = soma
            break
        case "-":
            opCalculo = subtrair
            break
        case "x":
            opCalculo = multiplica
            break
        case "÷":
            opCalculo = dividir
    }
    display.innerHTML = op
}

function soma(num1,num2) {
    return num1 + num2
}

function subtrair(num1,num2) {
    return num1 - num2
}

function multiplica(num1,num2) {
    return num1 * num2
}

function dividir(num1,num2) {
    if(num2 == 0){
        valor1 = null
        return "Não é possível dividir por zero"
    } else {
        return num1 / num2 
    }
}

function apagar() {
    display.innerHTML = ""
    subDisplay.innerHTML = ""
    valor1 = null
    opCalculo = null
}

function resultado() {

    if(display.innerHTML == "Não é possível dividir por zero" ||
    display.innerHTML == "+" || display.innerHTML == "-" || display.innerHTML =="÷" ||
    display.innerHTML == "x") {} else {

        if(opCalculo != null) {

            varResultado = opCalculo(valor1,Number(display.innerText.replace(",",".")))
            valor1 = varResultado
            opCalculo = null

            if(valor1 != "Não é possível dividir por zero") varResultado = parseFloat(varResultado.toFixed(10))

            display.innerHTML = varResultado
            display.innerHTML = display.innerHTML.replace(".",",")
            subDisplay.innerHTML = ""
        }
    }

    if(display.innerHTML == "Não é possível dividir por zero") {

        valor1 = null
        varResultado = null
        opCalculo = null
    }
}