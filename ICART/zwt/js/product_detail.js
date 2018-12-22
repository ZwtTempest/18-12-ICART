$(function(){
    $(".move-img")
		.mouseenter(function(){
                  $(".mask").css("display","block");
                  $(".big-img").css("display","block");
		})
		.mouseleave(function(){
                  $(".mask").css("display","none");
                  $(".big-img").css("display","none");
		})
		.mousemove(function(e){
                  $(".mask").css("top",(e.offsetY-75)+"px").css("left",(e.offsetX-75)+"px");
                  $(".big-img").css("backgroundImage","url("+$(".md-img>img").attr("src")+")").css("backgroundPosition",(150-2*e.offsetX)+"px "+(150-2*e.offsetY)+"px");
      })
      $(".sm-img>ul>li>div>img").click(function(){
            $(".md-img>img").prop("src",$(this).attr("src"))
      })
      $(".product-color:has([data-toggle=color])").on("click","[data-toggle=color]",function(){
            var $tar=$(this);
            if(!$tar.is(".active")){
                  $tar.addClass("active").parent().siblings().children().removeClass("active");
            }
      })
      $(".product-banben:has([data-toggle=banben])").on("click","[data-toggle=banben]",function(){
            var $tar=$(this);
            if(!$tar.is(".active")){
                  $tar.addClass("active").parent().siblings().children().removeClass("active");
            }
      })
      $(".product-taocan:has([data-toggle=taocan])").on("click","[data-toggle=taocan]",function(){
            var $tar=$(this);
            if(!$tar.is(".active")){
                  $tar.addClass("active").parent().siblings().children().removeClass("active");
            }
      })
      $(".product-cs-nav:has([data-toggle=cs_nav])").on("click","[data-toggle=cs_nav]",function(){
            var $tar=$(this);
            if(!$tar.is(".cs-active")){
                  $tar.addClass("cs-active").siblings().removeClass("cs-active");
            }
      })
      $(".detail-gobuy").click(function(){
            var $color = $(".product-color>li>a.active").text();
            var $banben = $(".product-banben>li>a.active").text();
            var $taocan = $(".product-taocan>li>a.active").text();
            alert("颜色："+$color+";版本："+$banben+";套餐："+$taocan);
      })

})