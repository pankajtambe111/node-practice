
//-------- event start-------

/*
var events = require('events');

var myEve = new events.EventEmitter();

myEve.on('eve', function(msg){
    console.log(msg)
})

myEve.emit('eve', 'emited'); */

//-------- event end-------

// ------------ read-write file start -------

/*
var fs = require('fs');

fs.readFile('readme.txt', 'utf8', function(err, data){
    //console.log(data);
    fs.writeFile('writeMe.txt', 'this is pankaj tambe', function(err, result) {
        console.log(data)
        if(err) console.log('error', err);
      });
});

*/


//data stream
/*
var fs= require('fs');

var theReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var theWriteStream = fs.createWriteStream(__dirname + '/writeme.txt', 'utf8');

// theReadStream.on('data', function(chunk){
//     console.log('chunk received')
//     console.log(chunk);
// });

theReadStream.pipe(theWriteStream);
*/



//create Server
/*
var http = require('http');
var fs= require('fs');

var server = http.createServer( (req, res) =>{
    //console.log(req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var theReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
    theReadStream.pipe(res);
    //res.end('pankaj:- here you can pass data data that suppose to pass to client browser')
})

server.listen(3000, '127.0.0.1');
console.log('listenining 3000');
*/

//pass HTML in write stream

/*
var http= require('http');
var fs= require('fs');

var server= http.createServer((req, res)=>{
    console.log(req.url)
    if(req.url == '/api'){
        console.log('printing api')
    }
    res.writeHead(200, {'Content-type':'application/json'});
    var theReadStream = fs.createReadStream(__dirname + '/data.json', 'utf8');
    theReadStream.pipe(res)
})

server.listen(3000, '127.0.0.1');
console.log('port is listening');
*/

var express = require('express');

var app= express();

app.set('view engine','ejs')

app.get('/', function(req, res){
    res.send('home pg')
})

app.get('/about', function(req, res){
    res.send('About pg')
})


app.get('/profile/:name', function (req,res){
    res.render('profile',{person: req.params.name});
    console.log(req)
})

app.listen(3000)


