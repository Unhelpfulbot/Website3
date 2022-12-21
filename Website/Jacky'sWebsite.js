var current = "Profile";
var current2 = "Profile2";
function changename(newname, id){
    document.getElementById(id).innerHTML = newname;
}
function changeinfo(newinfo, newinfo2){
    var newpage = newinfo + "page";
    var currentpage = current + "page";
    var newpage2 = newinfo2 + "page";
    var currentpage2 = current2 + "page";
    if(currentpage == newpage){
        return;
    }
    document.getElementById("MHead").innerHTML = newinfo;
    document.getElementById(currentpage).style.display = "none";
    if(current2 != null){
        document.getElementById(currentpage2).style.display = "none";
    }
    document.getElementById(current).style.filter = "blur(0px)";
    document.getElementById(current).style.borderColor = "black";
    document.getElementById(newpage).style.display = "flex";
    document.getElementById(newinfo).style.filter = "blur(1px)";
    document.getElementById(newinfo).style.borderColor = "blue";
    current = newinfo;
    if(newpage2 == null){
        return;
    }
    else{
        document.getElementById(newpage2).style.display = "block";
        current2 = newinfo2;
    }
}

function openitem(current,item,id){
    document.getElementById(item).style.display = "flex";
    document.getElementById(current).style.display = "none";
}
