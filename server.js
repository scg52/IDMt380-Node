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

var io = require('socket.io')(server);
console.log('socket.io server was created');
console.log('Server is Up');

var connections = [];
var users = [];
var flowers = [];

io.sockets.on('connection', function(socket) {
  connections.push(socket);
  console.log('user connected');

  socket.on('loadAll', function(user){
    socket.emit('loadAll', users, flowers);
    users.push(user);
    socket.emit('register', user);
    socket.broadcast.emit('register', user);
  });

  socket.on('genFlower', function(flower) {
    flowers.push(flower);
    socket.broadcast.emit('genFlower', flower);
  });

  socket.on('destroyFlower', function(fId, user) {
    flowers.splice(flowers.indexOf(fid), 1);
    socket.broadcast.emit('destroyFlower', fId, user);
  });

  socket.on('fishAnim', function(user, anim) {
    if(anim == 'circle'){
      socket.broadcast.emit('circleAnim', user);
    }else if(anim == 'zigzag'){
      socket.broadcast.emit('zigzagAnim', user);
    }else{
      socket.broadcast.emit('fig8Anim', user);
    }
  });

  socket.on('flowerMove', function(fId, x, y) {
    socket.broadcast.emit('flowerMove', fId, x, y);
  });

  socket.on('fishMove', function(id, x, y) {
    socket.broadcast.emit('fishMove', id, x, y);
  });

  //       users.forEach(function(ws, index) {
  //           if(users.id == msg.user.id && user != msg.user){
  //             user[index] = msg.user;
  //           }
  //       });


  socket.on('disconnect', function() {
    
    console.log('user disconnected');

    socket.broadcast.emit('logOff', users[connections.indexOf(socket)]);
    
    users.splice(connections.indexOf(socket), 1);
    connections.splice(connections.indexOf(socket), 1);

  });

});
