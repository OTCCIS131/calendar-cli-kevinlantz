var _ = require('lodash');

const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

const chalk = require('chalk');


let now = moment()
console.log(now.year())
let year = now.range('year')
for (let month of year.by('months')) {
    console.log(_.pad(month.format('MMMM'), 26, "-"))
    console.log('S   M   T   W   Th  F   S   ')

    let days = Array.from(month.range('month').by('days'))
        //console.log(moment.format('DD'))

    //console.log(month.format('MMMM'))
    //let months = Array.from(month.range('month').by('months'))
    //console.log(days)

    //  let s = " ";
    //     for (i = 1; i <= days.length; i++) {

    //         //   s += i + "  ";
    //         //let r = days.join()
    //         //str += i

    //         if (i % 7 == 0) {
    //             console.log(i + '\n')
    //                 // console.log(str)
    //         } else {
    //             console.log(i)
    //                 // console.log(str)

    //         }
    //     }
    //     //console.log(i)
    //     //console.log(days);

    // days.forEach(function(value, i) {
    //     console.log('%d: %s', i, value);

    // });

    // if (month.format('MMMM') == "December") {
    //     s = 10

    //     console.log(chalk.bgGreen(s))

    //     // console.log(chalk.bgGreen(s))
    // }
    // console.log(chalk.red(s))

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


    chunks()
    joined()
        //console.log(paddedDays + "")
    firstDay()
    console.log(_.chunk(paddedDays, 7))
    console.log(_.join(paddedDays, '~'))
    let monthRange = month.range('month')
    let fir = monthRange.start.day()

    console.log(fir)

    function firstDay() {

        if (month.format('MMMM') == "December") {
            paddedDays.unshift("             ")
        }

    }

    function chunks() {

        _.chunk(paddedDays, 7)
    }

    function joined() {
        _.join(paddedDays, '~')
            // let r = paddedDays.join()
            // console.log(r)
    }

    //  console.log(paddedDays + " ")
    //console.log(paddedDays)

}