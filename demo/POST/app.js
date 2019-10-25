const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method === 'POST') {
        // 打印req数据格式
        console.log('content-type:',req.headers['content-type'])
        // 接受数据
        let postData = ''
        req.on('data',chunk => {
            postData += chunk.toString();
        })
        req.on('end', () => {
            console.log('postdata:',postData);
            res.end('hello world')
        })
    }
});

server.listen(8000);
console.log('OK')