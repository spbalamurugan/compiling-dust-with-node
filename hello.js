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

var ipJson = {
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/hyper-schema",
    "title": "TerminalField",
    "name": "TerminalField",
    "description": "VT - TerminalFields - Specific to each Processor-Tender passed",
    "id": "gw://v1/schema/virtualterminal/TerminalField.json",
    "properties": {
        "fields": [
            {
                "id": "286",
                "name": "Start Date",
                "fdf_name": "CARDSTART",
                "lookup": "null",
                "defaultvalue": "",
                "mandatory": "false"
            },
            {
                "id": "285",
                "name": "Issue Number",
                "fdf_name": "CARDISSUE",
                "lookup": "null",
                "defaultvalue": "",
                "mandatory": "false"
            },
            {
                "id": "XXX",
                "name": "Currency",
                "fdf_name": "CURRENCY",
                "lookup": {
                    "currencies": [
                        {
                            "currency": "USD",
                            "currcode": "840"
                        },
                        {
                            "currency": "AUD",
                            "currcode": "AUD"
                        }
                    ]
                },
                "defaultvalue": "",
                "mandatory": "false"
            }
        ]
    }
};

var opJson = new Object;
var tempJson = new Object;
for (var name in ipJson) {
    if (ipJson.hasOwnProperty(name)) {
        console.log("this is (" + name + ") of ipJson and its value = " + ipJson[name]);
        if(name!='properties'){
        	opJson[name]=ipJson[name];
        }else
        {
        	tempJson[name]=ipJson[name];
        	
        }
    }
    else {
        console.log(name); // toString or something else
    }
}
var tmp = (tempJson);
console.log("temp json"+tmp);
var final = new Object;
for(var j in tmp){
	if(tmp.hasOwnProperty(j)){
		console.log("\n key is "+j+ " value ="+tmp[j]);
		if(typeof(tmp[j]=='Object')){
			var innerObj = tmp[j];
			console.log("re-assigining temp "+tmp);
			for(var i in innerObj){
				console.log("length = "+innerObj[i].length);
				for(len=0;len<innerObj[i].length;len++){
				console.log("again name is "+i+" valueee is ="+innerObj[i][len].id);
				
				final[innerObj[i][len].id] = innerObj[i][len];
			}
			}
		}
	}else
	{
		console.log(j);
	}
}

console.log("\n FINAL = "+JSON.stringify(final)+"\n");
opJson["properties"]=final;
for(var k in final){
	console.log("for "+k+ " in "+final[k]);
}
console.log("##### "+JSON.stringify(opJson));
dustfs.render('hello.dust',(jsonObj),function(err,out){
if(err) console.log('Error: '+err);
else console.log(out);
});
