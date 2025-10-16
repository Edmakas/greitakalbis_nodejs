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
	let res	= 0;
	let	i = 1;
	
	function iLoop(){
		if (i < 20) {
			console.log("F-ja iLoop")
			res +=jLoop(i);
			i++;

			// setTimeout(iLoop,0)
			setImmediate(iLoop);
		} else {
			// console.log('Funkcija iLoop 2');
			cachedResult = res;
			response.end('calculated!');
		}
	}
	
	iLoop();

}

function jLoop(i){

	let res = 0;
	console.log("F-ja jLoop 1")
	for(let j = 1; j < 20; j++){
		console.log("F-ja jLoop 2")
		let n = i % j;
		res += n * (Math.random() > 0.5 ? 1 : -1);
	}
	console.log(res);
	return res;
}
