const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const mongoose = require('mongoose');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    port: 8083,
    before(apiRoutes) {
      serverRoutes(apiRoutes);
    }
  },
  module: {
    rules: [{
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
          // the "scss" and "sass" values for the lang attribute to the right configs here.
          // other preprocessors should work out of the box, no loader config like this necessary.
          'scss': 'vue-style-loader!css-loader!sass-loader',
          'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
        }
        // other vue-loader options go here
      },
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.js$/,
      include: [ // use `include` vs `exclude` to white-list vs black-list
        path.resolve(__dirname, 'src'), // white-list your app source files
        require.resolve('bootstrap-vue'), // white-list bootstrap-vue
      ],
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    // 在开发模式定义全局变量
    // 为什么叫做默认插件 就是因为是webpack自带的插件；
    new webpack.DefinePlugin({
      'process': 'true'
    })
    
    //new webpack.HotModuleReplacementPlugin()//热加载插件
  ]
};

function serverRoutes (apiRoutes) {
  apiRoutes.get('/all/detail', (req, res) => {
    // mongoose.connect('mongodb://127.0.0.1/stus');
    // mongoose.connection.once('open', function() {
    //   console.log('链接成功');
    // });
    console.log(req.query);
    console.log(typeof req.query);
    console.log(req.query.key);
    res.json('我是webpack里面的数据');
  });
}