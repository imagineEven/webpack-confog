let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Registration_detail', {useMongoClient: true});
mongoose.connection.once('open', function() {
  console.log('链接成功');
});

let Schema = mongoose.Schema;
let stuSchema = new Schema({
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
let StudentModel = mongoose.model('user', stuSchema);
let stu = new StudentModel({
  name:'猪八戒',
  age:28,
  gender:'m',
  address:'高老庄'
});
stu.save(function (err) {
  if(!err){
    console.log('插入成功');
  }
});

class findJson {
  constructor (url, callback) {
    this.data = '1111';
    StudentModel.findOne({name:'猪八戒'}, (err, doc) => {
      if(!err){
        //console.log(doc);
        this.data = doc;
        callback(doc);
        //resolve();
        //get()可以读取文档中的属性
        //console.log(doc.get("name"))
    
        //update()修改文档
        // /!*doc.update({$set:{name:"孙悟饭"}},function (err) {
        // 	if(!err){
        // 		console.log("修改成功~~");
        // 	}
        // });*!/
    
        //remove() 删除文档
        // doc.remove(function (err , doc) {
        // 	/!*if(!err){
        // 		console.log("删除成功");
        // 	}*!/
    
        // 	console.log(arguments);
        // });
    
      }
    });
  }
}

module.exports =  findJson;