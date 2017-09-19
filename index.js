var _ = require('lodash');

const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

const chalk = require('chalk');


let now = moment()
console.log(now.year())
let year = now.range('year')
for (let month of year.by('months')) {
    console.log(_.pad(month.format('MMMM'), 20, "-"))
    console.log('S  M  T  W  Th F  S   ')

    let days = Array.from(month.range('month').by('days'))

    let paddedDays = _.map(days, day => {

        let date = day.date()

        if (day.month() == 8 && day.date() == 10) {
            date = chalk.bgBlue(date)
        }

        if (day.month() == 6 && day.date() == 15) {
            date = chalk.yellow(date)
        }

        return _.padEnd(date, 2, '  ')
    })
    firstDay()

    function firstDay() {
        if (month.format('MMMM') == "February") {
            paddedDays.unshift("  ", "  ", "  ")
        }
        if (month.format('MMMM') == "March") {
            paddedDays.unshift("  ", "  ", "  ")
        }
        if (month.format('MMMM') == "April") {
            paddedDays.unshift("  ", "  ", "  ", "  ", "  ", "  ")

        }
        if (month.format('MMMM') == "May") {
            paddedDays.unshift("  ")
        }
        if (month.format('MMMM') == "June") {
            paddedDays.unshift("  ", "  ", "  ", "  ")
        }

        if (month.format('MMMM') == "July") {
            paddedDays.unshift("  ", "  ", "  ", "  ", "  ", "  ")
        }

        if (month.format('MMMM') == "August") {
            paddedDays.unshift("  ", "  ")
        }
        if (month.format('MMMM') == "September") {
            paddedDays.unshift("  ", "  ", "  ", "  ", "  ")
        }

        if (month.format('MMMM') == "November") {
            paddedDays.unshift('  ', "  ", "  ")
        }

        if (month.format('MMMM') == "December") {
            paddedDays.unshift('  ', "  ", "  ", "  ", "  ")
        }

    }

    let chunk = _.chunk(paddedDays, 7)

    chunk = chunk.forEach(week => {
        console.log(_.join(week, " "))
    });

}