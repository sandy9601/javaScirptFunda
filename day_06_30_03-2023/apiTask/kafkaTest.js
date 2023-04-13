//  sending message recieving message


// function senMessage(){

// const sendingMessage= "hi from sendMessage"


// return  receiveMessage(message)

// }

// function receiveMessage(message){
//     console.log(`message recived ${message}`)
// }

// senMessage()
// Import the necessary modules
const net = require('net');

// Create a server
const server = net.createServer(socket => {
  // When a client connects, log a message to the console
  console.log('Client connected');

  // Send a message to the client
  socket.write('Hello client!\n');

  // When the client sends data, log it to the console
  socket.on('data', data => {
    console.log(`Received data from client: ${data}`);

    // Send a response to the client
    socket.write('Thank you for your message!\n');
  });

  // When the client disconnects, log a message to the console
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
