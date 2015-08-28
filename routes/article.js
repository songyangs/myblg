/**前台页面
 * Created by GeoStar on 2015/8/28.
 */

var express = require('express');
var article = express();
var ArticleService = require("../service/ArticleService");
var Config = require('../common/Config');

article.post("/article/list",function(req,res){
    var data = {};
    var currentPage = req.param("currentPage");
    //每页显示大小
    data.size = Config.pagination.size;
    //当前页
    data.currentPage = currentPage;
    //查询条件
    data.conditions = {};
    //返回字段
    data.returnField = [];
    //排序字段
    data.sortField = [];
    ArticleService.find(data,function(err,doc){

    });
});
