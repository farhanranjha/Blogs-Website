const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));
var myblogs = [];


app.get("/compose", function(req, res) {
    res.render("compose");
})

app.post("/", function(req, res) {
    myblogs.push(req.body.compose);
    res.redirect("/compose");
})

app.get("/contact", function(req, res) {
    const contacttext = "Contact me at franjha58@gmail.com";
    res.render("contact", { contacttext: contacttext });
})

app.get("/about", function(req, res) {
    const abouttext = "Hey i am a content writer";
    res.render("about", { abouttext: abouttext })
})

app.get("/", function(req, res) {
    res.render("home", { myblogs: myblogs });
})

app.listen(3000, function() {
    console.log("Server started");
})