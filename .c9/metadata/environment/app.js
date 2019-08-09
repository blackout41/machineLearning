{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":42,"column":1},"end":{"row":43,"column":0},"action":"insert","lines":["",""],"id":423},{"start":{"row":43,"column":0},"end":{"row":44,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":44,"column":0},"end":{"row":44,"column":1},"action":"insert","lines":["f"],"id":426},{"start":{"row":44,"column":1},"end":{"row":44,"column":2},"action":"insert","lines":["u"]},{"start":{"row":44,"column":2},"end":{"row":44,"column":3},"action":"insert","lines":["n"]},{"start":{"row":44,"column":3},"end":{"row":44,"column":4},"action":"insert","lines":["c"]},{"start":{"row":44,"column":4},"end":{"row":44,"column":5},"action":"insert","lines":["t"]},{"start":{"row":44,"column":5},"end":{"row":44,"column":6},"action":"insert","lines":["i"]},{"start":{"row":44,"column":6},"end":{"row":44,"column":7},"action":"insert","lines":["o"]},{"start":{"row":44,"column":7},"end":{"row":44,"column":8},"action":"insert","lines":["n"]}],[{"start":{"row":44,"column":8},"end":{"row":44,"column":9},"action":"insert","lines":[" "],"id":427},{"start":{"row":44,"column":9},"end":{"row":44,"column":10},"action":"insert","lines":["g"]},{"start":{"row":44,"column":10},"end":{"row":44,"column":11},"action":"insert","lines":["e"]},{"start":{"row":44,"column":11},"end":{"row":44,"column":12},"action":"insert","lines":["t"]},{"start":{"row":44,"column":12},"end":{"row":44,"column":13},"action":"insert","lines":["S"]},{"start":{"row":44,"column":13},"end":{"row":44,"column":14},"action":"insert","lines":["t"]},{"start":{"row":44,"column":14},"end":{"row":44,"column":15},"action":"insert","lines":["o"]},{"start":{"row":44,"column":15},"end":{"row":44,"column":16},"action":"insert","lines":["c"]},{"start":{"row":44,"column":16},"end":{"row":44,"column":17},"action":"insert","lines":["k"]}],[{"start":{"row":44,"column":17},"end":{"row":44,"column":18},"action":"insert","lines":["D"],"id":428},{"start":{"row":44,"column":18},"end":{"row":44,"column":19},"action":"insert","lines":["a"]},{"start":{"row":44,"column":19},"end":{"row":44,"column":20},"action":"insert","lines":["t"]},{"start":{"row":44,"column":20},"end":{"row":44,"column":21},"action":"insert","lines":["a"]}],[{"start":{"row":44,"column":21},"end":{"row":44,"column":23},"action":"insert","lines":["()"],"id":429}],[{"start":{"row":44,"column":23},"end":{"row":44,"column":24},"action":"insert","lines":["{"],"id":430}],[{"start":{"row":44,"column":24},"end":{"row":46,"column":1},"action":"insert","lines":["","   ","}"],"id":431}],[{"start":{"row":45,"column":3},"end":{"row":66,"column":11},"action":"insert","lines":["// GET Stock Data","req.open('GET', 'https://api.iextrading.com/1.0/stock/amd/chart/dynamic');","req.onload = function() {","\tvar data = [];","\tdata.push(JSON.parse(req.responseText));","\t//console.log(data[0].data);","\tfor(let i = 0; i < data[0].data.length; i++) {","\t\tcloseData.push(data[0].data[i].close);","\t}","  for(let i = 0; i < closeData.length; i++) {","    if(i >= closeData.length * 0.8) {","        testData.push(closeData[i]);","    } else {","        trainingData.push(closeData[i]);","    }","  }","  net.train([[19.98, 20.4, 20.9, 22.29, 23.98, 25.26, 25.05, 25.2, 24.89, 25.17, 28.06, 28.51, 27.84, 27.38, 29.89, 30.1, 32.21, 30.48, 32.72, 32.43, 31.93, 31.21]]);","  console.log(\"Expect: 31.18\");","  var output = net.run([25.05, 25.2, 24.89, 25.17, 28.06, 28.51, 27.84, 27.38, 29.89, 30.1, 32.21, 30.48, 32.72, 32.43, 31.93, 31.21]);","  console.log(\"PREDICT: \" + output);","}","req.send();"],"id":432}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["/"],"id":434},{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":67,"column":0},"end":{"row":67,"column":1},"action":"remove","lines":["}"],"id":435}],[{"start":{"row":44,"column":0},"end":{"row":44,"column":24},"action":"remove","lines":["function getStockData(){"],"id":436}],[{"start":{"row":67,"column":0},"end":{"row":67,"column":1},"action":"insert","lines":["c"],"id":437},{"start":{"row":67,"column":1},"end":{"row":67,"column":2},"action":"insert","lines":["o"]},{"start":{"row":67,"column":2},"end":{"row":67,"column":3},"action":"insert","lines":["n"]},{"start":{"row":67,"column":3},"end":{"row":67,"column":4},"action":"insert","lines":["s"]},{"start":{"row":67,"column":4},"end":{"row":67,"column":5},"action":"insert","lines":["o"]},{"start":{"row":67,"column":5},"end":{"row":67,"column":6},"action":"insert","lines":["l"]},{"start":{"row":67,"column":6},"end":{"row":67,"column":7},"action":"insert","lines":["e"]},{"start":{"row":67,"column":7},"end":{"row":67,"column":8},"action":"insert","lines":["."]},{"start":{"row":67,"column":8},"end":{"row":67,"column":9},"action":"insert","lines":["l"]},{"start":{"row":67,"column":9},"end":{"row":67,"column":10},"action":"insert","lines":["o"]},{"start":{"row":67,"column":10},"end":{"row":67,"column":11},"action":"insert","lines":["g"]}],[{"start":{"row":67,"column":11},"end":{"row":67,"column":13},"action":"insert","lines":["()"],"id":438}],[{"start":{"row":67,"column":12},"end":{"row":67,"column":13},"action":"insert","lines":["r"],"id":439},{"start":{"row":67,"column":13},"end":{"row":67,"column":14},"action":"insert","lines":["e"]},{"start":{"row":67,"column":14},"end":{"row":67,"column":15},"action":"insert","lines":["s"]},{"start":{"row":67,"column":15},"end":{"row":67,"column":16},"action":"insert","lines":["."]},{"start":{"row":67,"column":16},"end":{"row":67,"column":17},"action":"insert","lines":["s"]}],[{"start":{"row":67,"column":17},"end":{"row":67,"column":18},"action":"insert","lines":["e"],"id":440},{"start":{"row":67,"column":18},"end":{"row":67,"column":19},"action":"insert","lines":["n"]},{"start":{"row":67,"column":19},"end":{"row":67,"column":20},"action":"insert","lines":["d"]}],[{"start":{"row":67,"column":20},"end":{"row":67,"column":22},"action":"insert","lines":["()"],"id":441}],[{"start":{"row":67,"column":0},"end":{"row":67,"column":1},"action":"insert","lines":["/"],"id":442},{"start":{"row":67,"column":1},"end":{"row":67,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":67,"column":1},"end":{"row":67,"column":2},"action":"remove","lines":["/"],"id":443},{"start":{"row":67,"column":0},"end":{"row":67,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":66,"column":11},"end":{"row":67,"column":23},"action":"remove","lines":["","console.log(res.send())"],"id":446}],[{"start":{"row":44,"column":0},"end":{"row":66,"column":11},"action":"remove","lines":["","   // GET Stock Data","req.open('GET', 'https://api.iextrading.com/1.0/stock/amd/chart/dynamic');","req.onload = function() {","\tvar data = [];","\tdata.push(JSON.parse(req.responseText));","\t//console.log(data[0].data);","\tfor(let i = 0; i < data[0].data.length; i++) {","\t\tcloseData.push(data[0].data[i].close);","\t}","  for(let i = 0; i < closeData.length; i++) {","    if(i >= closeData.length * 0.8) {","        testData.push(closeData[i]);","    } else {","        trainingData.push(closeData[i]);","    }","  }","  net.train([[19.98, 20.4, 20.9, 22.29, 23.98, 25.26, 25.05, 25.2, 24.89, 25.17, 28.06, 28.51, 27.84, 27.38, 29.89, 30.1, 32.21, 30.48, 32.72, 32.43, 31.93, 31.21]]);","  console.log(\"Expect: 31.18\");","  var output = net.run([25.05, 25.2, 24.89, 25.17, 28.06, 28.51, 27.84, 27.38, 29.89, 30.1, 32.21, 30.48, 32.72, 32.43, 31.93, 31.21]);","  console.log(\"PREDICT: \" + output);","}","req.send();"],"id":449}],[{"start":{"row":40,"column":70},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":450},{"start":{"row":41,"column":0},"end":{"row":41,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":24,"column":3},"end":{"row":24,"column":6},"action":"insert","lines":["// "],"id":451},{"start":{"row":25,"column":3},"end":{"row":25,"column":6},"action":"insert","lines":["// "]},{"start":{"row":26,"column":3},"end":{"row":26,"column":6},"action":"insert","lines":["// "]},{"start":{"row":27,"column":3},"end":{"row":27,"column":6},"action":"insert","lines":["// "]}],[{"start":{"row":27,"column":42},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":452},{"start":{"row":28,"column":0},"end":{"row":28,"column":3},"action":"insert","lines":["   "]},{"start":{"row":28,"column":3},"end":{"row":29,"column":0},"action":"insert","lines":["",""]},{"start":{"row":29,"column":0},"end":{"row":29,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":29,"column":3},"end":{"row":34,"column":0},"action":"insert","lines":["const net = new brain.recurrent.LSTMTimeStep();","","net.train([","  [1, 2, 3]","]);",""],"id":453}],[{"start":{"row":31,"column":0},"end":{"row":31,"column":3},"action":"insert","lines":["   "],"id":454},{"start":{"row":32,"column":0},"end":{"row":32,"column":3},"action":"insert","lines":["   "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":31,"column":13},"end":{"row":33,"column":4},"action":"remove","lines":["[","     [1, 2, 3]","   ]"],"id":455}],[{"start":{"row":31,"column":13},"end":{"row":31,"column":14},"action":"insert","lines":["d"],"id":456},{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"insert","lines":["a"]}],[{"start":{"row":31,"column":15},"end":{"row":31,"column":16},"action":"insert","lines":["t"],"id":457},{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"insert","lines":["a"]}],[{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"remove","lines":[" "],"id":458},{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"remove","lines":["/"]},{"start":{"row":26,"column":3},"end":{"row":26,"column":4},"action":"remove","lines":["/"]}],[{"start":{"row":29,"column":3},"end":{"row":31,"column":19},"action":"remove","lines":["const net = new brain.recurrent.LSTMTimeStep();","","   net.train(data);"],"id":459}],[{"start":{"row":29,"column":0},"end":{"row":29,"column":3},"action":"remove","lines":["   "],"id":460},{"start":{"row":28,"column":3},"end":{"row":29,"column":0},"action":"remove","lines":["",""]},{"start":{"row":28,"column":0},"end":{"row":28,"column":3},"action":"remove","lines":["   "]},{"start":{"row":27,"column":42},"end":{"row":28,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":23,"column":22},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":461},{"start":{"row":24,"column":0},"end":{"row":24,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":24,"column":3},"end":{"row":26,"column":19},"action":"insert","lines":["const net = new brain.recurrent.LSTMTimeStep();","","   net.train(data);"],"id":462}],[{"start":{"row":24,"column":50},"end":{"row":25,"column":0},"action":"remove","lines":["",""],"id":463}],[{"start":{"row":30,"column":0},"end":{"row":30,"column":3},"action":"insert","lines":["   "],"id":464}],[{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"insert","lines":["c"],"id":465},{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["o"]},{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"insert","lines":["n"]},{"start":{"row":30,"column":6},"end":{"row":30,"column":7},"action":"insert","lines":["s"]},{"start":{"row":30,"column":7},"end":{"row":30,"column":8},"action":"insert","lines":["o"]}],[{"start":{"row":30,"column":3},"end":{"row":30,"column":8},"action":"remove","lines":["conso"],"id":466},{"start":{"row":30,"column":3},"end":{"row":30,"column":10},"action":"insert","lines":["console"]}],[{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":["."],"id":467},{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["o"]}],[{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"remove","lines":["o"],"id":468}],[{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["l"],"id":469},{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["o"]},{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"insert","lines":["g"]}],[{"start":{"row":30,"column":14},"end":{"row":30,"column":16},"action":"insert","lines":["()"],"id":470}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"insert","lines":["n"],"id":471},{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["e"]},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["t"]},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["."]},{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["r"]},{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"insert","lines":["u"]},{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["n"]}],[{"start":{"row":30,"column":3},"end":{"row":30,"column":23},"action":"remove","lines":["console.log(net.run)"],"id":472},{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"insert","lines":["n"]},{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["e"]},{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"insert","lines":["t"]},{"start":{"row":30,"column":6},"end":{"row":30,"column":7},"action":"insert","lines":["."]},{"start":{"row":30,"column":7},"end":{"row":30,"column":8},"action":"insert","lines":["r"]},{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"insert","lines":["u"]},{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"insert","lines":["n"]}],[{"start":{"row":30,"column":10},"end":{"row":30,"column":12},"action":"insert","lines":["()"],"id":473}],[{"start":{"row":30,"column":11},"end":{"row":30,"column":13},"action":"insert","lines":["[]"],"id":474}],[{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["1"],"id":475},{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"insert","lines":["0"]},{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"insert","lines":[","]},{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"insert","lines":["2"]},{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["0"]}],[{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":[";"],"id":476}],[{"start":{"row":30,"column":20},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":477},{"start":{"row":31,"column":0},"end":{"row":31,"column":3},"action":"insert","lines":["   "]},{"start":{"row":31,"column":3},"end":{"row":31,"column":4},"action":"insert","lines":["c"]},{"start":{"row":31,"column":4},"end":{"row":31,"column":5},"action":"insert","lines":["o"]},{"start":{"row":31,"column":5},"end":{"row":31,"column":6},"action":"insert","lines":["n"]},{"start":{"row":31,"column":6},"end":{"row":31,"column":7},"action":"insert","lines":["s"]},{"start":{"row":31,"column":7},"end":{"row":31,"column":8},"action":"insert","lines":["o"]}],[{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"insert","lines":["c"],"id":478},{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["o"]},{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"insert","lines":["n"]},{"start":{"row":30,"column":6},"end":{"row":30,"column":7},"action":"insert","lines":["s"]},{"start":{"row":30,"column":7},"end":{"row":30,"column":8},"action":"insert","lines":["t"]}],[{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"insert","lines":[" "],"id":479},{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"insert","lines":["o"]},{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":["u"]},{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["p"]},{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["u"]}],[{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"remove","lines":["u"],"id":480},{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"remove","lines":["p"]}],[{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["t"],"id":481},{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["p"]},{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"insert","lines":["u"]},{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"insert","lines":["t"]}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":18},"action":"insert","lines":["   "],"id":482}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":18},"action":"remove","lines":["   "],"id":483}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"insert","lines":[" "],"id":484},{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["="]}],[{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":[" "],"id":485}],[{"start":{"row":31,"column":8},"end":{"row":31,"column":9},"action":"insert","lines":["l"],"id":486},{"start":{"row":31,"column":9},"end":{"row":31,"column":10},"action":"insert","lines":["e"]},{"start":{"row":31,"column":10},"end":{"row":31,"column":11},"action":"insert","lines":["."]},{"start":{"row":31,"column":11},"end":{"row":31,"column":12},"action":"insert","lines":["l"]},{"start":{"row":31,"column":12},"end":{"row":31,"column":13},"action":"insert","lines":["o"]},{"start":{"row":31,"column":13},"end":{"row":31,"column":14},"action":"insert","lines":["g"]}],[{"start":{"row":31,"column":14},"end":{"row":31,"column":16},"action":"insert","lines":["()"],"id":487}],[{"start":{"row":31,"column":14},"end":{"row":31,"column":16},"action":"remove","lines":["()"],"id":488}],[{"start":{"row":31,"column":14},"end":{"row":31,"column":16},"action":"insert","lines":["()"],"id":489}],[{"start":{"row":31,"column":15},"end":{"row":31,"column":16},"action":"insert","lines":["o"],"id":490},{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"insert","lines":["u"]},{"start":{"row":31,"column":17},"end":{"row":31,"column":18},"action":"insert","lines":["t"]},{"start":{"row":31,"column":18},"end":{"row":31,"column":19},"action":"insert","lines":["p"]},{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"insert","lines":["u"]}],[{"start":{"row":31,"column":15},"end":{"row":31,"column":20},"action":"remove","lines":["outpu"],"id":491},{"start":{"row":31,"column":15},"end":{"row":31,"column":21},"action":"insert","lines":["output"]}],[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"insert","lines":[";"],"id":492}],[{"start":{"row":30,"column":3},"end":{"row":30,"column":35},"action":"remove","lines":["const output = net.run([10,20]);"],"id":494},{"start":{"row":30,"column":3},"end":{"row":31,"column":0},"action":"insert","lines":["  var output = net.run([25.05, 25.2, 24.89, 25.17, 28.06, 28.51, 27.84, 27.38, 29.89, 30.1, 32.21, 30.48, 32.72, 32.43, 31.93, 31.21]);",""]}],[{"start":{"row":30,"column":138},"end":{"row":31,"column":0},"action":"remove","lines":["",""],"id":495}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"remove","lines":[" "],"id":496},{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"remove","lines":[" "]}],[{"start":{"row":30,"column":3},"end":{"row":30,"column":6},"action":"remove","lines":["var"],"id":497},{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"insert","lines":["c"]},{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["o"]},{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"insert","lines":["n"]},{"start":{"row":30,"column":6},"end":{"row":30,"column":7},"action":"insert","lines":["s"]},{"start":{"row":30,"column":7},"end":{"row":30,"column":8},"action":"insert","lines":["t"]}],[{"start":{"row":54,"column":0},"end":{"row":54,"column":1},"action":"insert","lines":["/"],"id":498},{"start":{"row":54,"column":1},"end":{"row":54,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":31,"column":23},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":499},{"start":{"row":32,"column":0},"end":{"row":32,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":32,"column":3},"end":{"row":32,"column":70},"action":"insert","lines":["document.getElementById(\"answer\").innerHTML = \"Said By: \" + output;"],"id":500}],[{"start":{"row":32,"column":28},"end":{"row":32,"column":34},"action":"remove","lines":["answer"],"id":501},{"start":{"row":32,"column":28},"end":{"row":32,"column":29},"action":"insert","lines":["s"]},{"start":{"row":32,"column":29},"end":{"row":32,"column":30},"action":"insert","lines":["t"]},{"start":{"row":32,"column":30},"end":{"row":32,"column":31},"action":"insert","lines":["o"]},{"start":{"row":32,"column":31},"end":{"row":32,"column":32},"action":"insert","lines":["c"]},{"start":{"row":32,"column":32},"end":{"row":32,"column":33},"action":"insert","lines":["k"]}],[{"start":{"row":32,"column":33},"end":{"row":32,"column":34},"action":"insert","lines":["-"],"id":502},{"start":{"row":32,"column":34},"end":{"row":32,"column":35},"action":"insert","lines":["v"]},{"start":{"row":32,"column":35},"end":{"row":32,"column":36},"action":"insert","lines":["a"]},{"start":{"row":32,"column":36},"end":{"row":32,"column":37},"action":"insert","lines":["l"]},{"start":{"row":32,"column":37},"end":{"row":32,"column":38},"action":"insert","lines":["u"]},{"start":{"row":32,"column":38},"end":{"row":32,"column":39},"action":"insert","lines":["e"]},{"start":{"row":32,"column":39},"end":{"row":32,"column":40},"action":"insert","lines":["1"]}],[{"start":{"row":32,"column":55},"end":{"row":32,"column":69},"action":"remove","lines":["\"Said By: \" + "],"id":503}],[{"start":{"row":30,"column":34},"end":{"row":30,"column":115},"action":"remove","lines":["25.2, 24.89, 25.17, 28.06, 28.51, 27.84, 27.38, 29.89, 30.1, 32.21, 30.48, 32.72,"],"id":505},{"start":{"row":30,"column":34},"end":{"row":30,"column":133},"action":"insert","lines":["202.4, 201.9, 22.29, 233.98, 55.26, 25.05, 25.2, 24.89, 100.17, 28.06, 3333.51, 1234.84, 123123.38,"]}],[{"start":{"row":30,"column":132},"end":{"row":30,"column":133},"action":"remove","lines":[","],"id":506},{"start":{"row":30,"column":131},"end":{"row":30,"column":132},"action":"remove","lines":["8"]},{"start":{"row":30,"column":130},"end":{"row":30,"column":131},"action":"remove","lines":["3"]},{"start":{"row":30,"column":129},"end":{"row":30,"column":130},"action":"remove","lines":["."]},{"start":{"row":30,"column":128},"end":{"row":30,"column":129},"action":"remove","lines":["3"]},{"start":{"row":30,"column":127},"end":{"row":30,"column":128},"action":"remove","lines":["2"]},{"start":{"row":30,"column":126},"end":{"row":30,"column":127},"action":"remove","lines":["1"]},{"start":{"row":30,"column":125},"end":{"row":30,"column":126},"action":"remove","lines":["3"]},{"start":{"row":30,"column":124},"end":{"row":30,"column":125},"action":"remove","lines":["2"]},{"start":{"row":30,"column":123},"end":{"row":30,"column":124},"action":"remove","lines":["1"]},{"start":{"row":30,"column":122},"end":{"row":30,"column":123},"action":"remove","lines":[" "]},{"start":{"row":30,"column":121},"end":{"row":30,"column":122},"action":"remove","lines":[","]},{"start":{"row":30,"column":120},"end":{"row":30,"column":121},"action":"remove","lines":["4"]},{"start":{"row":30,"column":119},"end":{"row":30,"column":120},"action":"remove","lines":["8"]},{"start":{"row":30,"column":118},"end":{"row":30,"column":119},"action":"remove","lines":["."]},{"start":{"row":30,"column":117},"end":{"row":30,"column":118},"action":"remove","lines":["4"]},{"start":{"row":30,"column":116},"end":{"row":30,"column":117},"action":"remove","lines":["3"]},{"start":{"row":30,"column":115},"end":{"row":30,"column":116},"action":"remove","lines":["2"]},{"start":{"row":30,"column":114},"end":{"row":30,"column":115},"action":"remove","lines":["1"]},{"start":{"row":30,"column":113},"end":{"row":30,"column":114},"action":"remove","lines":[" "]},{"start":{"row":30,"column":112},"end":{"row":30,"column":113},"action":"remove","lines":[","]},{"start":{"row":30,"column":111},"end":{"row":30,"column":112},"action":"remove","lines":["1"]},{"start":{"row":30,"column":110},"end":{"row":30,"column":111},"action":"remove","lines":["5"]},{"start":{"row":30,"column":109},"end":{"row":30,"column":110},"action":"remove","lines":["."]},{"start":{"row":30,"column":108},"end":{"row":30,"column":109},"action":"remove","lines":["3"]},{"start":{"row":30,"column":107},"end":{"row":30,"column":108},"action":"remove","lines":["3"]},{"start":{"row":30,"column":106},"end":{"row":30,"column":107},"action":"remove","lines":["3"]},{"start":{"row":30,"column":105},"end":{"row":30,"column":106},"action":"remove","lines":["3"]},{"start":{"row":30,"column":104},"end":{"row":30,"column":105},"action":"remove","lines":[" "]}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"remove","lines":["2"],"id":507}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"remove","lines":["5"],"id":508}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"insert","lines":["1"],"id":509}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"remove","lines":["1"],"id":510}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"insert","lines":["2"],"id":511},{"start":{"row":30,"column":28},"end":{"row":30,"column":29},"action":"insert","lines":["0"]},{"start":{"row":30,"column":29},"end":{"row":30,"column":30},"action":"insert","lines":["0"]}],[{"start":{"row":30,"column":26},"end":{"row":30,"column":126},"action":"remove","lines":["[200.05, 202.4, 201.9, 22.29, 233.98, 55.26, 25.05, 25.2, 24.89, 100.17, 28.06, 32.43, 31.93, 31.21]"],"id":512},{"start":{"row":30,"column":26},"end":{"row":30,"column":153},"action":"insert","lines":["[205.98, 202.4, 201.9, 232.29, 233.98, 535.26, 235.05, 235.2, 234.89, 100.17, 283.06, 13333.51, 12344.84, 123123.38, 153123.38]"]}],[{"start":{"row":30,"column":121},"end":{"row":30,"column":152},"action":"remove","lines":[" 12344.84, 123123.38, 153123.38"],"id":513}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":121},"action":"remove","lines":["205.98, 202.4, 201.9, 232.29, 233.98, 535.26, 235.05, 235.2, 234.89, 100.17, 283.06, 13333.51,"],"id":514},{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"insert","lines":["1"]},{"start":{"row":30,"column":28},"end":{"row":30,"column":29},"action":"insert","lines":[","]},{"start":{"row":30,"column":29},"end":{"row":30,"column":30},"action":"insert","lines":["2"]}],[{"start":{"row":30,"column":30},"end":{"row":30,"column":31},"action":"insert","lines":[","],"id":515}],[{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"insert","lines":[" "],"id":516},{"start":{"row":30,"column":32},"end":{"row":30,"column":33},"action":"insert","lines":["3"]}],[{"start":{"row":30,"column":31},"end":{"row":30,"column":33},"action":"remove","lines":[" 3"],"id":517}],[{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"insert","lines":[" "],"id":518},{"start":{"row":30,"column":32},"end":{"row":30,"column":33},"action":"insert","lines":[","]}],[{"start":{"row":30,"column":33},"end":{"row":30,"column":34},"action":"insert","lines":[" "],"id":519},{"start":{"row":30,"column":34},"end":{"row":30,"column":35},"action":"insert","lines":["8"]}],[{"start":{"row":30,"column":32},"end":{"row":30,"column":33},"action":"remove","lines":[","],"id":520},{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"remove","lines":[" "]}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":33},"action":"remove","lines":["1,2, 8"],"id":521},{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"insert","lines":["4"]},{"start":{"row":30,"column":28},"end":{"row":30,"column":29},"action":"insert","lines":[","]}],[{"start":{"row":30,"column":29},"end":{"row":30,"column":30},"action":"insert","lines":[" "],"id":522},{"start":{"row":30,"column":30},"end":{"row":30,"column":31},"action":"insert","lines":["1"]},{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"insert","lines":["5"]}],[{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"remove","lines":["5"],"id":523}],[{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"insert","lines":["6"],"id":524}],[{"start":{"row":30,"column":32},"end":{"row":30,"column":33},"action":"insert","lines":[" "],"id":525},{"start":{"row":30,"column":33},"end":{"row":30,"column":34},"action":"insert","lines":[","]}],[{"start":{"row":30,"column":34},"end":{"row":30,"column":35},"action":"insert","lines":[" "],"id":526},{"start":{"row":30,"column":35},"end":{"row":30,"column":36},"action":"insert","lines":["2"]},{"start":{"row":30,"column":36},"end":{"row":30,"column":37},"action":"insert","lines":["5"]},{"start":{"row":30,"column":37},"end":{"row":30,"column":38},"action":"insert","lines":["6"]}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":38},"action":"remove","lines":["4, 16 , 256"],"id":527},{"start":{"row":30,"column":27},"end":{"row":30,"column":47},"action":"insert","lines":["10, 100 ,1000 ,10000"]}],[{"start":{"row":30,"column":28},"end":{"row":30,"column":47},"action":"remove","lines":["0, 100 ,1000 ,10000"],"id":528},{"start":{"row":30,"column":28},"end":{"row":30,"column":29},"action":"insert","lines":[","]}],[{"start":{"row":30,"column":29},"end":{"row":30,"column":30},"action":"insert","lines":[" "],"id":529},{"start":{"row":30,"column":30},"end":{"row":30,"column":31},"action":"insert","lines":["2"]},{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"insert","lines":[","]}],[{"start":{"row":30,"column":32},"end":{"row":30,"column":33},"action":"insert","lines":[" "],"id":530},{"start":{"row":30,"column":33},"end":{"row":30,"column":34},"action":"insert","lines":["1"]},{"start":{"row":30,"column":34},"end":{"row":30,"column":35},"action":"insert","lines":[","]}],[{"start":{"row":30,"column":35},"end":{"row":30,"column":36},"action":"insert","lines":[" "],"id":531},{"start":{"row":30,"column":36},"end":{"row":30,"column":37},"action":"insert","lines":["2"]},{"start":{"row":30,"column":37},"end":{"row":30,"column":38},"action":"insert","lines":[","]}],[{"start":{"row":30,"column":38},"end":{"row":30,"column":39},"action":"insert","lines":[" "],"id":532},{"start":{"row":30,"column":39},"end":{"row":30,"column":40},"action":"insert","lines":["1"]}]]},"ace":{"folds":[],"scrolltop":300,"scrollleft":0,"selection":{"start":{"row":30,"column":26},"end":{"row":30,"column":41},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":26,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1565372997458,"hash":"25c4b599a12315219164e4dc67786a6c6d7ffd16"}