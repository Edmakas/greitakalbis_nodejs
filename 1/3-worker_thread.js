const http = require('http');
let cachedResult = 0;
const wt= require('worker_threads');

const server = http.createServer(function(request, response){
	switch(request.url){
		case '/':
			mainPage(request, response);			
			break;
		case '/calc':
			calcPage(request, response);
			break;
		default:
			response.writeHead(404);
			response.end('Page not found');
	}
});

server.listen(3000);

function mainPage(request, response){
	response.end(`main, result = ${cachedResult}`);
}

function calcPage(request, response){
	let worker = new wt.Worker('./calc.js');
	worker.on('message', value => {
		cachedResult = value;
		response.end('calculated!');
	})


}