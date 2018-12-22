/**
 * Created by web on 2018-09-18.
 */

//弹出登录框
function getLogin(){
	var home = getID("home");
	home.className = "";
	var header_login = getID("header-login");
	header_login.className = "header-active";
	var Mask = getID("mask");
	Mask.style.display = "block";
}

//关闭登录框
function loginClose(){
	var home = getID("home");
	home.className = "header-active";
	var header_login = getID("header-login");
	header_login.className = "";
	var Mask = getID("mask");
	Mask.style.display = "none";
}

//用户登录
function userLogin(){
	var uname = getID("uname");
	var name_value = uname.value;
	var reg = /^[\w_-]+@[\w_-]+(\.[\w]+)+$|^\d{11}$/;
	var isTip = reg.test(name_value);
	var upwd = getID("upwd").value;
	if(!isTip){
		var span = uname.parentNode.children[3];
		span.style.display = "inline";
		uname.style.border = "1px solid #f00";
	}else{
		ajax({
			type:"post",
			url:"/user/login",
			data:{
				uname:name_value,
				upwd:upwd
			},
			success: function(res) {
				if(res.msg==0){
					var pwd_tips = document.querySelector("[data-id=pwd-tips]");
					pwd_tips.style.display = "block";
					pwd_tips.style.opacity = "1";
					pwd_tips.style.transition = "all 1.5s linear";
					setTimeout(
						function(){
							pwd_tips.style.opacity = "0";
						},
						500
					);
					setTimeout(
						function(){
							pwd_tips.style.display = "none";
						},
						2000
					);
				}else{
					var Mask = getID("mask");
					Mask.style.display = "none";
					var name = getID("user-name");
					name.innerHTML = res[0].uname;
					var header_right = getID("index-header-right");
					header_right.style.display = "none";
					var header_login = getID("index-header-login");
					header_login.style.display = "block";
					var home = getID("home");
					home.className = "header-active";
				}
			}
		})
	}
}
var Login_tips = function(){
	var uname = getID("uname");
	var name_value = uname.value;
	var reg = /^[\w_-]+@[\w_-]+(\.[\w]+)+$|^\d{11}$/;
	var isTip = reg.test(name_value);
	var span = uname.parentNode.children[3];
	if(!isTip){	
		span.style.display = "inline";
		uname.style.border = "1px solid #f00";
		uname.style.outline = "none";
	}else{
		uname.style.border = "1px solid #bbb";
		uname.style.outline = "";
		span.style.display = "none";
	}
}

//轮播图
var wrapper = function(){
	var wrapper_box = getID("warpper-img");
	var as = wrapper_box.children; //0~3 a
	var divs = getClassName("changePhoto");
	for(var i=0; i<4; i++){
		if(as[i].style.display=="block" && i<3){
			as[i].style.display = "none";
			as[i+1].style.display = "block";
			wrapper_box.style.background = "url(img/banner"+(i+2)+".jpg)";
			for(var j=0; j<divs.length; j++){
				divs[j].style.transition = "all 0.3s linear "+(j*0.1)+"s";
                divs[j].style.transform = "rotate3d(0,1,0,180deg)";
				divs[j].style.opacity = "0";
			}
			setTimeout(resetWrapper,2000);
			return;
		}else if(as[i].style.display=="block" && i==3){
			as[i].style.display = "none";
			as[0].style.display = "block";
			wrapper_box.style.background = "url(img/banner1.jpg)";
			for(var j=0; j<divs.length; j++){
				divs[j].style.transition = "all 0.3s linear "+(j*0.1)+"s";
                divs[j].style.transform = "rotate3d(0,1,0,180deg)";
				divs[j].style.opacity = "0";
			}
			setTimeout(resetWrapper,2000);
			return;
		}
	}
}
var resetWrapper = function(){
	var wrapper_box = getID("warpper-img");
	var as = wrapper_box.children;
	var divs = getClassName("changePhoto");
	for(var i=0; i<divs.length; i++){
		divs[i].style.transition = "";
		divs[i].style.transform = "";
		divs[i].style.opacity = "1";
		divs[i].style.background = wrapper_box.style.background+" "+(i*(-96))+"px 0 no-repeat";
	}
}

//跳转到商品详情页
var goSearch = function(){
	var nav_ul = getID("nav-ul");
	var nav_ul_li = nav_ul.children;
	for(var i=0; i<nav_ul_li.length; i++){
		nav_ul_li[i].children[0].onclick = function(){
			ajax({
				type:"get",
				url:"/product/products",
				data:{
					pname:this.innerHTML
				},
				success: function(res) {
					window.location.href = "search.html?fid="+res[0].fid;
				}
			})
		}
	}
	var nav_ul_li_div = nav_ul.querySelectorAll("li>div>ul>li>a")
	for(var j=0; j<nav_ul_li_div.length; j++){
		nav_ul_li_div[j].onclick = function(){
			ajax({
				type:"get",
				url:"/product/pclassify",
				data:{
					pname:this.innerHTML
				},
				success: function(res) {
					window.location.href = "search.html?fid="+res[0].fid+"&cid="+res[0].cid
				}
			})
		}
	}
}

window.onload = function(){
	setTimeout(getHover,10);
	setInterval(wrapper,5000);
	setTimeout(goSearch,1);
}