/**
 * Created by GeoStar on 2015/8/24.
 */
var express = require('express');
var categoryController = express();
var CategoryService = require("../../service/CategoryService");


/**
 * 新建
 * */
categoryController.get('/category/new',function(req, res){
    var data = {};
    data.name = "首页";
    data.parent = "";
    data.level = 1;
    console.log(data);
    CategoryService.add(data,function(err, doc){
        if(!err){
             res.send("ok");
        } else {

        }
    });
});



module.exports = categoryController;