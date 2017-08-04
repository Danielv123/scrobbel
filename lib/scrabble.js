const export = require('export.js');

function log(foo){
	console.log('Scrabble: '+foo);
}

// Accepts a path and request handler. Using this, it can return whatever it needs for showing a game.
function handleRequests(err, path, request, response){
	log(path);
}

export(handleRequests, module.exports);
