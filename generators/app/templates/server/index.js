const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');

const app = express();
const port = process.env.PROT || 5000;
const compiler = webpack(config);
app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use(WebpackHotMiddleware(compiler));

app.listen(port);

console.log(`Server is listening the http:localhost:${port} now`);
