/**
 * Created by GeoStar on 2015/8/24.
 */
var CategoryDao = require('../persist/CategoryDao');
var cd = new CategoryDao.curdOption();
/*
CategoryService.curdOption = function(){};
CategoryService.curdOption.prototype = new BaseService(CategoryDao);
*/
var CategoryService = {
   add : function(data, callback){
       var entity = new CategoryDao.model(data);
       cd.save(entity,callback);
   },
   findAll : function(data,callback){
       cd.findAll(CategoryDao.model,data,callback);
   }

};

module.exports = CategoryService;