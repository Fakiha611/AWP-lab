var http = require('http');
var url = require('url');
const port = 8001;
const server = http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type':'text/html'})
    var q = url.parse(req.url,true).query;
    console.log('Parsed query:',q);
    var text=q.query+" "+q.month;
    res.end(text);
});
server.listen(port,()=> {
    console.log('Server is running at port ${port}');
});