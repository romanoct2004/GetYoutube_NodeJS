var express     = require("express");
var bodyParser  = require("body-parser");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./view")

app.listen(3000);

app.use(bodyParser.urlencoded({ extended : false }));
const ytdl = require('ytdl-core');

app.get("/", function(req, res){
    res.render('info');
});

app.post("/getLink", function(req, res){

    var txtID = req.body.txtIdYou

    video(txtID).then((data) => {
        //res.json(data);
        var urlLink = "";

        data.formats.forEach(function (element) {
            if (element.hasVideo == false && element.hasAudio == true) {
                urlLink = element.url;
                res.json({
                    "result": true,
                    "urlFile": urlLink
                });


                return;
                // res.send('/display');
                //res.redirect(307, '/display');
            }
        });
        
       

    }).catch((err) => {
        res.json({
            "result" : false,
            "message": err
        });
    });
});


app.get("/getfile/:id", function(req, res){

    video(req.params.id).then((data) => {
        //res.json(data);
        var urlLink = "";
        data.formats.forEach(function(element) {
            if (element.hasVideo == true && element.hasAudio == true){
                urlLink = element.url;
                res.json({
                    "result" : true,
                    "urlFile": urlLink 
                });
                return;
            }
        });
    }).catch((err) => {
        res.json({
            "result" : false,
            "message": err
        });
    });
});

let video = (id) => {
    return new Promise((resolve, reject) => {
        let info = ytdl.getInfo(id);
        resolve(info);
      
    });
}
