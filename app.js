const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

const db = require("./models");
db.sequelize.sync()


const port = process.env.PORT;


app.get('/', (req, res) => {
    res.send('hello world');
});

require("./routes/user.js")(app);


app.listen(port, ()=>{
    console.log(`listening at port http://localhost${port}`)
});