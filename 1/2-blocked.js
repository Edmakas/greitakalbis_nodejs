const http = require('http');
let cachedResult = 0;

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
	let res = 0;

	for(let i = 1; i < 40000; i++){
		for(let j = 1; j < 40000; j++){
			let n = i % j;
			res += n * (Math.random() > 0.5 ? 1 : -1);
		}
	}

	cachedResult = res;
	response.end('calculated!');
}