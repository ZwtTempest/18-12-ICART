/**
 * Created by web on 2018-09-22.
 */
function registerEmail(){
    var tel = getID("tel-active");
    tel.className = "";
    var email = getID("email-active");
    email.className = "register-active";
    var telbody = getID("register-tel");
    telbody.style.display = "none";
    var emailbody = getID("register-email");
    emailbody.style.display = "block";
    getYzme();
}
function registerTel(){
    var tel = getID("tel-active");
    tel.className = "register-active";
    var email = getID("email-active");
    email.className = "";
    var telbody = getID("register-tel");
    telbody.style.display = "block";
    var emailbody = getID("register-email");
    emailbody.style.display = "none";
}
function getLogin(){
    var reg = getID("register-reg");
    reg.style.display = "none";
    var header_register = getID("register");
    header_register.className = "";
    var header_login = getID("header-login");
    header_login.className = "header-active";
    var reg_login = getID("login");
    reg_login.style.display = "block";
    reg_login.style.position = "static"
}
function loginClose(){
    var reg_login = getID("login");
    reg_login.style.display = "none";
    var header_login = getID("header-login");
    header_login.className = "";
    var header_register = getID("register");
    header_register.className = "header-active";
    var reg = getID("register-reg");
    reg.style.display = "block";
}

function getYzm(){
    var yzm = document.getElementById("yzm");
    var ctx = yzm.getContext("2d");
    ctx.fillStyle = rc(180,233);
    ctx.fillRect(0,0,120,38);
    var pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    var str = "";
    function rn(min,max){
        var n = Math.random()*(max-min)+min;
        return Math.floor(n);
    }
    function rc(min,max){
        var r = rn(min,max);
        var g = rn(min,max);
        var b = rn(min,max);
        return `rgb(${r},${g},${b})`;
    }
    for(var i=0; i<4; i++){
        var c = pool[rn(0,pool.length)];
        ctx.textBaseline = "top";
        ctx.fillStyle = rc(30,180);
        ctx.font = "30px SimHei";
        ctx.fillText(c,i*25+5,5);
        str += c;
    }
    for(var i=0; i<5; i++){
        ctx.beginPath();
        ctx.strokeStyle = rc(0,255);
        ctx.moveTo(rn(0,120),rn(0,38));
        ctx.lineTo(rn(0,120),rn(0,38));
        ctx.stroke();
    }
    for(var i=0; i<20; i++){
        ctx.fillStyle = rc(0,255);
        ctx.beginPath();
        ctx.arc(rn(0,120),rn(0,38),1,0,360*Math.PI/180);
        ctx.fill();
    }
}
function getYzme(){
    var eyzm = document.getElementById("eyzm");
    var ctx = eyzm.getContext("2d");
    ctx.fillStyle = rc(180,233);
    ctx.fillRect(0,0,120,38);
    var pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    var str = "";
    function rn(min,max){
        var n = Math.random()*(max-min)+min;
        return Math.floor(n);
    }
    function rc(min,max){
        var r = rn(min,max);
        var g = rn(min,max);
        var b = rn(min,max);
        return `rgb(${r},${g},${b})`;
    }
    for(var i=0; i<4; i++){
        var c = pool[rn(0,pool.length)];
        ctx.textBaseline = "top";
        ctx.fillStyle = rc(30,180);
        ctx.font = "30px SimHei";
        ctx.fillText(c,i*25+5,5);
        str += c;
    }
    for(var i=0; i<5; i++){
        ctx.beginPath();
        ctx.strokeStyle = rc(0,255);
        ctx.moveTo(rn(0,120),rn(0,38));
        ctx.lineTo(rn(0,120),rn(0,38));
        ctx.stroke();
    }
    for(var i=0; i<20; i++){
        ctx.fillStyle = rc(0,255);
        ctx.beginPath();
        ctx.arc(rn(0,120),rn(0,38),1,0,360*Math.PI/180);
        ctx.fill();
    }
}

window.onload = function() {
    setTimeout(getHover,10);
    setTimeout(getYzm,10);
}
