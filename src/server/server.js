let express = require('express');
let path = require('path');
let cors = require('cors');
let bp = require('body-parser');

const app = express();
const root = __dirname;

app.use(cors());
app.use(bp.json());

app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.static(path.join(root, 'build')));

// app.get('*', (req, res) => {
//   console.log('served static');
//   res.sendFile(path.join(__dirname, './build/index.html'));
// });

app.listen(8000, function() {
  console.log("listening on port 8000");
});