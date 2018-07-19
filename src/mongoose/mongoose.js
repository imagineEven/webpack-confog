class mongooseFun {
  constructor() {
    this.mongoose = require('mongoose');
    this.mongoose.connect('mongodb://127.0.0.1/Registration_detail', {useMongoClient: true});
    this.mongoose.connection.once('open', function() {
      console.log('链接成功');
    });
    this.Schema = this.mongoose.Schema;
    this.createSchema();
  }

  createSchema() {
    let userSchema = new this.Schema({
      name:{
        type:String,
        unique:true
      },
      photoNumber:Number
    });
    this.SchemaObj = {
      userInfo: userSchema
    };
  }

  //
  save(url, json, callback) {
    this.parse(url, json);
    let stu = new this.StudentModel(this.data);
    stu.save(function (err) {
      if(!err){
        callback('插入成功');
      } else {
        console.log(err);
        callback('插入失败');
      }
    });
  }

  search(param, callback) {
    //let StudentModel = this.mongoose.model('user', this.userSchema);
    this.StudentModel.findOne({name:'杀生'}, (err, doc) => {
      if(!err){
        this.data = doc;
        callback(doc);
      } else {
        callback('搜索失败');
      }
    });
  }

  update(param, callback) {
    let StudentModel = this.mongoose.model('user', this.userSchema);
    StudentModel.findOne({name:'猪八戒'}, (err, doc) => {
      if(!err){
        //callback(doc);
        doc.update({$set:{name:'孙悟饭'}}, function (err) {
          if (!err) {
            console.log('nihao');
          } else {
            console.log('更新失败');
          }
        });
      }
    });
  }

  remove(param, callback) {
    this.StudentModel.findOne({name:'猪八戒'}, (err, doc) => {
      if(!err){
        //remove() 删除文档
        doc.remove(function (err, doc) {
          if (!err) {
            console.log(222);
          } else {
            callback('删除失败');
          }
        });
      }
    });
  }

  // 解析url 和数据数据 然后将所有的保存
  parse(url, json) {
    this.parseUrl(url);
    this.data = json;
  }

  parseUrl(url) {
    let all;
    if (url.indexOf('?') > -1) {
      all = url.split('?')[0];
    } else {
      all = url;
    }
    let modelName = all.split('/')[2];
    let SchemaName = all.split('/')[2];
    console.log(modelName + '--' + SchemaName);
    this.StudentModel = this.mongoose.model(modelName, this.SchemaObj[SchemaName]);
  }

}

module.exports =  mongooseFun;