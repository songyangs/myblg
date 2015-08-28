/**
 * Created by GeoStar on 2015/8/26.
 */
var ArticleDao = require('../persist/ArticleDao');
var ad = new ArticleDao.curdOption();
var CategoryService = require("./CategoryService");
var ArticleService = {
    add : function(data, callback){
        var entity = new ArticleDao.model(data);
        ad.save(entity,callback);
    },
    findAll : function(data,callback){
        return ad.findAll(CategoryDao.model,data,callback);
    },
    find : function(data,callback){
        //TODO 重新组装data (分页)
        return ad.find(CategoryDao.model,data,callback);
    },
    findCategories : function(data,callback){
        CategoryService.findAll(data,callback);
    }

};

module.exports = ArticleService;

