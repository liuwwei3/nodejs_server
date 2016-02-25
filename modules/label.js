var db=require('./db');

var settings = require('../settings');

exports.show = function( req, res, args){

    console.log(req.body);
    db.open( function( err, db){
            if (err){
            res.send("can not open mongodb");
            return;
            }

            db.collection('relate',  function(err, coll){
                console.log('wulawula');
                if(err){
                     res.send("error opening collection!");
                     return;
                }

                console.log('open coll relate OKOK!');
                str = req.body['data'];
                arr = str.split('\t');
                dict = new Array();
                rootquery = '';
                console.log(arr);
                var myDate = new Date();
                time = myDate.getTime(); 
                for (var x in arr){
                    console.log(arr[x]);
                    key = arr[x].split(':')[0].trim();
                    value = arr[x].split(':')[1].trim();
                    if (key == "__rootquery"){
                        rootquery = value;
                    }
                    else {
                        //dict.push({key:value});
                        dict.push({'query': key, 'label' : value, 'time': time });
                    }
                }
                console.log(dict);
                console.log(rootquery);
                for (var i in dict){
                    coll.update({'rootquery':rootquery}, {"$push":{"labels":dict[i]}});
                }
                res.send("标注成功！");
            });

    });

}
