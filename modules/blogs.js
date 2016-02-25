var db = require('./db');

var settings = require('../settings');

exports.show = function(req, res, args){

   db.open(function(err, db){
      if(err){
         res.send("error opening dbs!")
         return;
      }
      
      console.log(req.query);
      if ( !("rootquery" in req.query )){
         var data={"flag": false};
         res.render("blogs", {data:data, args: args});
         return;
      }
      
      db.collection('relate', function(err, coll){
         if(err){
            res.send("error opening collection!");
            return;
         }
         console.log('open coll relate OK!');

         coll.findOne({"rootquery": req.query['rootquery']}, function(err, mdata)
         {
            if(mdata){
               mdata['flag'] = true;
               res.render('blogs', {data: mdata, args: args});
            }
            else{
               mdata={"flag":true, "rootquery": req.query['rootquery'], "related":[]}
               res.render('blogs', {data: mdata, args: args});
            }
         });
      });
      
   });
}
