
$(function(){
    function getPriceAll(){
        var $price = $(".cart-body-center>div>ul>li:nth-child(5)>div").text();
        $price = $price.slice(1);
        var $prices = $price.split("￥");
        var $priceAll = 0;
        for(var key in $prices){
            $priceAll += parseInt($prices[key]);
        }
        $(".cart-body-bottom>div:nth-child(2)>p>span:last-child").text("￥"+$priceAll.toFixed(2));
    }
    getPriceAll();
    $(".cart-body-top>ul>li:first-child>input").click(function(){
        var $chb = $(this);
        var $chbs = $(".cart-body-center>div>ul>li:first-child>div>input");
        $chbs.prop("checked",$chb.is(":checked"));
    });
    $(".cart-body-center>div>ul>li:first-child>div>input").click(function(){
        var $chbs = $(".cart-body-center>div>ul>li:first-child>div>input:not(:checked)");
        var $chb = $(".cart-body-top>ul>li:first-child>input");
        $chb.prop("checked",$chbs.length==0);
    });
    $(".cart-body-center>div>ul>li:nth-child(4)>div>ul>li:last-child>button").click(function(){
        var $btn = $(this);
        var $num = $btn.parent().prev().children().val();
        $num++;
        $btn.parent().prev().children().val($num);
        var $price = $btn.parent().parent().parent().parent().prev().children().text();
        var $prices = $price.slice(1);
        var $priceAll = $prices*$num;
        $btn.parent().parent().parent().parent().next().children().text("￥"+$priceAll.toFixed(2));
        getPriceAll();
    });
    $(".cart-body-center>div>ul>li:nth-child(4)>div>ul>li:first-child>button").click(function(){
        var $btn = $(this);
        var $num = $btn.parent().next().children().val();
        if($num>1){
            $num--;
            $btn.parent().next().children().val($num);
            var $price = $btn.parent().parent().parent().parent().prev().children().text();
            var $prices = $price.slice(1);
            var $priceAll = $prices*$num;
            $btn.parent().parent().parent().parent().next().children().text("￥"+$priceAll.toFixed(2));
            getPriceAll();
        }
    });
    $(".cart-body-center>div>ul>li:last-child span").click(function(){
        var $del = $(this);
        $del.parent().parent().parent().parent().remove();
        getPriceAll();
    });
    $(".cart-body-bottom>div>a").click(function(){
        $(".cart-body-center>div>ul>li:first-child>div>input:checked").parent().parent().parent().parent().remove();
        getPriceAll();
    });
})