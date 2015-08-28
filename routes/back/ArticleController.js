/**
 * Created by GeoStar on 2015/8/26.
 */
var express = require('express');
var articleController = express();
var ArticleService = require("../../service/ArticleService");
var BlgUtil = require('../../common/BlgUtil');


/**
 * 新建页面
 * */
articleController.get("/article/ui",function(req, res){
    //查询分类
    ArticleService.findCategories({},function(err,doc){
        //返回页面视图
        var data = BlgUtil.assembleCategories(doc);
        res.render("back/article",{data : data});
    });

});
/**
 *添加
 *
 * */
articleController.post("/article/add",function(req, res){
    var title = req.param("title");
    var introduction = req.param("introduction");
    var content = req.param("content");
    var category = req.param("categories");
    var data = {};
    data.title = title;
    data.introduction = introduction;
    data.content = content;
    data.category = category;
    console.log(data);
    ArticleService.add(data,function(err, doc){
        if(!err){
            res.json(1);
        } else {
            res.json(0)
        }
    });
});





module.exports = articleController;