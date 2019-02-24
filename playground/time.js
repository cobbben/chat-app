//Jan 1st 1970 00:00:00 am
const moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'year');
// console.log(date.format('MMM Do, YYYY '));

//9:22 AM

var sometime = moment().valueOf();
console.log(sometime);

var createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('LT'));
