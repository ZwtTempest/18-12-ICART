//商品显示在页面
function getProducts(res){
	var str = "";
	var row = Math.floor(res.length/4);
	var cel = res.length%4;
	for(var j=0; j<row; j++){
		str += "<div><ul>";
		for(var i=0; i<4; i++){
			str += "<li>";
			str += "<div class='product-detail'>";
				str += "<div class='product-img'>";
					str += "<a href='#'><img src='img/product_imac.jpg'></a>";
				str += "</div>";
				str += "<div class='product-price'>";
					str += "<span>&yen;"+res[(i+j*4)].price+"</span>";
				str += "</div>";
				str += "<div class='product-name'>";
					str += "<a href='#'><p>"+res[(i+j*4)].name+"</p></a>";
				str += "</div>";
				str += "<div class='product-add'>";
					str += "<a><input type='checkbox' id='mark"+(i+j*4)+"'><label for='mark"+(i+j*4)+"'>标记</label></a>";
					str += "<a href='#'><img src='img/wish_list1.png' width='20px'>收藏</a>";
					str += "<a href='#'><img src='img/cart1.png' width='20px'>加入购物车</a>";
				str += "</div>";
			str += "</div>";
			str += "</li>";
		}
		str += "</ul></div>";
	}
	if(cel>0){
		str += "<div><ul>";
		for(var k=0; k<cel; k++){
			str += "<li>";
			str += "<div class='product-detail'>";
				str += "<div class='product-img'>";
					str += "<a href='#'><img src='img/product_imac.jpg'></a>";
				str += "</div>";
				str += "<div class='product-price'>";
					str += "<span>&yen;"+res[((row*4)+k)].price+"</span>";
				str += "</div>";
				str += "<div class='product-name'>";
					str += "<a href='#'><p>"+res[((row*4)+k)].name+"</p></a>";
				str += "</div>";
				str += "<div class='product-add'>";
					str += "<a><input type='checkbox' id='mark"+((row*4)+k)+"'><label for='mark"+((row*4)+k)+"'>标记</label></a>";
					str += "<a href='#'><img src='img/wish_list1.png' width='20px'>收藏</a>";
					str += "<a href='#'><img src='img/cart1.png' width='20px'>加入购物车</a>";
				str += "</div>";
			str += "</div>";
			str += "</li>";
		}
		str += "</ul></div>";
	}            
	getID("product-box").innerHTML = str;
}

//获取所有商品
var allProducts = function(pno){
    if(pno == null){
        pno = 0;
    }
    pno = parseInt(pno);
    var url = getUrl()
    var urlf,urlc,urlb
    if(url == ""){
        urlf = 0
        urlc = 0
        urlb = 0
    }else{
        var len = url.length
        if(len == 1){
            urlf = url[0].split("=")[1]
            urlc = 0
            urlb = 0
        }else if(len == 2){
            urlf = url[0].split("=")[1]
            urlc = url[1].split("=")[1]
            urlb = 0
        }else{
            urlf = url[0].split("=")[1]
            urlc = url[1].split("=")[1]
            urlb = url[2].split("=")[1]
        }
    }
    ajax({
        type:"get",
        url:"/product/search",
        data:{
            conf:urlf,
            conc:urlc,
            conb:urlb,
            cno:pno
        },
        success:function(res){
            var { products,pageCount } = res;
            getProducts(products);
            var allpage = document.querySelector(".all-page>span");
            allpage.innerHTML = pageCount;
            var html = document.querySelector(".product-page-body>div");
            var str = "";
            if(pageCount <= 3){
                for(var i=0; i<pageCount; i++){
                    if(i==pno){
                        str += "<a class='active'>"+(i+1)+"</a>";
                    }else{
                        str += "<a>"+(i+1)+"</a>";
                    }
                }
            }else if(pno >= (pageCount-1)){
                pno = pageCount-1;
                for(var i=pageCount-2; i<=pageCount; i++){
                    if(i==(pno+1)){
                        str += "<a class='active'>"+i+"</a>";
                    }else{
                        str += "<a>"+i+"</a>";
                    }
                }
            }else if(pno == 0){
                str += "<a class='active'>"+(pno+1)+"</a>";
                str += "<a>"+(pno+2)+"</a>";
                str += "<a>"+(pno+3)+"</a>";
            }else{
                str += "<a>"+pno+"</a>";
                str += "<a class='active'>"+(pno+1)+"</a>";
                str += "<a>"+(pno+2)+"</a>";
            }
            html.innerHTML = str;
            var prev = document.querySelector(".prev-page");
            var next = document.querySelector(".next-page");
            if(pno == (pageCount-1)){
                next.disabled = true;
            }else if(pno == 0){
                prev.disabled = true;
            }else{
                prev.disabled = false;
                next.disabled = false;
            }
        }
    })   
}

var getPage = function() {
    var page = document.querySelector(".product-page-body>div");
    page.onclick = function(e){
        if(e.target.nodeName=="A"){
            var pno = e.target.innerHTML;
            pno = pno - 1;
        }
        allProducts(pno)
    }
    var prev = document.querySelector(".prev-page");
    prev.onclick = function() {
        var pno = document.querySelector(".product-page-body>div>a.active").innerHTML;
        pno = pno - 2;
        allProducts(pno)
    }
    var next = document.querySelector(".next-page");
    next.onclick = function() {
        var pno = document.querySelector(".product-page-body>div>a.active").innerHTML;
        allProducts(pno)
    }
    var gopage = document.querySelector(".change-page");
    gopage.onclick = function() {
        var gonum = document.querySelector(".product-page-body>input").value;
        if(gonum <= 0){
            return;
        }
        gonum = gonum - 1;
        allProducts(gonum)
    }
}

//商品导航栏
var getCation = function(){
    var url = getUrl()
    if(url == ""){
        ajax({
            type:"get",
            url:"/product/searchnavall",
            success:function(res){
                var {name,brand_name} = res
                var len = name.length
                var lenb = brand_name.length
                var frag = document.createDocumentFragment()
                var fragb = document.createDocumentFragment()
                for(var i=0; i<len; i++){
                    var li = document.createElement("li")
                    var a = document.createElement("a")
                    a.style.cursor = "pointer"
                    a.innerHTML = name[i].name
                    li.appendChild(a)
                    frag.appendChild(li)
                }
                var tab2 = document.querySelector("[data-id=nav_id2]")
                for(var j=0; j<lenb; j++){
                    var li = document.createElement("li")
                    var a = document.createElement("a")
                    a.style.cursor = "pointer"
                    a.innerHTML = brand_name[j].brand_name
                    li.appendChild(a)
                    fragb.appendChild(li)
                }
                var tab3 = document.querySelector("[data-id=nav_id3]")
                tab2.appendChild(frag)
                tab3.appendChild(fragb)
            }
        })
    }else{
        var url_nav = url[0].split("=")
        ajax({
            type:"get",
            url:"/product/searchnav",
            data:{
                fid:url_nav[1]
            },
            success: function(res) {
                var len = res.length
                var arrf = []
                for(var i=0; i<len; i++){
                    var count = 0;
                    for(var key in arrf){
                        if(arrf[key] == res[i].name){
                            count++
                        }
                    }
                    if(count == 0){
                        arrf.push(res[i].name)
                    }
                }
                var arrc = []
                for(var i=0; i<len; i++){
                    var count = 0;
                    for(var key in arrc){
                        if(arrc[key] == res[i].classify_name){
                            count++
                        }
                    }
                    if(count == 0){
                        arrc.push(res[i].classify_name)
                    }
                }
                var arrb = []
                for(var i=0; i<len; i++){
                    var count = 0;
                    for(var key in arrb){
                        if(arrb[key] == res[i].brand_name){
                            count++
                        }
                    }
                    if(count == 0){
                        arrb.push(res[i].brand_name)
                    }
                }
                var li = document.createElement("li")
                var a = document.createElement("a")
                a.innerHTML = arrf[0]
                a.style.cursor = "pointer"
                li.appendChild(a)
                var tab1 = document.querySelector("[data-id=nav_id1]")
                tab1.appendChild(li)
                var fragc = document.createDocumentFragment()
                for(var j=0; j<arrc.length; j++){
                    var li = document.createElement("li")
                    var a = document.createElement("a")
                    a.innerHTML = arrc[j]
                    a.style.cursor = "pointer"
                    li.appendChild(a)
                    fragc.appendChild(li)
                }
                var tab2 = document.querySelector("[data-id=nav_id2]")
                tab2.appendChild(fragc)
                var fragb = document.createDocumentFragment()
                for(var k=0; k<arrb.length; k++){
                    var li = document.createElement("li")
                    var a = document.createElement("a")
                    a.innerHTML = arrb[k]
                    a.style.cursor = "pointer"
                    li.appendChild(a)
                    fragb.appendChild(li)
                }
                var tab3 = document.querySelector("[data-id=nav_id3]")
                tab3.appendChild(fragb)
            }
        })
    }   
}
var removeCation = function(){
    var tab = document.querySelectorAll(".nav-box>ul")
    for(var i=0; i<tab.length; i++){
        var li = tab[i].querySelectorAll("li:not(:first-child)")
        for(var j=0; j<li.length; j++){
            tab[i].removeChild(li[j])
        }
    }
}
//导航栏事件
var navon = function(){
    var navclick = document.querySelectorAll(".nav-box>ul")
    var len0 = navclick[0].children.length
    navclick[0].children[0].children[0].onclick = function(){
        var url = window.location.href
        url = url.split("?")
        history.pushState("","Title",url[0])
        removeCation()
        setTimeout(getCation,100)
        allProducts()
        setTimeout(navon,200)
    }
    if(len0 > 1){
        navclick[0].children[1].children[0].onclick = function(){
            var url = window.location.href
            url = url.split("?")
            ajax({
                type:"get",
                url:"/product/products",
                data:{
                    pname:this.innerHTML
                },
                success:function(res){
                    var result = url[0]+"?fid="+res[0].fid
                    history.pushState("","Title",result)
                    allProducts()
                }
            })
        }
    }
    for(var i=1; i<navclick[1].children.length; i++){
        navclick[1].children[i].children[0].onclick = function(e){
            var url = window.location.href
            url = url.split("?")
            var len1 = url.length
            if(len1 == 1){
                ajax({
                    type:"get",
                    url:"/product/products",
                    data:{
                        pname:encodeURIComponent(this.innerHTML)
                    },
                    success:function(res){
                        var result = url[0]+"?fid="+res[0].fid
                        history.pushState("","Title",result)
                        removeCation()
                        setTimeout(getCation,100)
                        allProducts()
                        setTimeout(navon,200)
                    }
                })
            }
        }
    }
    
}

window.onload = function(){
    allProducts()
    setTimeout(getCation,100)
    setTimeout(navon,200)
    setTimeout(getPage,200)
}