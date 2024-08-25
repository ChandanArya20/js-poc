const cron = require("node-cron")

// Every minute
cron.schedule("* * * * *", () => console.log("Executed every minute"))