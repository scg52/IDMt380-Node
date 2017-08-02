var WebSocketServer = require('ws').Server;
var http = require('http');
var express = require('express');

//Set root
var app = express();
app.use(express.static(__dirname + '/'));

//Set port. Will be set to 5000 on local and determined by remote host
var port = process.env.PORT || 5000;

var server = http.createServer(app);
server.listen(port);

console.log('http server listening on %d', port);

var wss = new WebSocketServer({server: server});
console.log('websocket server was created');
console.log('WebSockerServer is Up');

var connections = [];
var users = [];

wss.on('connection', function(ws) {
  connections.push(ws);
  console.log('user connected');

  ws.on('message', function(m) {

    var msg = JSON.parse(m);
    console.log(msg);

    if(msg.type == 'register'){
        users.push(msg.user);
        console.log(users);
    }else if (msg.type == 'loadAll'){
      msg.users = users;
    }

    if (msg.sendToAll){
        //send to all connections
        users.forEach(function(ws, index) {
            if(users.id == msg.user.id && user != msg.user){
              user[index] = msg.user;
            }
          });

          connections.forEach(function(ws, index) {
            ws.send(JSON.stringify(msg));
            console.log('msg sent to client');
          });
    }
    else{
        //send to sender only
        ws.send(JSON.stringify(msg));
    }

  }); //ws on message close

  ws.on('close', function() {
    
    console.log('user disconnected');

    var msg = {
      type: 'logoff',
      user: users[connections.indexOf(ws)]
    };

    //search the connections array for the current socket that is closign, 
    //use that index to find the user in the users array, 
    //this index number should be the same because they are both added in the same order
    
    users.splice(connections.indexOf(ws), 1);
    connections.splice(connections.indexOf(ws), 1);

    connections.forEach(function(connection, index) {
      connection.send(JSON.stringify(msg));
      console.log('msg sent to client');
    });
  });

});
