
const http = require('http');

const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <html>
        <body style="font-family:Arial;text-align:center;padding:60px">
            <h1 style="color:green">Hello, World!</h1>
            <h2>My CI/CD Application</h2>
            <p>Dockerized Application</p>
            <p>Deployed Automatically Using GitHub Actions</p>
            <h3>Deployment Successful!</h3>
        </body>
        </html>
    `);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('Application running on port ' + PORT);
});
