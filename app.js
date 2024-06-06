const express = require('express');
const app = express();
const routesStudent = require('./routes/route')

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = 5000;

app.use('/api/student',routesStudent)

app.listen(PORT , () => {
	console.log("server running...", PORT )
})