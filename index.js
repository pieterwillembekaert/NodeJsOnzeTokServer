const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//app.use(express.static('contents'))
app.use(express.static(__dirname + '/public'));
//app.get('/', (req, res) => res.send('Hello Worlhd!'));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.listen(port, () => console.log("Example app listening on port!"));