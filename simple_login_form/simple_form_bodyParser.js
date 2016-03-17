//this simply gets user login data and displays it on localhost:3000(whatever) as json format 

var bodyParser = require('body-parser');



//------login---POST-----
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/process_post', urlencodedParser, function (req, res) {

   // Prepare output in JSON format
   response = {
       user:req.body.input_1,
       pass:req.body.input_2
   };
   console.log(response);
   res.end(JSON.stringify(response));
})


