let selectMoney = document.getElementById("select-money")
let selectMoney2 = document.getElementById("select-money-2")
let valueMoney = document.getElementById('value-money')
let valueMoneyConverted = document.getElementById('value-money-converted')
let inputNumber1 = document.getElementById('input-number-1')
let inputNumber2 = document.getElementById('input-number-2')
let theLastUpdate = document.getElementById('dateof-update-money')



const api = fetch("https://v6.exchangerate-api.com/v6/68a3d03c45ca760482d3f4b1/latest/USD", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
})

    .then(response => response.json())
    .then(data => {

        console.log(data);
        theLastUpdate.textContent = data.time_last_update_utc


        const rates = data.conversion_rates

        Object.entries(rates).forEach(([currency, rate], index, elemet) => {
            let option = document.createElement('option')
            option.innerHTML = `${currency} ${rate}`

            let option2 = document.createElement('option')
            option2.innerHTML = `${currency} ${rate}`

            selectMoney.appendChild(option)
            selectMoney2.appendChild(option2)

            valueMoney.textContent = selectMoney.value
            valueMoneyConverted.textContent = selectMoney2.value
        })
        inputNumber1.addEventListener('change', () => {
            let value1 = selectMoney.value.split(" ")
            let value2 = selectMoney2.value.split(" ")
            console.log('hello', value1[0])
            convertMoney1(value1[1], value2[1])
        })

        selectMoney.addEventListener('click', () => {
            defineSelect1(selectMoney.value, selectMoney2.value)
        })
        selectMoney2.addEventListener('click', () => {
            defineSelect1(selectMoney.value, selectMoney2.value)
        })
        defineSelect1(selectMoney.value, selectMoney2.value)

     

        inputNumber2.addEventListener('change', (e) => {
            let value1 = selectMoney.value.split(" ")
            let value2 = selectMoney2.value.split(" ")
            console.log('hello', value1[0])
            convertMoney2(value1[1], value2[1])

        })
    }).catch(error => console.error('Erro', error))

document.addEventListener('DOMContentLoaded', () => {

    defineSelect1(selectMoney.value, selectMoney2.value)
})





function defineSelect1(value1, value2) {
    valueMoney.textContent = value1
    valueMoneyConverted.textContent = value2

    let palavras = value1.split(" ")
    let palavras1 = value2.split(" ")

    atualizar(palavras, palavras1)
}

function convertMoney1(value1, value2) {

    console.log('hello', value1[0])


    if (value1 > value2) {

        let mult = parseFloat(inputNumber1.value) / parseFloat(value1)
        inputNumber2.value = mult.toFixed(2)
    } else {
        let mult = parseFloat(inputNumber1.value) * parseFloat(value2)
        inputNumber2.value = mult.toFixed(2)
    }

}




    function convertMoney2(value1, value2) {
        if (value2 > value1) {

            let mult = parseFloat(inputNumber2.value) / parseFloat(value2)
            inputNumber1.value = mult.toFixed(2)
        }else {

            let mult = parseFloat(inputNumber2.value) * parseFloat(value1)
            inputNumber1.value = mult.toFixed(2)
        }


    }

    function canvas() {
        let canvas = document.getElementById('canvas')
        if (window.innerWidth <= 450) {
            canvas.style.width = '200px'
        }
    }

canvas()
window.addEventListener('resize', canvas)