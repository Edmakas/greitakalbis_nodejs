
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
	let i = 0;
	let res = 0;
    

	function iloop(){
		if(i < 20000){
			res += jloop(i);
			i++;
			// setTimeout(iloop,0 )
			setImmediate(iloop);
			console.log('Rezultatas iloop =========================');
		} else {
			cachedResult = res;
			response.end('calculated!');
		}
	}
    
	iloop();
}

function jloop (i){
	let res = 0;	
	for(let j = 1; j < 20000; j++){
		n = i % j;
		// console.log("Parametras i: ", i)
		// console.log("For counteris j: ", j)
		// console.log("Liekana: ", n)
		let randomskaiciai = Math.random();
		// console.log("randomskaiciai: ", randomskaiciai);
		res += n * (randomskaiciai > 0.5 ? 1 : -1);		
	}
	return res;
}