const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/api', '/api2', '/api3'], // 👈🏽 your API endpoint goes here.
    createProxyMiddleware({
      target: 'http://35.247.240.184', // 👈🏽 your API URL goes here.
      changeOrigin: true,
    })
  );


};


