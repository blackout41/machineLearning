const brain = require('brain.js');

let model = new brain.NeuralNetwork();

console.log(model.train([
      { input: { Ronaldo: 2, restOfTeam: 1 }, output: { win: 1, loss: 0 } },
      { input: { Ronaldo: 2, restOfTeam: 6 }, output: { win: 0, loss: 1 } },
      { input: { Ronaldo: 1, restOfTeam: 0 }, output: { win: 1, loss: 0 } },
      { input: { Ronaldo: 0, restOfTeam: 2 }, output: { win: 0, loss: 1 } },
      { input: { Ronaldo: 3, restOfTeam: 4 }, output: { win: 1, loss: 0 } },
      { input: { Ronaldo: 2, restOfTeam: 4 }, output: { win: 1, loss: 0 } },
      { input: { Ronaldo: 4, restOfTeam: 4 }, output: { win: 1, loss: 0 } },
      { input: { Ronaldo: 1, restOfTeam: 3 }, output: { win: 0, loss: 1 } },
      { input: { Ronaldo: 1, restOfTeam: 2 }, output: { win: 1, loss: 0 } },
      { input: { Ronaldo: 3, restOfTeam: 3 }, output: { win: 1, loss: 0 } }
]));

console.log(model.run({ Ronaldo: 3, restOfTeam: 6 }));
