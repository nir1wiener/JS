// my_http = require("http");
// my_http.createServer(function(request,response){
//   console.log(request);
//   response.writeHeader(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8080);
// console.log("Server Running on 8080");
//

var async = require("async");
const readline = require('readline');

//
// async.parallel([function (callback) {
//
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
//     console.log("one");
//     setTimeout(function() {
//         console.log("ddd");
//     }, 2000);
//     console.log("sss");
//     callback();
// }, function (callback) {
//     console.log("two");
//     callback();
// }], function (err, result) {
//     console.log("finished")
// }

// var k  = function () {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
//     rl.question("dd",function (m) {
//         console.log(m);
//         rl.close();
//     });
//
//     console.log("one");
//
//     console.log("sss");
// }
//
// var l  = function () {
//     console.log("two");
//
// }
// k();
// l();