const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))

// set proxy
app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://www.example.org/secret',
      changeOrigin: true,
    })
);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
