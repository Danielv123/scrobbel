const http = require('http');
const fs = require('fs');

const config = require('./config');

const server = http.createServer((request,response)=>{
	let url = request.url.split('/');
	console.log(url);
	if(url[0] == 'games' && url.length >= 2){
		fs.access('lib/'+url[1], err=>{
			
			if(!err) require('lib/'+url[1]).handleRequests(err, url.splice(1,999), request, response);
		})
	}
	response.end('fine');
})

server.listen(config.port, (err) => {  
	if(err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${config.port}`)
})
