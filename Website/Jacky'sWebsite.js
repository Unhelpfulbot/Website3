var current = "Profile";
var current2 = "Profile2";
var edupage = "blank";
var totalproj = 6;
var count = 0;
var currentproj = "project0";

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

function openitem(current,item){
    document.getElementById(item).style.display = "flex";
    document.getElementById(current).style.display = "none";
}

function openitem2(currents, currents2, item, item2){
    document.getElementById(item).style.display = "block";
    document.getElementById(currents).style.display = "none";
    document.getElementById(item2).style.display = "block";
    document.getElementById(currents2).style.display = "none";
    document.getElementById("lock").style.display = "none";
    document.getElementById("leftarrow").style.display = "block";
    document.getElementById("rightarrow").style.display = "block";
}

function changeeduinfo(info){
    document.getElementById("eduprompt").innerHTML = info;
    document.getElementById(edupage).style.display = "none";
    document.getElementById(info).style.display = "block";
    edupage = info;
}

function addone(){
    document.getElementById(currentproj).style.display = "none"
    count += 1;
    if(count > totalproj){
        count = 1;
    }
    var proj = "project" + count;
    document.getElementById(proj).style.display = "block"
    currentproj = proj;
}

function subtractone(){
    document.getElementById(currentproj).style.display = "none"
    count -= 1;
    if(count <= 0){
        count = totalproj;
    }
    var proj = "project" + count;
    document.getElementById(proj).style.display = "block"
    currentproj = proj;
}
