/**
 * Created by GeoStar on 2015/8/24.
 */

var Article = {
    title : String,                   　　　　　　　　　　　　      //标题
    introduction : String,                                          //简介
    content : String,                                               //内容
    visits : {type : Number, default: 0},                           //浏览数
    img : { type: String, default: "../images/001.jpg" },           //图片位置
    category : String,              　　　　　　　　　　　　        //类别外键
    user : {type : String,default : "55dfd53a618064ec22f9880b"},    //作者id
    commentNum : {type : Number, default: 0},                       //评论数(冗余)
    createDate : { type: Date, default: Date.now }                  //创建时间
};

module.exports = Article;