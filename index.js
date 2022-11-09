/*for dice1*/
var randomnumber1= Math.floor(Math.random()*6+1);
var randomdiceimg= "dice"+randomnumber1+".png";
var randomimgsrc="images/"+randomdiceimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute('src', randomimgsrc);


/*for dice2*/

var randomnumber2= Math.floor(Math.random()*6+1);
var randomdiceimg2= "dice"+randomnumber2+".png";
var randomimgsrc2="images/"+randomdiceimg2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute('src', randomimgsrc2);

/* Result conditions*/
if(randomnumber1>randomnumber2)
document.querySelector("h1").innerHTML=" PLAYER 1 IS WINNER";
else if(randomnumber1<randomnumber2)
document.querySelector("h1").innerHTML=" PLAYER 2 IS WINNER";
else
document.querySelector("h1").innerHTML=" Game is Draw";


