// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/<name-of-app>'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);


const express = require('express');
const http = require('http');
const app = express();

// Set name of directory where angular distribution files are stored
const dist = 'dist';

// Set port
const port = process.env.PORT || 8080;

// Serve static assets
app.get('*.*', express.static(dist, { maxAge: '1y' }));

// Serve application paths
app.all('*', function (req, res) {
  res.status(200).sendFile(`/`, { root: dist });
});

// Create server to listen for connections
const server = http.createServer(app);
server.listen(port, () => console.log("Node Express server for " + app.name + " listening on port " + port));