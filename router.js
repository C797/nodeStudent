var express = require('express');
var students = require('./student');
var router = express.Router();

router.get('/',function(req,res){
    students.finds(function(err,data){
        res.render('index.html',{
            href:'./pubilc/layui/css/layui.css',
            jshref:'./pubilc/layui/layui.js',
            data:data
        })
    });
});

router.get('/student/add',function(req,res){
    res.render('add.html')
});

router.post('/student/add',function(req,res){
    var data = req.body;
    students.Save(data,function(err){
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    })
});

router.get('/student/edit',function(req,res){
    var params = req.query;
    students.findById(parseInt(params.id),function(err,student){
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('edit.html',{
            student:student
        })
    })
    
});

router.post('/student/edit',function(req,res){
    students.updateById(req.body, function (err) {
      if (err) {
        return res.status(500).send('Server error.')
      }
      res.redirect('/students')
    })
})

module.exports = router