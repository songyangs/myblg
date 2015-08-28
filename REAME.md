
db.categories.save({  "name" : "首页", "parent" : "", "level" : 0 ,"url" : "/"});
db.categories.save({  "name" : "生活", "parent" : "首页", "level" : 0 ,"url" : "/life"});
db.categories.save({  "name" : "国学", "parent" : "首页", "level" : 1 ,"url" : "/culture"});
db.categories.save({  "name" : "程序", "parent" : "首页", "level" : 1 ,"url" : "/program"});
db.categories.save({  "name" : "关于", "parent" : "首页", "level" : 1 ,"url" : "/about"});
db.categories.save({  "name" : "随笔", "parent" : "生活", "level" : 2 ,"url" : "/life/jottings"});
db.categories.save({  "name" : "Java", "parent" : "程序", "level" : 2 ,"url" : "/program/java"});
db.categories.save({  "name" : "JavaScript", "parent" : "程序", "level" : 2 ,"url" : "/program/js"});
db.categories.save({  "name" : "C/C++", "parent" : "程序", "level" : 2 ,"url" : "/program/c"});
db.categories.save({  "name" : "丹道", "parent" : "国学", "level" : 2 ,"url" : "/culture/dandao"});
db.categories.save({  "name" : "六爻", "parent" : "国学", "level" : 2 ,"url" : "/culture/6yao"});
db.categories.save({  "name" : "八字", "parent" : "国学", "level" : 2 ,"url" : "/culture/8zi"});