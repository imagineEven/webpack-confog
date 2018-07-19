class mongooseFun {
  constructor() {
    this.mongoose = require('mongoose');
    this.mongoose.connect('mongodb://127.0.0.1/Registration_detail');
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
  save(callback) {
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

  search(callback) {
    //let StudentModel = this.mongoose.model('user', this.userSchema);
    this.StudentModel.findOne(this.data, (err, doc) => {
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

  parse(originalUrl) {
    // 获取url数组；
    let urlArr;
    if (originalUrl.indexOf('?') > -1) {
      urlArr = originalUrl.split('?')[0].split('/');
    } else {
      urlArr = originalUrl.split('/');
    }

    // 获取保存的方法，
    let methodsArr = ['save', 'search', 'remove', 'update'];
    for (let urlItme of urlArr) {
      for (let methodsItem of methodsArr) {
        if (urlItme === methodsItem) {
          this.mongooseMethods = methodsItem;
        }
      }
    }

    // 获取集合名 跟 schema;
    let removeArr = ['', this.mongooseMethods, 'all'];
    for (let urlItem of urlArr) {
      if (removeArr.indexOf(urlItem) === -1 && urlItem) {
        this.MoedlAndSchema = urlItem;
      }
    }
    console.log(this.mongooseMethods + '--' + this.MoedlAndSchema);
  }

  start(originalUrl, query, callback) {
    this.parse(originalUrl);
    this.data = query;
    this.StudentModel = this.mongoose.model(this.MoedlAndSchema, this.SchemaObj[this.MoedlAndSchema]);
    this[this.mongooseMethods](callback);
  }
}

module.exports =  mongooseFun;