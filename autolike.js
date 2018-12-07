var base64 = require('base-64');
var request = require('request');
var fs = require('fs');
var LineByLineReader = require('line-by-line');
var readline = require('readline-sync');
var colors = require('colors');
var fs = require('fs');
const bodyParser = require("body-parser");
var figlet = require('figlet');
var Now = new Date();
var center = require('center-align');
var setTitle = require('console-title');
let date = require('date-and-time');
let now = new Date();
var widthcon = process.stdout.columns/2
date.format(now, 'YYYY-MM-DD');
var sleep = require('system-sleep');

//
//				    
//					  Unusual
//       https://www.facebook.com/u.n.s.u.p.a.k.r.i.t
//
//       			Thanadet Viene
//		 https://www.facebook.com/KugLoli
//
//				  Koala Thebear Atlas
//       https://www.facebook.com/ko.badwolf
//
//

function unusual() {
	process.stdout.write('\033c')
	console.log(colors.cyan("===================================================================\n").bold);
console.log(colors.white(center("  ██╗   ██╗███╗   ██╗██╗   ██╗███████╗██╗   ██╗ █████╗ ██╗      ", widthcon)));     
console.log(colors.white(center("  ██║   ██║████╗  ██║██║   ██║██╔════╝██║   ██║██╔══██╗██║	  	 ", widthcon)));     
console.log(colors.white(center("  ██║   ██║██╔██╗ ██║██║   ██║███████╗██║   ██║███████║██║	  	 ", widthcon)));   
console.log(colors.white(center("  ██║   ██║██║╚██╗██║██║   ██║╚════██║██║   ██║██╔══██║██║      ", widthcon)));
console.log(colors.white(center("  ╚██████╔╝██║ ╚████║╚██████╔╝███████║╚██████╔╝██║  ██║███████╗ ", widthcon)));
console.log(colors.white(center("   ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝ \n", widthcon)));  
	console.log(colors.cyan("===================================================================").bold);
	console.log("")
	console.log(colors.green(center("Auto Like {Demo}", widthcon).bold));
	console.log("")
	console.log(colors.cyan("===================================================================").bold);
var i;
var count = 0;
console.log("")
var access = readline.question(colors.magenta("Access Token : ").bold);
console.log("")
console.log(colors.cyan("===================================================================").bold);
console.log("")
var msg = readline.question(colors.green("Enter FBID : ").bold);
console.log("")
console.log(colors.cyan("===================================================================").bold);
console.log("")
var time = readline.question(colors.blue("Enter Time : ").bold);
console.log("")
console.log(colors.cyan("===================================================================").bold);
console.log("")
var hlike = readline.question(colors.white("Enter Token : ").bold);
console.log("")
console.log(colors.cyan("===================================================================").bold);
console.log("")
var delay = readline.question(colors.white("Enter Delay (second) : ").bold);
console.log("")
console.log(colors.cyan("===================================================================").bold);
var status;
var likestatus = 0;
for (i = 0; i != time; i++) { 
console.log("\n\n");
request({
				url: ('https://graph.facebook.com/'+msg+'/posts?fields=id&limit=1&access_token=' + access),
				json: true
}, function(error, response, body) {
if(body.data[0]) {
var dataid = body.data[0]['id'];
	count++
	console.log('Count : ' + colors.yellow(count).bold);
	console.log(colors.magenta(dataid).bold +colors.green('| Status ==> ')+colors.yellow(body.data[0]['id']));
	console.log(colors.green("Created Time ") + colors.red(":: ") + colors.magenta(body.data[0]['created_time']).bold);
if(status != dataid) {
	var like = 0;
	tklike = new LineByLineReader(hlike);
	tklike.on('line', function (line) {
		request.post({
       		url: 'https://graph.facebook.com/'+dataid+'/likes?access_token='+line,
      	}, function(error, response, body){
      		if(body == "true") {
      		like++
      	}
      	status = dataid;
      	likestatus = like;
      	//console.log(colors.green(":: " + colors.blue(like) + colors.green(" Likes")).bold);
   		});
	})
	console.log(colors.green("Like :: ").bold + colors.magenta(likestatus).bold);	
	}
else
{
	console.log(colors.red("[System]").bold + colors.magenta(" ::").bold + colors.green(" Already Like" + colors.red("!")).bold);
	console.log(colors.green("Like :: ").bold + colors.magenta(likestatus).bold);	
}
}
else
{
count++
console.log('Count : ' + colors.yellow(count).bold);
console.log(colors.red("[System]").bold + colors.magenta(" ::").bold + colors.green(" No Post Data").bold);
}
        });
//process.stdout.write('\033c')
console.log(colors.green("===================================================================").bold);
console.log("");
console.log(colors.white(center("   █████╗ ██╗   ██╗████████╗ ██████╗ ██╗     ██╗██╗  ██╗███████╗", widthcon)));     
console.log(colors.white(center("  ██╔══██╗██║   ██║╚══██╔══╝██╔═══██╗██║     ██║██║ ██╔╝██╔════╝", widthcon)));     
console.log(colors.white(center("  ███████║██║   ██║   ██║   ██║   ██║██║     ██║█████╔╝ █████╗  ", widthcon)));   
console.log(colors.white(center("  ██╔══██║██║   ██║   ██║   ██║   ██║██║     ██║██╔═██╗ ██╔══╝  ", widthcon)));
console.log(colors.white(center("  ██║  ██║╚██████╔╝   ██║   ╚██████╔╝███████╗██║██║  ██╗███████╗", widthcon)));
console.log(colors.white(center("  ╚═╝  ╚═╝ ╚═════╝    ╚═╝    ╚═════╝ ╚══════╝╚═╝╚═╝  ╚═╝╚══════╝\n", widthcon))); 
console.log(colors.green("<<-- ").bold + colors.magenta("Start New Data!").bold + colors.green("-->>").bold);
sleep(delay*1000)
console.log("");
}
}
function main() {
var main5=(Buffer.from("cHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1wwMzNjJykKY29uc29sZS5sb2coY29sb3JzLmJsdWUoIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0iKS5ib2xkKTsKZmlnbGV0KCdVbnVzdWFsJywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7CiAgICBpZiAoZXJyKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nLi4uJyk7CiAgICAgICAgY29uc29sZS5kaXIoZXJyKTsKICAgICAgICByZXR1cm47CiAgICB9CiAgICBjb25zb2xlLmxvZyhjb2xvcnMuYW1lcmljYShjZW50ZXIoZGF0YSwgd2lkdGhjb24pKS5ib2xkKTsKZmlnbGV0KCJOb2RlSlMgU2NyaXB0IiwgZnVuY3Rpb24oZXJyLCBkYXRhKSB7CglpZiAoZXJyKSB7CgkJY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nLi4uJyk7CgkJY29uc29sZS5kaXIoZXJyKTsKCQlyZXR1cm47Cgl9Cgljb25zb2xlLmxvZyhjb2xvcnMuZ3JlZW4oZGF0YSkuYm9sZCk7Cgljb25zb2xlLmxvZyhjb2xvcnMuYmx1ZSgiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSIpLmJvbGQpOwoJY29uc29sZS5sb2coIiIpCgljb25zb2xlLmxvZyhjb2xvcnMuZ3JlZW4oY2VudGVyKCJBdXRvIENvbW1lbnQge0RlbW99Iiwgd2lkdGhjb24pLmJvbGQpKTsKCWNvbnNvbGUubG9nKCIiKQoJY29uc29sZS5sb2coY29sb3JzLmJsdWUoIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0iKS5ib2xkKTsKdmFyIGk7CnZhciBjb3VudCA9IDA7CmNvbnNvbGUubG9nKCIiKQp2YXIgYWNjZXNzID0gcmVhZGxpbmUucXVlc3Rpb24oY29sb3JzLm1hZ2VudGEoIkFjY2VzcyBUb2tlbiA6ICIpLmJvbGQpOwpjb25zb2xlLmxvZygiIikKY29uc29sZS5sb2coY29sb3JzLmJsdWUoIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0iKS5ib2xkKTsKY29uc29sZS5sb2coIiIpCnZhciBtc2cgPSByZWFkbGluZS5xdWVzdGlvbihjb2xvcnMuZ3JlZW4oIkVudGVyIE1lc3NhZ2UgOiAiKS5ib2xkKTsKY29uc29sZS5sb2coIiIpCmNvbnNvbGUubG9nKGNvbG9ycy5ibHVlKCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IikuYm9sZCk7CmNvbnNvbGUubG9nKCIiKQp2YXIgdGltZSA9IHJlYWRsaW5lLnF1ZXN0aW9uKGNvbG9ycy55ZWxsb3coIkVudGVyIFRpbWUgOiAiKS5ib2xkKTsKY29uc29sZS5sb2coIiIpCmNvbnNvbGUubG9nKGNvbG9ycy5ibHVlKCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IikuYm9sZCk7CmNvbnNvbGUubG9nKCIiKQp2YXIgZGVsYXkgPSByZWFkbGluZS5xdWVzdGlvbihjb2xvcnMud2hpdGUoIkVudGVyIERlbGF5IChzZWNvbmQpIDogIikuYm9sZCk7CmNvbnNvbGUubG9nKCIiKQpjb25zb2xlLmxvZyhjb2xvcnMuYmx1ZSgiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSIpLmJvbGQpOwpmb3IgKGkgPSAwOyBpICE9IHRpbWU7IGkrKykgeyAKbHIgPSBuZXcgTGluZUJ5TGluZVJlYWRlcignaWQudHh0Jyk7CmNvbnNvbGUubG9nKCJcblxuIik7CmxyLm9uKCdsaW5lJywgZnVuY3Rpb24gKGxpbmUpIHsKdmFyIGhlYWRlcnMgPSB7CidVc2VyLUFnZW50JzogICAgICAgJ1N1cGVyIEFnZW50LzAuMC4xJywKJ0NvbnRlbnQtVHlwZSc6ICAgICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ307CnZhciBvcHRpb25zID0gewp1cmw6ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8nK2xpbmUrJy9jb21tZW50cycsCm1ldGhvZDogJ1BPU1QnLApoZWFkZXJzOiBoZWFkZXJzLApmb3JtOiB7J21ldGhvZCc6ICdQT1NUJywgJ21lc3NhZ2UnOiBtc2csICdhY2Nlc3NfdG9rZW4nOiBhY2Nlc3N9fTsKdmFyIHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7CnJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSwgYm9keSkgeyAgIAoKY291bnQrKwpjb25zb2xlLmxvZygnU3RhcnQgOiAnKS5ib2xkICsgY29sb3JzLmdyZWVuKGNvdW50KS5ib2xkOwpjb25zb2xlLmxvZyhjb2xvcnMubWFnZW50YSgnJytsaW5lKycnKStjb2xvcnMuZ3JlZW4oJ3wgU3RhdHVzID09PiAnKStjb2xvcnMueWVsbG93KGJvZHkpKTsKICAgICAgICB9KTsKICAgIH0pOwpzbGVlcChkZWxheSoxMDAwKQp9Cn0pCn0p", 'base64').toString('ascii'));
eval(main5);
}
unusual()