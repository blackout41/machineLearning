
let trainedNet;
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
   let net = new brain.NeuralNetwork();
   net.train(processTrainingData(data));
   trainedNet = net.toFunction();
   console.log('Finished training...');

};

let inputData = document.getElementById("reply").value;

function execute(input) {
   let results = trainedNet(encode(input));
   let output;
   results.truth > results.lies ? output = ' the TRUTH' : output = ' LIES';
   

   ///////////////////////////////////////////////////////////////////////////
   console.log("TRUTH = "+ results.trump);
   console.log("LIES= "+ results.kardashian);
   // document.getElementById("analysing").innerHTML = ".............ANALYSING Neural Network.............";
   // document.getElementById("statement").innerHTML = "Tweet input: "+ inputData + "\n";
   // document.getElementById("trump").innerHTML = "\nTRUMP: " + results.trump.toFixed(6);
   // document.getElementById("kardashian").innerHTML = "KARDASHIAN: " + results.kardashian.toFixed(6);
   // document.getElementById("answer").innerHTML = "Said By: " + output;
   document.getElementById("reply").innerHTML = "you are telling" + output;
   ///////////////////////////////////////////////////////////////////////////
   
   
   return output;
}


train(trainingData);
//train(trainingData);
console.log(execute(inputData));


