var _ = require('lodash');

const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

const chalk = require('chalk');

let year = moment().range("year");



_.forEach(Array.from(year.by('months')), month => {
    console.log(_.pad(month.format('MMMM'), 26, ' '))
    console.log('S   M   T   W   Th  F   S   ')

    let monthRange = month.range('month')
    let firstDay = monthRange.start.day()
        //let lastDay = monthRange.end.day()


    // console.log(firstDay + '     ' + lastDay)
    console.log(firstDay);

})