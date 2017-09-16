var _ = require('lodash');

const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

const chalk = require('chalk');


let now = moment()
console.log(now.year())
let year = now.range('year')
for (let month of year.by('months')) {
    // console.log(_.pad(month.format('MMMM'), 26, "-"))
    // console.log('S   M   T   W   Th  F   S   ')
    console.log(_.pad(month.format('MMMM'), 47, "-"))

    console.log('     S     M     T      W    Th    F     S   ')

    let days = Array.from(month.range('month').by('days'))

    //  let s = " ";
    //     for (i = 1; i <= days.length; i++) {

    //         //   s += i + "  ";
    //         //let r = days.join()
    //         //str += i
    //  console.log(Date.format(''));

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
    chunks()


    joined()
        //console.log(paddedDays + "")


    console.log(_.chunk(paddedDays, 7))
    console.log(_.join(paddedDays, ' '))

    function firstDay() {
        if (month.format('MMMM') == "February") {
            //paddedDays.unshift("             ")
            paddedDays.unshift("  ", "  ", "  ")
        }
        if (month.format('MMMM') == "March") {
            //paddedDays.unshift("             ")
            paddedDays.unshift("  ", "  ", "  ")
        }
        if (month.format('MMMM') == "April") {
            //paddedDays.unshift("             ")
            paddedDays.unshift("  ", "  ", "  ", "  ", "  ", "  ")
        }
        if (month.format('MMMM') == "May") {
            //paddedDays.unshift("             ")
            paddedDays.unshift("  ")
        }
        if (month.format('MMMM') == "June") {
            //paddedDays.unshift("             ")
            paddedDays.unshift("  ", "  ", "  ", "  ")
        }

        if (month.format('MMMM') == "July") {
            //paddedDays.unshift("             ")
            paddedDays.unshift("  ", "  ", "  ", "  ", "  ", "  ")
        }

        if (month.format('MMMM') == "August") {
            //paddedDays.unshift("             ")
            paddedDays.unshift(" ", "  ")
        }
        if (month.format('MMMM') == "September") {
            //paddedDays.unshift("             ")
            paddedDays.unshift(" ", "  ", "  ", "  ", "  ")
        }

        if (month.format('MMMM') == "November") {
            //paddedDays.unshift("             ")
            paddedDays.unshift('  ', "  ", "  ")
        }

        if (month.format('MMMM') == "December") {
            //paddedDays.unshift("             ")
            paddedDays.unshift('  ', "  ", "  ", "  ", "  ")
        }

    }

    function chunks() {
        _.chunk(paddedDays, 7)

    }

    function joined() {
        _.join(paddedDays, ' ')
            // let r = paddedDays.join()
            // console.log(r)
    }

    //  console.log(paddedDays + " ")
    // console.log(paddedDays)
}