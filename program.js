// // HTTP JSON API SERVER
// var http = require('http')
// var url = require('url')
// http.createServer(function(inStream, outStream) {
// var result = '';
// var d = '';
// var urlObject = url.parse(inStream.url, true);
// if(urlObject.pathname === '/api/parsetime') {
//     result = urlObject.query.iso;
//     d = new Date(result);
//     result = {"hour": d.getHours(), "minute": d.getMinutes(), "second": d.getSeconds()};
// }
// else if (urlObject.pathname === '/api/unixtime') {
//     result = urlObject.query.iso;
//     d = new Date(result);
//     result = {"unixtime": d.getTime()};
// }
// if (result) {
//     outStream.writeHead(200, { 'Content-Type': 'application/json' });
//     outStream.end(JSON.stringify(result));
//     }
//     else {
//     outStream.writeHead(404);
//         outStream.end();
//     }
// }).listen(process.argv[2]);

// // HTTP UPPERCASER
// var map = require('through2-map')
// var http = require('http')
// http.createServer(function(inStream, outStream) {
//     if(inStream.method == 'POST') {
//         inStream.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//     })).pipe(outStream)
//     }
// }).listen(process.argv[2]);

// // HTTP FILE SERVER
// var http = require('http')
// var fs = require('fs')
// var server = http.createServer(function(req, res) {
//     var src = fs.createReadStream(process.argv[3]);
//     src.pipe(res);
// });
// server.listen(process.argv[2]);

// // TIME SERVER
// "2013-07-06 17:42"
//
//
//
// var net = require('net')
//
// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }
//
// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }
//
// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })
//
// server.listen(Number(process.argv[2]))

// // JUGGLING ASYNC
// // Exercise 9 of 13
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)
//
//       results[index] = data.toString()
//       count++
//
//       if (count == 3)
//         printResults()
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++)
//   httpGet(i)

// // HTTP COLLECT
// var http = require('http')
// var bl = require('bl')
//
// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })

// HTTP CLIENT
// var http = require('http');
// http.get(process.argv[2], function callback(response) {
//     response.on('data', function(data) {
//         console.log(data.toString())
//     })
// })

// // MAKE IT MODULAR
// require('./module.js')(process.argv[2], process.argv[3],
//   function(e, valid_files){
//     if(e) console.log(e)
//     else valid_files.forEach(function(file){ console.log(file) })
//   }
// )

// // FILTERED LS
// var fs = require('fs');
// // reads files listed in directory
// fs.readdir(process.argv[2], function (err, list) {
//     if(err) {
//         throw err;
//     }
//     for (var i = 0; i < list.length; i++) {
//         if(list[i].toString().indexOf("."  + process.argv[3]) !== -1) {
//             console.log(list[i].toString());
//         }
//     }
// });

// // MY FIRST ASYNC I/O!
// var fs = require('fs');
// fs.readFile(process.argv[2], function (err, data) {
//     if(err) {
//         throw err;
//     }
//     console.log(data.toString().split('\n').length - 1);
// });

// // MY FIRST I/O!
//load fs module
// var fs = require('fs')
//
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

// // BABY STEPS
// var p = process.argv.slice(2)
// var sum = 0
// for(var i = 0; i < p.length; i++) {
//   sum += Number(p[i])
// }
// console.log(sum)

// // HELLO WORLD
// console.log("HELLO WORLD");
