var connect = require('connect'),
    build = require("../build.json");

connect.createServer(
    connect.static(__dirname)
).listen(build.port);

console.log('Starting server at port ' + build.port);