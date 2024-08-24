const cron = require("node-cron")

// Every second
cron.schedule("* * * * * *", () => {
    console.log("Executed every second")
})

// Every minute
cron.schedule("* * * * *", () => {
    console.log("Executed every minute")
})

// Every hour
cron.schedule("0 * * * *", () => {
    console.log("Executed every hour")
})

// Every day at midnight (00:00)
cron.schedule("0 0 * * *", () => {
    console.log("Executed every day at midnight")
})

// Every month at midnight on the 1st day of the month
cron.schedule("0 0 1 * *", () => {
    console.log("Executed on the 1st day of every month at midnight")
})

// Every year on January 1st at midnight
cron.schedule("0 0 1 1 *", () => {
    console.log("Executed every year on January 1st at midnight")
})

// Every April at midnight on the 1st day of the month
cron.schedule("0 0 1 4 *", () => {
    console.log("Executed on the 1st day of April at midnight")
})

// Every April 12th at midnight
cron.schedule("0 0 12 4 *", () => {
    console.log("Executed on April 12th at midnight")
})

// Every Monday at 9:00 AM
cron.schedule("0 9 * * 1", () => {
    console.log("Executed every Monday at 9:00 AM")
})

// Every weekday (Monday to Friday) at 6:30 PM
cron.schedule("30 18 * * 1-5", () => {
    console.log("Executed every weekday at 6:30 PM")
})

// Every 15 minutes
cron.schedule("*/15 * * * *", () => {
    console.log("Executed every 15 minutes")
})

// Every 5 minutes between 9:00 AM and 5:00 PM on weekdays
cron.schedule("*/5 9-17 * * 1-5", () => {
    console.log(
        "Executed every 5 minutes between 9:00 AM and 5:00 PM on weekdays"
    )
})

// // Special Shorthand Strings

// @reboot - Runs once, at startup
// cron.schedule("@reboot", () => {
//     console.log("Executed once at startup")
// })

// // @yearly or @annually - Runs once a year, at midnight on January 1st
// cron.schedule("@yearly", () => {
//     console.log("Executed yearly on January 1st at midnight")
// })

// // @monthly - Runs once a month, at midnight on the 1st day of the month
// cron.schedule("@monthly", () => {
//     console.log("Executed monthly on the 1st day at midnight")
// })

// // @weekly - Runs once a week, at midnight on Sunday
// cron.schedule("@weekly", () => {
//     console.log("Executed weekly on Sunday at midnight")
// })

// // @daily or @midnight - Runs once a day, at midnight
// cron.schedule("@daily", () => {
//     console.log("Executed daily at midnight")
// })

// // @hourly - Runs once an hour, at the beginning of the hour
// cron.schedule("@hourly", () => {
//     console.log("Executed hourly at the beginning of the hour")
// })
