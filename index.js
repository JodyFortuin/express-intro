const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

let express = require('express');
let app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

//app.get("/", function(req, res){
  //res.send("Bill Settings WebApp");
//});

let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});
