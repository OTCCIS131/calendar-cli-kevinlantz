var chunk = require('lodash');

const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

const chalk = require('chalk');

let year = moment().range("year");

// _.forEach(Array.from(year.by("months")), month => {
//             console.log(_.pad(month.format("mmmm"));

//         }