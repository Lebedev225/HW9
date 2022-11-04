var moment = require('moment'); // require
moment().format(); 

console.log(moment().format("dddd, MMMM Do YYYY"))
console.log(moment([1976, 10, 26]).toNow(true))
console.log(moment([1976, 10, 26]).format("dddd, MMMM Do YYYY"))
