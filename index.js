var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));


var articles = [];

app.get("/articles", function(req, res) {
	res.render("articles/index", {allArticles:articles});
})

app.get("/articles/new", function(req, res) {
	res.render("articles/new");
})

app.post("/articles", function(req, res) {
	console.log(req.body);
	articles.push(req.body);
	console.log(articles);
	res.redirect("/articles");
	// res.render("articles/thanks");
})


app.get("/articles/:id", function(req, res) {
	var local = {allArticles:articles[req.params.id]};
	res.render("articles/show", local);
})




app.listen(3000);

