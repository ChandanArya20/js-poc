const os = require('os')

console.log(os.cpus().length);

console.log(`Total Memory: ${os.totalmem()} bytes`);

console.log(`Free Memory: ${os.freemem()} bytes`);

console.log(`Hostname: ${os.hostname()}`);

console.log(`Platform: ${os.platform()}`);

console.log(`OS Version: ${os.release()}`);

console.log(os.networkInterfaces());

console.log(`CPU Architecture: ${os.arch()}`);
