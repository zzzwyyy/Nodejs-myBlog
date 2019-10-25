const http = require('http');
const querystring = require('querystring');  //引入Node里的querystring模块

const server = http.createServer((req, res) => {
    console.log('method:',req.method); // GET
    const url = req.url; // 请求完整的url
    console.log('url:',url);
    req.query = querystring.parse(url.split('?')[1]) //解析querystring
    console.log('query:',req.query);
    res.end(
        JSON.stringify(req.query)
    );  //将querystring返回
});

server.listen(8000);
console.log('OK')