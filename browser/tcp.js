const tcp = require('net')

let conn = tcp.connect(56789, '192.168.31.223', function() {
  conn.write('hello');
  conn.on('data', function(data) {
    console.log(data.toString())
  })
})