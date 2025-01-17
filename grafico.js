const ctx = document.getElementsByClassName('line-chart');
const selectFirstMoney = document.getElementById('select-money')
const selectSecondMoney = document.getElementById('select-money-2')
let valueSelectFirstMoney = 0 
let valueSelectSecondMoney = 0
let chart;
function atualizar(value1, value2){
    valueSelectFirstMoney = parseFloat(value1)
    valueSelectSecondMoney = parseFloat(value2)

    if (chart) {
        chart.destroy()
    }

chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['','dolar','','real',''],
    datasets: [{
      label: 'Value',
      data: [1,valueSelectFirstMoney,0,valueSelectSecondMoney,0],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
  options: {
    animations: {
      tension: {
        duration: 2000,
        easing: 'erase',
        from: 0.5,
        to: 1,
        loop: true
      }
    },
    scales: {
      y: { // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 10
      }
    }
  }
});

}