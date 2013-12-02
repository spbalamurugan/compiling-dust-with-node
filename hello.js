var dustfs = require('dustfs');
dustfs.dirs('./dust');
var jsonObj = {
				"name1":"vinayagar",
				"exists":true,
				"items":"shoes",
				"names":[{"name":"reebok"},{"name":"nike"},{"name":"woodlands"}]
};
console.log(typeof(jsonObj));
//console.log(JSON.stringify(jsonObj));
console.log("is", jsonObj.exists);
dustfs.render('hello.dust',(jsonObj),function(err,out){
if(err) console.log('Error: '+err);
else console.log(out);
});