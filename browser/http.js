const net = require('net');
const port = 8080;
let server = net.createServer(function(conn) {
  console.log('recved a client');
  conn.on('data', data => {
    console.log(data.toString())
  })
  conn.write('HTTP/1.1 200 Ok\r\n');
  conn.write('Date: 2017/06/12\r\n');
  //conn.write('\r\n');
  conn.write('<h1>Hello World!</h1>');
  conn.write((new Date()).toString())
  conn.end();
})

server.on('error', it => it);

server.listen(port, function(){
  console.log(`listening on port ${port}...`)
})