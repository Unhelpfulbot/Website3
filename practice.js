current = "home";

function changepage(change){
    if(current === change){
        return;
    }
    else{
        currentp = current + "page";
        changep = change + "page";
        document.getElementsByClassName(currentp).style.display = "none";
        document.getElementsByClassName(changep).style.display = "flex";
        document.getElementById(changep).style.filter = "invert(70%)";
        document.getElementById(changep).style.border = "black solid 4px";
        document.getElementById(changep).style.borderRadius = "25px";
        document.getElementById(currentp).style.filter = "invert(0%)"
        document.getElementById(currentp).style.border = "none";
        current = change;
    }
}


