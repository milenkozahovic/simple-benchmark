const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World!');
});

server.listen(process.env.SERVER_PORT, () => {
  console.log('Server started on port ' + process.env.SERVER_PORT);
});
