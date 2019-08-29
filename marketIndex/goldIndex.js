/*global swal*/
//const brain = require('brain.js');



function trainAndLoadData(){
    
const net = new brain.recurrent.LSTMTimeStep({
    inputSize: 1,
    hiddenLayers: [10],
    outputSize: 1
});

//Same test as previous, but combined on a single set
const trainingData = [
    [
       
        1.507,
        1.502,
        1.497,
        1.527,
        1.527,
        1.545,
        1.526,
        1.507,
        1.502,
        1.497,
        1.527,
        1.527,
        1.545,
        1.526,
        1.507,
        1.502,
        1.497,
        1.527,
        1.527,
        1.545,
        1.526,
    ]
];

    
    //let result = net.run([1.496]);
    net.train(trainingData, );
let forecastData = net.forecast([1.526], 20)

//console.log(result);

console.log(forecastData);
let labelData = ["price1", "price2", "price3", "price4", "price5","price6", "price7", "price8", "price9","price10", 
"price11", "price12", "price13", "price14", "price15","price16", "price17", "price18", "price19","price20"
];




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
    
    
    
    
    
    
    setTimeout(trainAndLoadData, 1000);
}

 trainAndLoadData();

