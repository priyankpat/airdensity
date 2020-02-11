const express = require('express');
const app = express();
var path = require('path');
//These are like imports

//Tell our Express Server What File Directory to use
app.use(express.static(__dirname + '/dist/angular-density-altitude'));

//Tell Our Express Server What Port to listen on
app.listen(process.env.PORT || 8090); //localhost/8090 if it fails

//Start Angular App via index file
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/angular-density-altitude/index.html'));
})

console.log('Console listening on port 8090');