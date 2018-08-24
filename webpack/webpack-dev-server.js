/**
 * Webpack Dev Server
 * This file is used to run our local enviroment
 */
const webpack = require('webpack');
const express = require('express');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const opn = require('opn');

/**
 * Always dev enviroment when running webpack dev server
 * There are other ways to do this, so feel free to do
 * whatever you find suites your taste
 */
const path = require('path')

const port = process.env.PORT || 3000;

const env = {
  dev: process.env.NODE_ENV === 'development',
  port
};

const devServerConfig = {
  hot: true,
  filename: "bundle.js",
  publicPath: "/static/",
  stats: {
    colors: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
};

try {
  const app = express();
  const compiler = webpack(webpackConfig);
  const devMiddleware = WebpackDevMiddleware(compiler, devServerConfig);
  const hotMiddleware = WebpackHotMiddleware(compiler);

  app.use(devMiddleware);
  app.use(hotMiddleware);

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

  app.listen(port, 'localhost', err => {
    if (err) {
      console.error(err);
    }
    console.log(`Server listening to port ${port}`);
    // opn(`http://localhost:${port}`);
  });
} catch (e) {
  console.error(e);
}
