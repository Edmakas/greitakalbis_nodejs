const http = require('http');
const clients = [];
const bets = [];

const server = http.createServer(function(request, response){
    switch(request.url){
        case '/':
            mainPage(request, response);
            break;
        case '/bet':
            betPage(request, response);
            break;
        case '/secret':
            secretPage(request, response);
            break;            
        default:
            response.writeHead(404);
            response.end('Page not found');
    }
});

server.listen(3000);

function mainPage(request, response){
    console.log('Prisijunge')
    clients.push({request, response});
    response.on('close', () => cleanClient(response));
}

function betPage(request, response){
    console.log('Prisijunge prie /bet')
    bets.push(Math.random());
    console.log(bets);
    sendBetsForAll();
    response.writeHead(200);
    response.end('Ecka: done')
}

function sendBetsForAll(){
    clients.forEach(client => client.response.end(JSON.stringify(bets)));
}

function cleanClient(response){
    let ind = clients.findIndex(client => client.response === response);

    if (ind !== -1){
      clients.splice(ind,1);
    }
}

function secretPage(request, response){
  response.write(JSON.stringify(clients.map(client => clients.request)));
  response.end('---Ecka----');
}