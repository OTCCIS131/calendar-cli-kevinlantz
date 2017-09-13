var _ = require('lodash');

const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

const chalk = require('chalk');

// let year = moment().range("year");



// _.forEach(Array.from(year.by('months')), month => {
//     console.log(_.pad(month.format('MMMM'), 26, ' '))
//     console.log('S   M   T   W   Th  F   S   ')

//     let monthRange = month.range('month')
//     let firstDay = monthRange.start.day()
//         //let lastDay = monthRange.end.day()


//     // console.log(firstDay + '     ' + lastDay)
//     console.log(firstDay);


let now = moment()
console.log(now.year())
let year = now.range('year')
for (let month of year.by('months')) {
    console.log(_.pad(month.format('MMMM'), 26, "-"))
    console.log('S   M   T   W   Th  F   S   ')

    let days = Array.from(month.range('month').by('days'))
    let paddedDays = _.map(days, day => {

        let date = day.date()
        if (day.month() == 9 && day.date() == 10) {
            date = chalk.red(date)

        }
        return _.padEnd(date, 2, ' ')


        // console.log(day)
    })
    console.log(paddedDays)

}

//Highlight your bd
//calculate # of blanks
// add too space blanks
// chunk(7) = [[],[],[]]
// .map (_.join(week, ''))