const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
const path = require('path');
var cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.get('/api/users/list', async (req, res) => {
    setTimeout(function () {
        let rawdata = fs.readFileSync('./user.json');
        let users = JSON.parse(rawdata);
        console.log(users);
        res.setHeader('Content-Type', 'application/json');
        res.send(users);
    },2000);
});

// function add(data) {
//     const addProduct = [data, ...products]
//     return fs.writeFileSync(
//         "./src/api/user.json",
//         JSON.stringify(addProduct)
//     )
// }




app.listen(port, () => console.log(`Listening on port ${port}`));


// module.exports = {
//     add,
// }
