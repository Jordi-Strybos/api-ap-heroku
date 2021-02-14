const express = require('express');
const app = express();
var cors = require('cors');

var originsWhitelist = ['https://dreamy-spence-4b3a09.netlify.app/'];

var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors());

app.get('/', (req, res) => res.send('I modified this API!'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
