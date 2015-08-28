/**
 * Created by GeoStar on 2015/8/25.
 */

var Navigation = {};

Navigation.list = function(){
    var url = "/category/list";
    var data = {};
    $.ajax({
        url:url,
        type:"post",
        data:data,
        dataType:'json',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success : function(resObj) {
            if( resObj ){
                Navigation.show(resObj);
            }
        }
    });
};
Navigation.assemble = function(resObj){
    if(!util){
        return false;
    }
    return util.assemble(resObj)
};
Navigation.show = function(resObj){
    var container = $("#blog-navbar-ul");
    container.empty();
    var obj = Navigation.assemble(resObj);
    for(var i = 0; i < obj.length; i++){
        var item = obj[i];
        var li = $("<li>");
        var a = $("<a href='" + item.url + "'>");
        a.append(item.name);
        li.append(a);
        if(item.level == 0){
            li.addClass("active");
        }
        if(item.sub && item.sub.length > 0){
            li.addClass("dropdown");
            a.attr('data-toggle','dropdown').addClass('dropdown-toggle');
            var ul = $("<ul>");
            ul.addClass("dropdown-menu");
            for(var j = 0; j < item.sub.length; j++){
                var it = item.sub[j];
                var subLi = $("<li>");
                var subA = $("<a>");
                subA.attr("href",it.url);
                subA.append(it.name);
                var b = $("<b class='caret'>");
                subLi.append(subA);
                ul.append(subLi);
            }
            li.append(ul);
        }
        container.append(li);
    }
};
