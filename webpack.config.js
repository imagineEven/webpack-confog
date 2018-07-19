const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const mongooseFun = require('./src/mongoose/mongoose.js');
//const htmlPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

let instanceMongoose = new mongooseFun();
const config = {
  target: 'web',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8083,
    //host: '0.0.0.0',
    overlay: {
      errors: true,
    },
    hot: true,
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
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 1024,
        name: '[name].[ext]?[hash]'
      }
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
    //new htmlPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 在开发模式定义全局变量
    // 为什么叫做默认插件 就是因为是webpack自带的插件；
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    })
    
    //new webpack.HotModuleReplacementPlugin()//热加载插件
  ]
};
// /all/userInfo/save
// all 代表ip地址 userInfo文档的名字 save =>mongoose的方法，
function serverRoutes (apiRoutes) {
  apiRoutes.get('/all/userInfo/save', (req, res) => {
    // 获取Url
    console.log(req.originalUrl);
    //console.log(req.query);
    console.log(typeof req.query);
    // 获取参数
    console.log(req.query.key);
    newfun(req.originalUrl, req.query, function(data) {
      res.json(data);
    });
  });
}

function newfun(originalUrl, query, callback) {
  let methods = originalUrl.split('?')[0].split('/')[3];
  console.log(originalUrl.split('?')[0]);
  console.log(originalUrl.split('?')[0].split('/'));
  console.log(methods);
  instanceMongoose[methods](originalUrl, query, callback);
}

module.exports = config;