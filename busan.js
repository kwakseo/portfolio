var fast = 500;
var pace = 2000;
var move_factor = 150;
var screen = document.getElementById("screen");
var dialogue = document.getElementById("dialogue");
var whitebox = document.getElementById("white_box");
var default_font_size = "70px";
var onsplash = true;
var veins1 = 0;
var veins2 = 0;
var veins3 = 0;
var veins4 = 0;

window.onload = function() {
	// screen.style.backgroundColor = "#263547";
 	splash();
 	createImage("veins1", "busan_images/veins1.png", "1300px");
 	createImage("veins2", "busan_images/veins2.png", "1300px");
 	createImage("veins3", "busan_images/veins3.png", "1300px");
 	createImage("veins4", "busan_images/veins4.png", "1300px");
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32 && splash){
        page1();
    }
}

function createImage(id, src, width) {
  var x = document.createElement("img");
  x.setAttribute("src", src);
  x.setAttribute("width", width);
  x.id = id;
  x.style.display = "none";
  screen.appendChild(x);
}

function splash() {
	onsplash = true;
	screen.style.display = "none";
	document.getElementById("splash").style.display = "flex";
}

function page1() {
	
	document.getElementById("splash").style.display = "none";
	document.body.style.backgroundColor = "#000000";
	document.getElementById("background").style.backgroundColor = "#000000";
	setTimeout(page2, pace);
	screen.style.width = "1020px";
	screen.style.height = "700px";
	onsplash = false;
}

function page2() {
	whitebox.style.display = "flex";
	dialogue.style.display = "block";
	dialogue.style.left = "0";
	whitebox.style.opacity = 1;
	document.body.style.backgroundColor = "#000000";
	screen.style.backgroundColor = "#000000";
	screen.style.display = "flex";
	dialogue.innerHTML = "가지마, 내가 잘못했어!";
	setTimeout(page3, pace);
}

function page3() {

	screen.style.backgroundColor = "#0d1823";
	dialogue.innerHTML = "아빠 가지마...";
	setTimeout(page4, pace);
}

function page4() {

	dialogue.innerHTML = "가지마...";
	setTimeout(page5, pace);
}

function page5() {
	screen.style.backgroundColor = "#192b38";
	dialogue.innerHTML = "재발...";
	setTimeout(page6, pace);
}

function page6() {
	dialogue.innerHTML = "가지마...";
	setTimeout(page7, pace);
}

function page7() {
	screen.style.backgroundColor = "#203744";
	dialogue.innerHTML = "나랑 같이 있어...";
	setTimeout(page8, pace);
}

function page8() {
	dialogue.innerHTML = "가지마...";
	setTimeout(page9, pace);
}

function page9() {
	screen.style.backgroundColor = "#334c60";
	whitebox.style.left = String(move_factor)+"px";
	dialogue.innerHTML = "아빠!";
	dialogue.style.fontSize = "100px";
	setTimeout(page10, pace);
}

function page10() {
	whitebox.style.left = String(move_factor*2)+"px";
	dialogue.innerHTML = "아빠! 안돼!";
	dialogue.style.fontSize = "130px";
	setTimeout(page11, pace);
}

function page11() {
	screen.style.backgroundColor = "#3a576b";
	whitebox.style.left = String(move_factor*3.8)+"px";
	dialogue.innerHTML = "아빠!";
	dialogue.style.fontSize = "160px";
	setTimeout(page12, pace);
}

function page12() {
	whitebox.style.left = String(move_factor*5.5)+"px";
	dialogue.innerHTML = "안돼!";
	dialogue.style.fontSize = "190px";
	setTimeout(page13, pace);
}

function page13() {
	screen.style.backgroundColor = "#426477";
	whitebox.style.display = "none";
	dialogue.style.display = "none";
	setTimeout(page14, pace);
}

function page14() {
	document.getElementById("veins1").style.display = "block";
	setTimeout(page15, fast);
}

function page15() {
	document.getElementById("veins1").style.display = "none";
	setTimeout(page16, fast);
}

function page16() {
	whitebox.style.left = "0";
	whitebox.style.opacity = 0.1;
	dialogue.innerHTML = "아빠...";
	dialogue.style.fontSize = default_font_size;
	whitebox.style.display = "flex";
	dialogue.style.display = "flex";
	setTimeout(page17, fast);
}

function page17() {
	whitebox.style.opacity = 0.2;
	setTimeout(page18, fast);
}

function page18() {
	whitebox.style.opacity = 0.3;
	setTimeout(page19, fast);
}

function page19() {
	whitebox.style.opacity = 0.2;
	setTimeout(page20, fast);
}

function page20() {
	whitebox.style.opacity = 0.1;
	setTimeout(page21, fast);
}

function page21() {
	whitebox.style.display = "none";
	setTimeout(page22, fast);
}

function page22() {
	screen.style.backgroundColor = "#4c7f93";
	setTimeout(page23, pace);	
}

function page23() {
	document.getElementById("veins2").style.display = "block";
	setTimeout(page24, fast);
}

function page24() {
	document.getElementById("veins2").style.display = "none";
	setTimeout(page25, fast);
}

function page25() {
	whitebox.style.opacity = 0.1;
	dialogue.innerHTML = "가지마...";
	whitebox.style.display = "flex";
	dialogue.style.display = "flex";
	setTimeout(page26, fast);
}

function page26() {
	whitebox.style.opacity = 0.2;
	setTimeout(page27, fast);
}

function page27() {
	whitebox.style.opacity = 0.3;
	setTimeout(page28, fast);
}

function page28() {
	whitebox.style.opacity = 0.2;
	setTimeout(page29, fast);
}

function page29() {
	whitebox.style.opacity = 0.1;
	setTimeout(page30, fast);
}

function page30() {
	whitebox.style.display = "none";
	setTimeout(page31, fast);
}

function page31() {
	screen.style.backgroundColor = "#5f91a3";
	setTimeout(page32, pace);
}

function page32() {
	document.getElementById("veins3").style.display = "block";
	setTimeout(page33, fast);
}

function page33() {
	document.getElementById("veins3").style.display = "none";
	setTimeout(page34, fast);
}

function page34() {
	whitebox.style.opacity = 0.1;
	dialogue.innerHTML = "재발...";
	whitebox.style.display = "flex";
	dialogue.style.display = "flex";
	setTimeout(page35, fast);
}

function page35() {
	whitebox.style.opacity = 0.2;
	setTimeout(page36, fast);
}

function page36() {
	whitebox.style.opacity = 0.3;
	setTimeout(page37, fast);
}

function page37() {
	whitebox.style.opacity = 0.2;
	setTimeout(page38, fast);
}

function page38() {
	whitebox.style.opacity = 0.1;
	setTimeout(page39, fast);
}

function page39() {
	whitebox.style.display = "none";
	setTimeout(page40, fast);
}

function page40() {
	screen.style.backgroundColor = "#6da1af";
	setTimeout(page41, pace);
}

function page41() {
	document.getElementById("veins4").style.display = "block";
	setTimeout(page42, fast);
}

function page42() {
	document.getElementById("veins4").style.display = "none";
	setTimeout(page43, fast);
}

function page43() {
	whitebox.style.opacity = 0.1;
	dialogue.innerHTML = "아빠...";
	whitebox.style.display = "flex";
	dialogue.style.display = "flex";
	setTimeout(page44, fast);
}

function page44() {
	whitebox.style.opacity = 0.2;
	setTimeout(page45, fast);
}

function page45() {
	whitebox.style.opacity = 0.3;
	setTimeout(page46, fast);
}

function page46() {
	whitebox.style.opacity = 0.2;
	setTimeout(page47, fast);
}

function page47() {
	whitebox.style.opacity = 0.1;
	setTimeout(page48, fast);
}

function page48() {
	whitebox.style.display = "none";
	setTimeout(page49, fast);
}

function page49() {
	screen.style.backgroundColor = "#669baa";
	setTimeout(page50, pace);
}

function page50() {
	screen.style.backgroundColor = "#6da5b2";
	screen.style.width = "1312px";
	screen.style.height = "900px";
	setTimeout(page51, pace);
}

function page51() {
	screen.style.backgroundColor = "#82b8c4";
	screen.style.width = "1412px";
	screen.style.height = "1000px";
	setTimeout(page52, pace);
}

function page52() {
	screen.style.backgroundColor = "#9dd4e0";
	screen.style.width = "1512px";
	screen.style.height = "1000px";
	setTimeout(page53, pace);
}

function page53() {
	screen.style.backgroundColor = "#b9e8ed";
	screen.style.width = "1612px";
	screen.style.height = "1000px";
	setTimeout(page54, pace);
}

function page54() {
	screen.style.backgroundColor = "#d7f3f4";
	document.getElementById("background").style.backgroundColor = "#d7f3f4";
	document.body.style.backgroundColor = "#d7f3f4";
	screen.style.width = "1712px";
	screen.style.height = "1000px";
	setTimeout(page55, pace);
}

function page55() {
	screen.style.backgroundColor = "#ffffff";
	document.getElementById("background").style.backgroundColor = "#ffffff";
	document.body.style.backgroundColor = "#ffffff";
	setTimeout(splash, 4000);
}










