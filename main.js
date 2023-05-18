var current = "home";
var num = 0;

function changepage(change){
    if(current === change){
        return;
    }
    else{
        currentp = current + "page";
        changep = change + "page";
        document.getElementById(currentp).style.display = "none";
        document.getElementById(changep).style.display = "flex";
        document.getElementById(change).style.filter = "invert(70%)";
        document.getElementById(change).style.border = "black solid 4px";
        document.getElementById(change).style.borderRadius = "25px";
        document.getElementById(current).style.filter = "invert(0%)"
        document.getElementById(current).style.border = "none";
        document.getElementById(current).style.borderRadius = "0px";
        current = change;
    }
}

function nextproject(){
    num += 1;
    if(num >= projects.length){
        num = 0;
    }
    changeproject(num);
}

function prevproject(){
    num -= 1;
    if(num < 0){
        num = projects.length - 1;
    }
    changeproject(num);
}

function changeproject(i){
    if(projects[i].link == "N/A"){
        link = "";
    }
    else{
        link = "<a href=" + projects[i].link + ">Link</a><br>";
    }
    description = projects[i].date + '<br>' + link + projects[i].desc;
    document.getElementById("project-name").innerHTML = projects[i].name;
    document.getElementById("project-text").innerHTML = description;
    document.getElementById("project-img").src = projects[i].img;
    document.getElementById("project-desc").style.display = "none";
    document.getElementById("project-desc-pull").style.display = "block";
}

function pulldesc(){
    document.getElementById("project-desc").style.display = "flex";
    document.getElementById("project-desc-pull").style.display = "none";
}


var currentschool = "";

function changeschool(newid){
    if(currentschool != ""){
        document.getElementById(currentschool).style.background = "rgba(106, 106, 106, 0.533)";
    }
    document.getElementById(newid).style.background = "rgba(67, 67, 67, 0.874";
    for( i = 0; i < schools.length; i++){
        if(schools[i].id == newid){
            document.getElementById("schoollogo").src = schools[i].img;
            document.getElementById("schoolname").innerHTML = schools[i].name;
            document.getElementById("schooldesc").innerHTML = schools[i].desc;
            document.getElementById("schoolclass").innerHTML = "Classes Taken: <br>" + schools[i].class
            currentschool = newid;
        }
    }
}

var currentresume = "resumes";

function changeresume(newid){
    if(currentresume == newid){
        return;
    }
    for( i = 0; i < upload.length; i++){
        if(upload[i].id == newid){
            document.getElementById("display").src = upload[i].url;
            document.getElementById(newid).style.background = "rgb(46, 46, 46)";
            document.getElementById(newid).style.borderLeft = "none";
            document.getElementById(currentresume).style.background = "rgb(146, 146, 146)";
            document.getElementById(currentresume).style.borderLeft = "solid black 4px";
        }
    }
    currentresume = newid;
}


function changeskillinfo(name){
    for( i = 0; i < skills.length; i++){
        if(skills[i].skill == name){
            document.getElementById("skillname").innerHTML = skills[i].skill;
            document.getElementById("skillinfo").innerHTML = skills[i].desc;
            document.getElementById("skillimg").src = skills[i].img;
        }
    }
}

function sendmessage(){
    var name = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value;
    var phone = document.getElementById("phone-input").value;
    var message = document.getElementById("message-input").value;
    const emailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneformat = /^\+?[1-9][0-9]{7,14}$/;
    if(name == ""|| email == ""|| message == ""){
        alert("At least one of the required section is left back. Please fill out the required sections (*).");
        return;
    }
    if(!emailformat.test(email)){
        alert("Email is not in the right format");
        return;
    }
    if(phone == ""){
        phonenum = "";
    }
    else{
        if (!phoneformat.test(phone))
        {
            alert("Phone number is not in the right format");
            return;
        }
        phonenum = "\nPhone Number: " + phone;
    }
    feedback = "Email Address: " + email + phonenum + "\nMessage: " + message;
    document.location.href = "mailto:jackychen0422s@gmail.com?subject="
        + encodeURIComponent("Message From Website sent by: " + name)
        + "&body=" + encodeURIComponent(feedback) 
    ;
    document.getElementById("name-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("phone-input").value = "";
    document.getElementById("message-input").value = "";
    alert("Press the send button from the email app that has opened and I will respond in 2 to 3 days");
}

var lmode = true;
function changefilter(){
    if(lmode){
        document.getElementById("slider").innerHTML = "LIGHT";
        document.getElementById("slider").style.marginLeft = "0px";
        document.getElementById("slider").style.background = "#ffff00";
        document.getElementById("slider").style.color = "black";
        document.getElementById("flexbox").style.background = "rgb(131, 131, 131)";
        document.getElementById("setting-frame").style.filter = "brightness(60%)";
        lmode = false;
    }
    else{
        document.getElementById("slider").innerHTML = "DARK";
        document.getElementById("slider").style.marginLeft = "150px";
        document.getElementById("slider").style.background = "#282727";
        document.getElementById("slider").style.color = "white";
        document.getElementById("flexbox").style.background = "rgb(77, 80, 86)";
        document.getElementById("setting-frame").style.filter = "brightness(100%)";
        
        lmode = true;
    }
    document.getElementById("light-filter").style.color = "black";
        document.getElementById("reminder").style.color = "black";
    
}

function loginchange(){
    document.getElementById("setting-button-container").style.display = "none";
    document.getElementById("light-container").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("reminder").style.display = "none";
    document.getElementById("login").style.display = "flex";
}

function signupchange(){
    document.getElementById("setting-button-container").style.display = "none";
    document.getElementById("light-container").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("reminder").style.display = "none";
    document.getElementById("signup").style.display = "flex";
}

function backtosetting(page){
    document.getElementById(page).style.display = "none";
    document.getElementById("light-container").style.display = "flex";
    document.getElementById("setting-button-container").style.display = "flex";
    document.getElementById("reminder").style.display = "block";
    document.getElementById("timer").style.display = "block";
}

function login(){
    acc = false;
    user = document.getElementById("user-inputl").value;
    pass = document.getElementById("pass-inputl").value;
    for( i = 0; i < accounts.length; i++){
        if(user == accounts[i].user){
            if((pass) == accounts[i].pass){
                alert("Welcome " + accounts[i].name + ", you have successfully logged in.")
                document.getElementById("name-input").value = accounts[i].name;
                document.getElementById("email-input").value = accounts[i].email;
                document.getElementById("phone-input").value = accounts[i].phone;
                acc = true;
                document.getElementById("user-inputl").value = "";
                document.getElementById("pass-inputl").value = "";
            }
        }
    }
    if(!acc){
        alert("Check your username and password, they are case sensitive");
    }
}

function signup(){
    user = document.getElementById("user-inputs").value;
    pass = document.getElementById("pass-inputs").value;
    pass2 = document.getElementById("pass-inputs2").value;
    email = document.getElementById("email-inputs").value;
    phone = document.getElementById("phone-inputs").value;
    names = document.getElementById("name-inputs").value;
    acclength = accounts.length;
    const emailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneformat = /^\+?[1-9][0-9]{7,14}$/;
    if(user == ""|| pass == ""|| email =="" || phone == ""|| names == ""){
        alert("You have left at least one of the field blank, please fill out each part");
        return;
    }
    else if(!emailformat.test(email)){
        alert("Email is not in the right format");
        return;
    }
    else if(!phoneformat.test(phone)){
        alert("Phone number is not in the right format");
        return;
    }
    else if(pass != pass2){
        alert("Passwords do not match");
        return;
    }
    for (i = 0; i < acclength; i++)
    {
        if(accounts[i].user == user){
            alert("Username has been taken");
            return;
        }
    }
    accounts.push({
        name: names,
        user: user,
        pass: pass,
        email: email,
        phone: phone,
    })
    alert("Sign Up has been completed");
    document.getElementById("user-inputs").value = "";
    document.getElementById("pass-inputs").value = "";
    document.getElementById("pass-inputs2").value = "";
    document.getElementById("email-inputs").value = "";
    document.getElementById("phone-inputs").value = "";
    document.getElementById("name-inputs").value = "";
}

setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("timer").innerHTML = date.toLocaleTimeString();
}

var blocksize = 25;
var row = 20;
var col = 20;
var board;
var context;

var snakeX = blocksize * Math.floor(Math.random() * 20);
var snakeY = blocksize * Math.floor(Math.random() * 20);

var randX;
var randY; 

var foodX;
var foodY;

var transX;
var transY;

var trans = false;

var velX = 0;
var velY = 0;

var snakeBody = [];

var gameOver = false;

var stopmin;
var stopsec;
var stopms;

var facts = [];
var listnum = [];

window.onload = function(){
    board = document.getElementById("map");
    board.height = row * blocksize;
    board.width = col * blocksize;
    context = board.getContext("2d");

    foodplace();
    transparentplace();
    
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 100);
}


const bulb = new Image();
bulb.src = "lightbulb.png";

const potion = new Image();
potion.src = "bluepotion.png";

function update(){
    if(gameOver){
        return;
    }
    currentmin = new Date().getMinutes();
    currentsec = new Date().getSeconds();
    currentmilisec = new Date().getMilliseconds();

    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.drawImage(bulb, foodX, foodY, blocksize, blocksize);
    context.drawImage(potion, transX, transY, blocksize, blocksize);

    if((currentsec == stopsec) && (currentmin == stopmin)){
        console.log("false ran");
        trans = false;
    }

    if(snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX, foodY])
        foodplace();
        var message = "";
        addfact();
        for(i = 0; i < facts.length; i++){
            message += (i + 1) + ". " + facts[i] + "<br>";
        }
        document.getElementById("facts").innerHTML = message;
    }

    if(snakeX == transX && snakeY == transY){
        stopmin = currentmin;
        if(currentsec + 5 >= 60){
            stopmin += 1;
            stopsec = currentsec - 55;
        }
        else{
            stopsec = currentsec + 5;
        }
        trans = true;
        transX = -50;
        transY = -50;
        setTimeout(transparentplace, 10000);
    }

    for (let i = snakeBody.length - 1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if(snakeBody.length){
        snakeBody[0] = [snakeX, snakeY];
    }

    if(!trans){
        context.fillStyle = "lime";
    }
    else{
        context.fillStyle = "blue";
    }


    snakeX += velX * blocksize;
    snakeY += velY * blocksize;
    context.fillRect(snakeX, snakeY, blocksize, blocksize);
    for( let i = 0; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blocksize, blocksize);
    }

    if(snakeX > 500 || snakeY > 500 || snakeX < 0 || snakeY < 0){
        gameOver = true;
        alert("Game Over");
        document.getElementById("reset").style.display = "block";
    }
    for (let i = 0; i< snakeBody.length; i++){
        if(trans){
            return;
        }
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
            gameOver = true;
            alert("Game Over");
            document.getElementById("reset").style.display = "block";
        }
    }
}

function foodplace(){
    foodX = blocksize * Math.floor(Math.random() * 20);
    foodY = blocksize * Math.floor(Math.random() * 20);
    context.drawImage(bulb, foodX, foodY, blocksize, blocksize);
}

function transparentplace(){
    transX = blocksize * Math.floor(Math.random() * 20);
    transY = blocksize * Math.floor(Math.random() * 20);
    context.drawImage(potion, transX, transY, blocksize, blocksize);
}

function addfact(){
    var i = Math.ceil(Math.random() * fact.length);
    for (j = 0; j < listnum.length; j++){
        if(i == listnum[j]){
            addfact();
        }
    }
    facts.push(fact[i]);
    listnum.push[i];
}

function changeDirection(e){
    if(snakeBody.length == 0){
        if(e.code == "KeyW" || e.code == "ArrowUp")
        {
            velX = 0;
            velY = -1;
        }
        else if(e.code == "KeyA" || e.code == "ArrowLeft"){
            velX = -1;
            velY = 0;
        }
        else if(e.code == "KeyD" || e.code == "ArrowRight"){
            velX = 1;
            velY = 0;
        }
        else if(e.code == "KeyS" || e.code == "ArrowDown"){
            velX = 0;
            velY = 1;
        }
    }
    else{
        if(velX == 0){
            if(e.code == "KeyA" || e.code == "ArrowLeft"){
                velX = -1;
                velY = 0;
            }
            else if(e.code == "KeyD" || e.code == "ArrowRight"){
                velX = 1;
                velY = 0;
            }
        }
        else if (velY == 0){
            if(e.code == "KeyW" || e.code == "ArrowUp"){
                velX = 0;
                velY = -1;
            }
            else if(e.code == "KeyS" || e.code == "ArrowDown"){
                velX = 0;
                velY = 1;
            }
        }
    }
}

function reset(){
    gameOver = false;
    velX = 0;
    velY = 0;
    snakeBody = [];
    facts = [];
    listnum = [];
    context.fillStyle = "lime";
    snakeX = blocksize * Math.floor(Math.random() * 20);
    snakeY =blocksize * Math.floor(Math.random() * 20);
    context.fillRect(snakeX, snakeY, blocksize, blocksize);
    document.getElementById("reset").style.display = "none";
}
