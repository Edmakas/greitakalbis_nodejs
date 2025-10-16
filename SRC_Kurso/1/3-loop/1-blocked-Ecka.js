
// Bandau pats taisyti

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
	let resFromjloop = 0
    for(let i = 1; i < 3; i++){
		resFromjloop += jloop(i);
	}
	cachedResult = resFromjloop;
	response.end('calculated!');
}

function jloop (i){
	let res = 0;	
	for(let j = 1; j < 10; j++){
		n = i % j;
		console.log("Liekana i: ", i)
		console.log("Liekana j: ", j)
		console.log("Liekana: ", n)
		let randomskaiciai = Math.random();
		console.log("randomskaiciai: ", randomskaiciai);
		res += n * (randomskaiciai > 0.5 ? 1 : -1);
		console.log('------------------------------------------------------------vidus j',j)
		console.log('vidus res',res)
	}
	console.log("Grazinu: ", res)
	return res;
}