const { json } = require('body-parser');
var fs = require('fs');

var filePaht = './db.json';
/**
 * 
 * @param {Function} callback 回调函数
 */
exports.finds = function(callback){
    fs.readFile(filePaht,'utf8',function(err,data){
        if(err){return callback(err)}
        callback(null, JSON.parse(data).students)
    })
}

exports.findById = function (id, callback) {
    fs.readFile(filePaht, 'utf8', function (err, data) {
      if (err) {
        return callback(err)
      }
      var students = JSON.parse(data).students
      var ret = students.find(function (item) {
        return item.id === parseInt(id)
      })
      callback(null, ret)
    })
  }

exports.Save = function(student,callback){
    fs.readFile(filePaht,'utf8',function(err,data){
        if(err){return callback(err)}
        var list = JSON.parse(data).students;
        student.id = list.length+1;
        list.push(student);
        var cun = JSON.stringify({
            students:list
        })
        fs.writeFile(filePaht,cun,'utf8',function(req,res){
            if(err){callback(err)}
            callback(null)
        })
    })
}

exports.updateById = function (student, callback) {
    fs.readFile(filePaht, 'utf8', function (err, data) {
        if (err) {
          return callback(err)
        }
        var studen = JSON.parse(data).students;

        console.log(student)
        student.id = parseInt(student.id)

        var stu = studen.find(function (item) {
            return item.id === student.id
        })

        // for (var key in student) {
        //     stu[key] = student[key]
        // }
        var fileData = JSON.stringify({
          students: studen
        })

        // fs.writeFile(dbPath, fileData, function (err) {
        //   if (err) {
        //     // 错误就是把错误对象传递给它
        //     return callback(err)
        //   }
        //   // 成功就没错，所以错误对象是 null
        //   callback(null)
        // })
    });
}