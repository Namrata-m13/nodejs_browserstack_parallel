var request = require('request');
var assert=require('assert');
var user = 'smith183';
var key = 'r7BYYpNcTYWKmj4Pz1xA';
var obj="";
var name = "";
var limit="";
var options = {
    url: 'https://api.browserstack.com/automate/plan.json',
    auth: {
        'user': user,
        'pass': key
    }
};

valueAccess();

function valueAccess(){


function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
        obj=JSON.parse(body);
}
request(options, callback);

setTimeout(function abc() {
    // request(options, callback);
//console.log(obj.parallel_sessions_running);
    limit=obj.parallel_sessions_max_allowed;
    module.exports.limit = obj.parallel_sessions_max_allowed;
    name=obj.parallel_sessions_running;
    module.exports.name = obj.parallel_sessions_running;
    module.exports.queue=obj.queued_sessions
//assert.equal('2',obj.parallel_sessions_max_allowed,"Not equal to 2");
// console.log(obj.parallel_sessions_running);
}, 2000);
}
       
module.exports.valueAccess = valueAccess;
      
//console.log(b);
//assert.equal("2",b,"Error");


//console.log(a);

// Write your code here
// Assert if parallel_sessions_max_allowed is equal to 2