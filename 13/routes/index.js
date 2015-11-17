var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Voice Recording Demo' });
});

/* GET voice recording page */
router.get('/voicerecord', function(req, res)
{
    res.render('record', {title : 'Record your voice'});
});

/* GET voice recording page */
router.get('/userinfo', function(req, res)
{
    res.render('userinfo', {title : 'User Details'});
});

/* POST to Add User Service */
router.post('/record_page', function(req, res)
{

    // Set our internal DB variable
    var db = req.db;
     // Set our collection
    var collection = db.get('voice');
    
    //User details: Session ID, Gender, Age, Accent, Sentence, path of saved WAV file
    var session = req.query.session_id;
    var gender = req.query.gender_id;
    var age = req.query.age_id;
    var accent = req.query.accent_id;
    var sentence= req.query.sentence_id;
    var path = 'audio/'+session+'.wav';

    //Write the audio file (req.body) to filesystem. Path specified by 'path'
    fs.writeFile(path, req.body, function(err)
    {
        if(err)
        {
            res.status(500).json();
        }
        else
        {    
            collection.insert(
            {   "session" : session,
                "gender": gender,
                "age" : age,
                "accent": accent,
                "sentence" : sentence,
                "path": path

            }, function (err, doc)
                {
                    if (err)
                    {
                        // If it failed, return error
                        res.send("There was a problem adding the information to the database.");
                    }
                    else
                    {
                        // And forward to success page
                        res.redirect('record');
                    }
                }           );
        
        }
    }
               );

    
});

module.exports = router;