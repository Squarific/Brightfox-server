const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'database',
  user: 'root',
  password: 'pluginmods',
  database: 'pluginmods',
  multipleStatements: true
});

app.use(express.json());
app.use(cors())

app.use('/plugins', require('./routes/plugins/_')(pool));
app.use('/versions', require('./routes/versions/_')(pool));
app.use('/sources', express.static(path.join(__dirname, 'routes/versions/pluginsources')));

const PORT = 8655;
app.listen(PORT, '0.0.0.0', () => {
  console.log("Listening on " + PORT + "...");
});
