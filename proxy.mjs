// Listen on a specific host via the HOST environment variable
const host = '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = 8080;

import cors_proxy from 'cors-anywhere'
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [],
    removeHeaders: ['X-Frame-Options', 'cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});