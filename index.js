

// var random1 = (Math.random()*6)+1;
// randomNumber1 = Math.floor(random1);

// var randomImage1 = "dice-"+randomNumber1;

// var playerOneImage = "images/"+ randomImage1 + ".png";

// document.querySelectorAll("img")[0].setAttribute("src",playerOneImage);
// // -----------------------------------------------------------
// var random2 = (Math.random()*6)+1;
// var randomNumber2 = Math.floor(random2);
// var randomImage2 = "dice-"+randomNumber2;
// var playerTwoImage = "images/"+randomImage2 +".png";
// document.querySelectorAll("img")[1].setAttribute("src",playerTwoImage);

// //-----------------------------------------------------------
// if (randomImage1 > randomImage2){
// 	document.querySelector("h1").innerHTML ="player1 Win";
// }else if(randomImage2 > randomImage1)
// {
// 	document.querySelector("h1").innerHTML ="player2 Win";
// }else
// {
// 	document.querySelector("h1").innerHTML ="Draw";

// }
document.querySelector("h1").addEventListener("click",function(){
	alert("you just clicked my h1 text !");
});

document.addEventListener("click",function(event){
		console.log(event);
});

document.addEventListener("keypress",function(event){
	alert("you just pressed a key :"+event.key);
});

