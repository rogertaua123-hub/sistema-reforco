const ctx = document.getElementById('graficoFinanceiro');

new Chart(ctx, {

type: 'bar',

data: {

labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],

datasets: [{

label: 'Faturamento',

data: [12000, 15000, 20000, 18000, 22000]

}]

},

});