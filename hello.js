var dustfs = require('dustfs');
dustfs.dirs('./dust');
var jsonObj = {
				"Users":[{"name":"Developer",
				"experience":12,
				"passport":true,
				"skills":[{"name":"Problem Solving"},{"name":"Algorithms"},{"name":"enthusiasm"}]
},
{"name":"Manager",
				"experience":10,
				"passport":false,
				"skills":[{"name":"Problem Analysis"},{"name":"communication"},{"name":"Orator"}]
},
{"name":"Architect",
				"experience":12,
				"passport":true,
				"skills":[{"name":"Design"},{"name":"Develop"},{"name":"Research"}]
}]
};
// Create obj using an object literal
var obj = {key: 'value'};

// Convert to text using JSON.stringify
var text = JSON.stringify(obj);

// Show the value of text
console.log("stringify value = "+ text ); // {"key":"value"}
console.log(typeof(text));
console.log(typeof(jsonObj));
console.log(JSON.stringify(jsonObj));
console.log(typeof(jsonObj));
console.log("Code developer skills are ", jsonObj);
dustfs.render('hello.dust',(jsonObj),function(err,out){
if(err) console.log('Error: '+err);
else console.log(out);
});
