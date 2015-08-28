/**
 * Created by GeoStar on 2015/8/24.
 */
var Config = require('../common/Config');
var mongoose = require('mongoose');
var Entities = require('../common/Entities');
// pool
var options = {
    db: { native_parser: true },
    server: { poolSize: 5 },
    user: Config.user,
    pass: Config.password
};

var db = mongoose.createConnection();
db.open(Config.db.host, Config.db.dbName, Config.db.port, options, function(err) {
    if(err){
        console.log("connect mongoDB failed");
        console.log(err);
    } else{
        console.log('mongoDB connected!');
    }

});
db.on('error', function (err) {
    if(err){
        console.log(err);
        db.close();
    }
});
//when close, reopen a connect
db.on('close', function() {
    db.open(Config.db.host, Config.db.dbName, Config.db.port, options);
});

var BaseDao = function (){
    BaseDao.unique = this;
    if( BaseDao.unique !== undefined ){
       return BaseDao.unique;
    }
};
/*
* 减少数据库交互保存collection(这个不起作用)
* */
BaseDao.models = new Array(16);//暂定大小,自动扩充.

BaseDao.prototype.getModelByName = function(name){
    var model = BaseDao.models[name];
    if(!model){
        var scheme = new mongoose.Schema(Entities[name]);
        model = db.model(name,scheme);
    }
    return model;
};
BaseDao.prototype.getModel = function(collName,scheme){
    return db.model(collName,scheme);
};

/**
 *添加操作
 * */
BaseDao.prototype.save = function(entity, callback){
    if(!entity){
        return false;
    }
    entity.save(callback);
};
/**
 * 查询所有数据
 * */
BaseDao.prototype.findAll = function(model,data,callback){
    if(!model){
        callback(undefined,undefined);
        return ;
    }
    return model.find(data).exec(callback);
};
/**
 * 分页
 * */
BaseDao.prototype.find = function(model,data,callback){

};

module.exports = BaseDao;

