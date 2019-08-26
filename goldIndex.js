//const brain = require('brain.js');

const net = new brain.recurrent.LSTMTimeStep({
    inputSize: 1,
    hiddenLayers: [10],
    outputSize: 1
});

//Same test as previous, but combined on a single set
const trainingData = [
    [
        8.85,
        8.85,
        8.89,
        8.99,
        8.50,
        8.96,
        8.85,
        8.85,
        8.85,
        8.85,
        8.50,
        8.96,
    ]
];

net.train(trainingData, );

let result = net.run([8.85]);
let forecastData = net.forecast([8.85], 10)
console.log(result);

console.log(forecastData);
let labelData = ["price1", "price2", "price3", "price4", "price5","price16", "price7", "price8", "price9","price10"]
var stockNextVal = parseFloat(document.getElementById("stock-value1").innerHTML);
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labelData,
        datasets: [{
            label: 'Stock Market Predictor',
            //backgroundColor: 'rgb(255, 99, 132)',
            borderColor: '#03fce3',
            data: forecastData,
            lineTension: 0
        }]
    },

    // Configuration options go here
    options: {
        bezierCurve: false
    }
});