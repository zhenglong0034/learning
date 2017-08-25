var socketIo = require('socket.io')
var io;
var guestNumber = 1
var nickNames = {}
var namesUsed = []
var currentRoom = {}

exports.listen = function(server) {
  io = socketIo.listen(server)
  io.set('log level', 1)
  io.sockets.on('connection', function(socket) {
    guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed)
    joinRoom(socket, 'lobby')
    handleMessageBroadcasting(socket, nickNames)
    handleNameChangeAttempts(socket, nickNames, namesUsed)
    handleRoomJoining(socket)
    socket.on('rooms', function() {
      socket.emit('rooms', io.sockets.manager.rooms)
    })
    handleClientDisconnection(socket, nickNames, namesUsed)
  })
}

function assignGuestName(socket, guestNumber, nickNames, namesUsed) {
  var name = 'Guest' + guestNumber
  console.log(name)
  nickNames[socket.id] = name
  socket.emit('nameResult', {
    success: true,
    name: name
  })
  namesUsed.push(name)
  return guestNumber + 1
}

function joinRoom(socket, room) {
  socket.join(room)
  currentRoom[socket.id] = room
  socket.emit('joinResult', {room: room})
  socket.broadcast.to(room).emit('message', {
    text: nickNames[socket.id] + 'has joined' + room + '.'
  })
  var usersInRoom = io.sockets.clients(room)
  if (usersInRoom.length > 1) {
    var usersInRoomSummary = 'current in ' + room + ':'
    for (var index in usersInRoom) {
      var usersSocketId = usersInRoom[index].id
      if (usersSocketId !== socket.id) {
        if (index > 0) {
          usersInRoomSummary += ', '
        }
        usersInRoomSummary += nickNames[usersSocketId]
      }
    }
    usersInRoomSummary += '.'
    socket.emit('message', { text: usersInRoomSummary})
  }
}

// 更名请求
function handleNameChangeAttempts(socket, nickNames, namesUsed) {
  socket.on('nameAttempt', function(name) {
    if (name.indexOf('Guest') === 0) {
      socket.emit('nameResult', {
        success: false,
        message: 'Names cannot begin with Guest'
      })
    } else {
      if (namesUsed.indexOf(name) === -1) {
        var previousName = nickNames[socket.id]
        var previousNameIndex = namesUsed.indexOf(previousName)
        namesUsed.push(name)
        nickNames[socket.id] = name
        delete namesUsed[previousNameIndex]
        socket.emit('nameResult', {
          success: true,
          name: name
        })
        socket.broadcast.to(currentRoom[socket.id]).emit('message', {
          text: previousName + 'is now know as' + name + '.'
        })
      } else {
        socket.emit('nameResult', {
          success: false,
          message: 'that name is already in use'
        })
      }
    }
  })
}

// 发送聊天信息
function handleMessageBroadcasting(socket) {
  socket.on('message', function(message) {
    socket.broadcast.to(message.room).emit('message', {
      text: nickNames[socket.id] + ': ' + message.text
    })
  })
}

// 创建房间
function handleRoomJoining(socket) {
  socket.on('join', function(room) {
    socket.leave(currentRoom[socket.id])
    joinRoom(socket, room.newRoom)
  })
}

// 用户断开连接

function handleClientDisconnection(socket) {
  socket.on('disconnect', function() {
    var nameIndex = namesUsed.indexOf(nickNames[socket.id])
    delete namesUsed[nameIndex]
    delete nickNames[socket.id]
  })
}
