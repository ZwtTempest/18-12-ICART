$(function(){
    //引入头部
    $("<link rel='stylesheet' href='css/index_header.css'>").appendTo("head")
    $.ajax({
        type:"get",
        url:"http://localhost:3000/index-header.html",
        success: function(res) {
            $("#header").replaceWith(res)
        }
    })
    //引入副头部
    $("<link rel='stylesheet' href='css/logo_header.css'>").appendTo("head")
    $.ajax({
        type:"get",
        url:"http://localhost:3000/logo-header.html",
        success: function(res) {
            $("#logo_header").replaceWith(res)
        }
    })
    //引入底部
    $("<link rel='stylesheet' href='css/index_bottom.css'>").appendTo("head")
    $.ajax({
        type:"get",
        url:"http://localhost:3000/index-bottom.html",
        success: function(res) {
            $("#footer").replaceWith(res)
        }
    })
    //登录框
    if($("#login").length != 0){
        $("<link rel='stylesheet' href='css/login.css'>").appendTo("head")
        $.ajax({
            type:"get",
            url:"http://localhost:3000/login.html",
            success: function(res) {
                $("#login").replaceWith(res)
            }
        })
    }
}())