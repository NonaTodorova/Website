
const MongoClient = require('mongodb').MongoClient; //npm install mongodb@2.2.32
const url = "mongodb://localhost:27017/users";
const express = require('express'); //npm install express
const session = require('express-session'); //npm install express-session
const bodyParser = require('body-parser'); //npm install body-parser
const app = express();
const Quagga = require('quagga').default;


app.use(session({secret : "example"}));


    app.use(bodyParser.urlencoded({extended:true}))


// set the view engine to ejs


  app.set('view engine', 'ejs');

  app.use(express.static('public'));


//renders

  app.get('/', function(req,res){
    //if(!req.session.loggedin){res.redirect('/');return;}

    res.render('pages/home');
  } )

  app.get('/fridge',function(req,res){
    res.render('pages/fridge');
  })

  app.get('/login',function(req,res){
    res.render('pages/login');

  })

  app.get('/profilePage',function(req,res){
    if(!req.session.loggedin){res.redirect('/login');return;}

      //var uname = req.query.username;

      db.collection('people').findOne({
        "email": req.session.user.email
      }, function(err, result) {
        if (err) throw err;

        res.render('pages/profilePage', {
          user: result
        })
      });

  })

  app.get('/register',function(req,res){
    res.render('pages/register');
  })

// declaring database
  var db;

  MongoClient.connect(url, function(err, database){
    if(err) throw err;
    db = database;
    app.listen(8080);
    console.log("listening");
  });



  app.get('/all', function(req, res) {
      db.collection('users').find().toArray(function(err, result) {
          if (err) throw err;
            var output = "<h1>All the users</h1>";
              for (var i = 0; i < result.length; i++) {
                  output += "<div>"
                    output += "<h3>" + result[i].name + "</h3>"
                      output += "<p>" + result[i].quote + "</p>"
                        output += "</div>"
                        }
                          res.send(output);
                          });
                        });


//adding a user to the database

app.post('/addUser', function (req, res) {

//if(!req.session.loggedin){res.redirect('/login');return;}

var person = {
  "email" : req.body.email,
  "password": req.body.password,
  "name" : req.body.name,
  "items":{}
}

db.collection("people").save(person, function(err,result){
  if(err) throw err;
  res.redirect("/login")
})

});

//log out

app.get('/logout', function(req, res) {
  req.session.loggedin = false;
  req.session.destroy();
  res.redirect('/');
});

//login
//sessions



app.post('/loggingIn', function(req,res){
  console.log(JSON.stringify(req.body))
  var userName = req.body.email;
  var passw = req.body.password;

  db.collection('people').findOne({"email":userName},function(err,result){
    if (err) throw err;
    if (!result){res.redirect('/login');return}
    if(result.password == passw) {
      req.session.loggedin = true;
      req.session.user = result;
      res.redirect('/profilePage')
  }
    else{res.redirect('/login')}
  });
});
