const brain = require('brain.js');
const btcValue = require('btc-value');
// /var net = new brain.recurrent.LSTMTimeStep();
let trainedNet;

btcValue().then(value => {
    console.log('$' + value);
    
    // => e.g. $11048
});




function train() {
   const net = new brain.recurrent.LSTMTimeStep({  inputSize: 1,
  hiddenSizes: [20, 20],
  outputSize: 1});
    net.train([
      //[1,2,3,4,5],
      [11406, 113402,11398, 11406, 11450,12000,11396,11390]
    ]);
    console.log(net.run([11402, 113401,11300,]))
};


train();