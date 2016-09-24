var fs = require('fs');
var express = require('express');
	// wait_list = require('./wait_list.js');
	// table = require('./table.js');
	var bodyParser = require('body-parser');

	var app = express();
	var PORT = 3000;

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

	app.get('/', function(req,res){
		fs.readFile("rest.html", function(err, data){
			  res.writeHead(200, {'Content-Type': 'text/html'});
			  res.end(data);
		});
	});
	app.get('/:host', function(req,res){ //using to switch between pages from frontend.
		var chosen = req.params.host;

		if(chosen == "/allRes") {
			fs.readFile("allRes.html", function(err, data){
			  res.writeHead(200, {'Content-Type': 'text/html'});
			  res.end(data);
			});
		} 
		else if(chosen == "/mainRes"){
			fs.readFile("makeRes.html", function(err, data){
			  res.writeHead(200, {'Content-Type': 'text/html'});
			  res.end(data);
			});
		}
	});

	app.get('/api/:host?', function(req,res){
		var chosen req.params.host;

		 if (chosen) {
        console.log(chosen);

        for (var i = 0; i < host.length; i++) {
            if (chosen === host[i].routeName) {
                res.json(host[i]);
                return;
            }
        }

        res.send('No character found');
	    } else {
	        res.json(host);
	    }
	});

	app.post('/api/new', function (req, res) {
    var newGuest = req.body;
    newGuest.uniqueID.replace(/\s+/g, '').toLowerCase();
    
 
	    console.log(newGuest);

	    host.push(newGuest);

	    res.json(newGuest);

	});
	
	app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
	});