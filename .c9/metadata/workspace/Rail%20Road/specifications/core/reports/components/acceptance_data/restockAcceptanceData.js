{"filter":false,"title":"restockAcceptanceData.js","tooltip":"/Rail%20Road/specifications/core/reports/components/acceptance_data/restockAcceptanceData.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":640,"column":0},"end":{"row":678,"column":48},"action":"remove","lines":["<<<<<<< HEAD","=======","let wrappedListings = [];","self.allListings.forEach(l => {","        let wrap = l;","        wrap._doc = l;","        wrappedListings.push(wrap);","});","","self.allListings = wrappedListings;","","let wrappedFBA = [];","self.manageFBA.forEach(l => {","        let wrap = {};","        wrap._doc = l;","        wrappedFBA.push(wrap);","});","","self.manageFBA = wrappedFBA;","","let wrappedOrders = [];","self.orders.forEach(l => {","        let wrap = {};","        wrap._doc = l;","        wrappedOrders.push(wrap);","});","","self.orders = wrappedOrders;","","let wrappedDailyInventory = [];","self.dailyInventory.forEach(l => {","        let wrap = {};","        wrap._id = l;","        wrappedDailyInventory.push(wrap);","});","","self.dailyInventory = wrappedDailyInventory;","",">>>>>>> 2f70f64e508c84dc6402472937cc5ee2618a013c"],"id":2},{"start":{"row":640,"column":0},"end":{"row":675,"column":0},"action":"insert","lines":["let wrappedListings = [];","self.allListings.forEach(l => {","        let wrap = l;","        wrap._doc = l;","        wrappedListings.push(wrap);","});","","self.allListings = wrappedListings;","","let wrappedFBA = [];","self.manageFBA.forEach(l => {","        let wrap = {};","        wrap._doc = l;","        wrappedFBA.push(wrap);","});","","self.manageFBA = wrappedFBA;","","let wrappedOrders = [];","self.orders.forEach(l => {","        let wrap = {};","        wrap._doc = l;","        wrappedOrders.push(wrap);","});","","self.orders = wrappedOrders;","","let wrappedDailyInventory = [];","self.dailyInventory.forEach(l => {","        let wrap = {};","        wrap._id = l;","        wrappedDailyInventory.push(wrap);","});","","self.dailyInventory = wrappedDailyInventory;",""]}]]},"ace":{"folds":[],"scrolltop":10674.765625,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":605,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1558473339497,"hash":"43fbe67c5633eab83840f6478077db9c829e38a1"}