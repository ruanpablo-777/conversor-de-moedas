let selectMoney = document.getElementById("select-money")
let selectMoney2 = document.getElementById("select-money-2")
let valueMoney = document.getElementById('value-money')
let valueMoneyConverted = document.getElementById('value-money-converted')
let inputNumber1 = document.getElementById('input-number-1')
let inputNumber2 = document.getElementById('input-number-2')
let theLastUpdate = document.getElementById('dateof-update-money')



const api = fetch("https://v6.exchangerate-api.com/v6/23a3ebe869b290c1ed195f22/latest/USD/", {
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

        Object.entries(rates).forEach(([currency, rate], index) => {
            let option = document.createElement('option')
            option.innerHTML = `${currency}: ${rate}`

            let option2 = document.createElement('option')
            option2.innerHTML = `${currency}: ${rate}`

            selectMoney.appendChild(option)
            selectMoney2.appendChild(option2)
        })
        valueMoney.textContent = selectMoney.value
        valueMoneyConverted.textContent = selectMoney2.value

        document.addEventListener('click', () => {
            defineSelect1(selectMoney.value, selectMoney2.value)
        })
    }).catch(error => console.error('Erro', error))



function defineSelect1(value1, value2) {
    valueMoney.textContent = value1
    valueMoneyConverted.textContent = value2

    console.log(value1)
    let palavras = value1.split(" ")
    let palavras1 = value2.split(" ")
    console.log(palavras[1])
    console.log(palavras1[1])
    convertMoney(palavras[1], palavras1[1])
}

function convertMoney(value1, value2) {

    inputNumber1.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            let mult = parseFloat(inputNumber1.value) * parseFloat(value2)
            inputNumber2.value = mult.toFixed(2)
            console.log(mult)

        }
    })

    inputNumber2.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            let mult = parseFloat(inputNumber2.value) / parseFloat(value2)
            console.log(mult.toFixed(2))
            inputNumber1.value = mult.toFixed(2)
        }
    })
}