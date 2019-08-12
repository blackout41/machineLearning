const brain = require('brain.js');
let trainedNet;
let inputData = "Gonna release a new line of makeup, I really think red goes with my eyes, what do you guys think?";
var closeData = [];
//var trainingData = [];
var testData = [];
var net = new brain.recurrent.LSTMTimeStep();
var req = new XMLHttpRequest();


function encode(arg) {
   return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
   return data.map(d => {
       return {
           input: encode(d.input),
           output: d.output
       }
   })
}

function train(data) {
   const net = new brain.recurrent.LSTMTimeStep({
        inputSize: 1,
        hiddenSizes: [20, 20],
        outputSize: 1
      });
   net.train(data);
   // let net = new brain.NeuralNetwork();
   // net.train(processTrainingData(data));
   trainedNet = net.toFunction();
   // console.log('Finished training...');
   const output = net.run([2 ,4, 8, 16, 32]);
   console.log(output);
   document.getElementById("stock-value1").innerHTML = output;
};

function execute(input) {
   let results = trainedNet(encode(input));
   let output;
   results.trump > results.kardashian ? output = 'Trump' : output = 'Kardashian';
   console.log("TRUMP PRECISION = "+ results.trump);
   console.log("Kardashian PRECISION = "+ results.kardashian);
   document.getElementById("analysing").innerHTML = ".............ANALYSING Neural Network.............";
   document.getElementById("statement").innerHTML = "Tweet input: "+ inputData + "\n";
   document.getElementById("trump").innerHTML = "\nTRUMP: " + results.trump.toFixed(6);
   document.getElementById("kardashian").innerHTML = "KARDASHIAN: " + results.kardashian.toFixed(6);
   document.getElementById("answer").innerHTML = "Said By: " + output;
   
   return output;
}




train(trainingData);
//train(trainingData);
//console.log(execute(inputData));


