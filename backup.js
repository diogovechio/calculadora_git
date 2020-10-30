var display = document.querySelector('div.tela')
var subDisplay = document.querySelector('div.subtela')

var calculo = {
    valor1: null, opCalculo: null, resultado: 0
}

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
        display.innerHTML = "0."
    } else if(!display.innerHTML.includes('.')) {
        display.innerHTML += "."
    }
}

function adicionarOp(op) {
    if(display.innerHTML == "Não é possível dividir por zero" ||

    display.innerHTML == "+" || display.innerHTML == "-" || display.innerHTML =="÷" ||
    display.innerHTML == "x") {} else {

        if(calculo.valor1 == null) {
            calculo.valor1 = Number(display.innerText)
        } else if (calculo.opCalculo != null) {
            calculo.valor1 = calculo.opCalculo(calculo.valor1,Number(display.innerText))
            subDisplay.innerHTML = calculo.valor1
        }
    }

    switch(op) {
        case "+":
            calculo.opCalculo = soma
            break
        case "-":
            calculo.opCalculo = subtrair
            break
        case "x":
            calculo.opCalculo = multiplica
            break
        case "÷":
            calculo.opCalculo = dividir
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
        calculo.valor1 = null
        return "Não é possível dividir por zero"
    } else {
        return num1 / num2 
    }
}

function apagar() {
    display.innerHTML = ""
    subDisplay.innerHTML = ""
    calculo.valor1 = null
    calculo.opCalculo = null
}

function resultado() {

    if(display.innerHTML == "Não é possível dividir por zero" ||
    display.innerHTML == "+" || display.innerHTML == "-" || display.innerHTML =="÷" ||
    display.innerHTML == "x") {} else {

        if(calculo.opCalculo != null) {

            calculo.resultado = calculo.opCalculo(calculo.valor1,Number(display.innerText))
            calculo.valor1 = calculo.resultado
            calculo.opCalculo = null

            if(calculo.valor1 != "Não é possível dividir por zero") calculo.resultado = parseFloat(calculo.resultado.toFixed(10))

            display.innerHTML = calculo.resultado
            subDisplay.innerHTML = ""
        }
    }

    if(display.innerHTML == "Não é possível dividir por zero") {

        calculo.valor1 = null
        calculo.resultado = null
        calculo.opCalculo = null
    }
}