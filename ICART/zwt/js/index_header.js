/**
 * Created by web on 2018-09-21.
 */
/**ͷ�����������ɫ�¼�**/
function getHover(){
    var a = location.href;
    var b = a.split("/");
    var c = b[(b.length-1)];
    if(c == "register.html"){
        var a_id = getID("register");
        a_id.className = "header-active";
    }
    if(c == "index.html"){
        var a_id = getID("home");
        a_id.className = "header-active";
    }
}

