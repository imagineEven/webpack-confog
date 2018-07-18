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
      age:Number,
      gender:{
        type:String,
        default:'m'
      },
      address:String
    });
    this.SchemaObj = {
      userInfo: userSchema
    };
  }

  saveUser(param, callback) {
    let stu = new this.StudentModel({
      name:'杀生',
      age:28,
      gender:'m',
      address:'高老庄'
    });
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
    this.StudentModel.findOne({name:'猪八戒'}, (err, doc) => {
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

  paseUrl(url) {
    let all = url.split('?')[0];
    let modelName = all.split('/')[0] + all.split('/')[1];
    let SchemaName = all.split('/')[1];
    console.log(modelName + '--' + SchemaName);
    this.StudentModel = this.mongoose.model(modelName, this.SchemaObj[SchemaName]);
  }
}

module.exports =  mongooseFun;