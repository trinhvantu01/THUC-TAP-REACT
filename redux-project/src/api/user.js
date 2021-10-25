const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
const path = require('path');
var cors = require ('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
 
app.get('/api/helo',(req,res)=>{
    res.send ({ express: 'Helo Express'});

});

app.get('/api/users/list',async (req,res)=>{
      setTimeout(function(){
          let rawdata = fs.readFileSync('./user.js');
          let users = JSON.parse(rawdata);
          res.setHeader('Content-Type','application/json');
          res.send(users);

      },3000);
});

app.listen(port,()=> console.log(`Listening on post ${port}`));