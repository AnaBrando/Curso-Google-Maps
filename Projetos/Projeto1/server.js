const express = require('express')
const app = express()
const port = 3000

var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));
});
app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));

app.listen(port, () => {
  console.log(__dirname);
  console.log(`Example app listening at http://localhost:${port}`)
})