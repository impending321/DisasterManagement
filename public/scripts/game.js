var score=0
var count=0
function change(elementClass){   
    score=score+1; 
    var element3=document.getElementsByClassName("scoreBoard");
    element3[0].innerHTML="Score "+score
    console.log("Working fine")
    var element=document.getElementsByClassName(elementClass)
    console.log(element)
    element[0].style.left="-90%";
    element[0].style.top="64%";
    element[0].style.transition="3s"
    var audio1=new Audio("click.mpeg");
    audio1.play();    
    
    if(score==4){
        (displayScore(elementClass));
    }
}
function openDoor(element1Class,element2Class,element3Class){
    var elementN=document.getElementsByClassName("finalScore1");
    elementN[0].style.display="none";
    var element1=document.getElementsByClassName(element1Class);
    var element2=document.getElementsByClassName(element2Class);
    var element3=document.getElementsByClassName(element3Class);
    element3[0].innerHTML="Score "+score
    // element3[0].style.left="5%"
    // element3[0].style.top="30%"
    element2[0].style.display="none";
    element1[0].style.display="block"
    var audio1=new Audio("click.mpeg");
    audio1.play();
}
function displayScore(elementClass){
    var tempElement=document.getElementsByClassName(elementClass);
    tempElement[0].style.left="32%";
    tempElement[0].style.top="60%";
    tempElement[0].style.transition="3s"
    var audio2=new Audio("end.mpeg");
    audio2.play()
    var element=document.getElementsByClassName("finalScore1");
    element[0].style.display="block";
    var element3=document.getElementsByClassName("scoreBoard");
    element3[0].innerHTML="Restart !"
    var bottle=document.getElementsByClassName("bottle");
    var rope=document.getElementsByClassName("rope");
    var firstAid=document.getElementsByClassName("firstAid");
    var torch=document.getElementsByClassName("flashLight");
    bottle[0].style.left="12%";
    bottle[0].style.top="65%";
    bottle[0].style.transition="5s";
    rope[0].style.left="66%";
    rope[0].style.top="52%";
    rope[0].style.transition="5s";
    firstAid[0].style.left="22%";
    firstAid[0].style.top="50%";
    firstAid[0].style.transition="5s";
    torch[0].style.left="69%";
    torch[0].style.top="69%";
    torch[0].style.transition="5s";
    score=0
    var alert=document.getElementsByClassName("alert")
    alert[0].innerHTML="Yay! You Passed Round 1 Click Next For Next Level  <button  type='button'  class='btn btn-secondary'>Next!</button>"
}

function wrong(){
    var bottle=document.getElementsByClassName("bottle");
    var rope=document.getElementsByClassName("rope");
    var firstAid=document.getElementsByClassName("firstAid");
    var torch=document.getElementsByClassName("flashLight");
    bottle[0].style.left="12%";
    bottle[0].style.top="65%";
    bottle[0].style.transition="5s";
    rope[0].style.left="66%";
    rope[0].style.top="52%";
    rope[0].style.transition="5s";
    firstAid[0].style.left="22%";
    firstAid[0].style.top="50%";
    firstAid[0].style.transition="5s";
    torch[0].style.left="69%";
    torch[0].style.top="69%";
    torch[0].style.transition="5s";
    score=0
    var element3=document.getElementsByClassName("scoreBoard");
    element3[0].innerHTML="Restart!"
    element3[0].style.font="2px"
    updateInfo();
}
function updateInfo(){
    var element=document.getElementsByClassName("alert alert-info");
    element[0].innerHTML="Select The Things You Will Keep During Emergency Conditions Only. Start The Game By Clicking Click Here On Screen ";
}