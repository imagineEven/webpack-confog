let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/stus');
mongoose.connection.once('open', function() {
  console.log('链接成功');
});