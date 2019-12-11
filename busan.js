var vfast = 300;
var vvfast = 100;
var fast = 700;
var medium = 1500;
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
var page = 0;

window.onload = function() {
	// screen.style.backgroundColor = "#263547";
 	splash();
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32 && splash){
        page1();
    }
}

function hi() {
	console.log("hi");
}

function nextPage(){
	pagenum = page + 1;
	var pagename = "page" + pagenum;
	console.log(pagenum);
	window[pagename]();

}

function splash() {
	page = 0;
	onsplash = true;
	screen.style.display = "none";
	document.getElementById("splash").style.display = "flex";
}


function page1() {
	page += 1;
	document.getElementById("splash").style.display = "none";
	document.body.style.backgroundColor = "#000000";
	document.getElementById("background").style.backgroundColor = "#000000";
	screen.style.width = "1020px";
	screen.style.height = "700px";
	screen.style.backgroundColor = "#000000";
	screen.style.display = "flex";
	dialogue.innerHTML = "가지마!";
	onsplash = false;
	screen.style.display = "flex";
	whitebox.style.display = "flex";
	dialogue.style.display = "block";
	document.getElementById("next").style.display = "flex";
	dialogue.style.left = "0";
	whitebox.style.opacity = 1;
	document.body.style.backgroundColor = "#000000";
	// whitebox.style.display = "none";
	// setTimeout(page2, pace);
}

function page2() {
	page += 1;
	
	// dialogue.style.display = "block";
	// dialogue.style.left = "0";
	// whitebox.style.opacity = 1;
	// document.body.style.backgroundColor = "#000000";
	// screen.style.backgroundColor = "#000000";
	// screen.style.display = "flex";
	dialogue.innerHTML = "가지마, 내가 잘못했어!";
	// document.getElementById("next").style.display = "flex";
	// setTimeout(page3, pace);
}

function page3() {
	page += 1;
	screen.style.backgroundColor = "#0d1823";
	dialogue.innerHTML = "아빠 가지마...";
	// setTimeout(page4, pace);
}

function page4() {
	page += 1;
	dialogue.innerHTML = "가지마...";
	// setTimeout(page5, pace);
}

function page5() {
	page += 1;
	screen.style.backgroundColor = "#192b38";
	dialogue.innerHTML = "재발...";
	// setTimeout(page6, pace);
}

function page6() {
	page += 1;
	dialogue.innerHTML = "가지마...";
	// setTimeout(page7, pace);
}

function page7() {
	page += 1;
	screen.style.backgroundColor = "#203744";
	dialogue.innerHTML = "나랑 같이 있어...";
	// setTimeout(page8, pace);
}

function page8() {
	page += 1;
	dialogue.innerHTML = "가지마...";
	// setTimeout(page9, pace);
}

function page9() {
	page += 1;
	screen.style.backgroundColor = "#334c60";
	whitebox.style.left = String(move_factor)+"px";
	dialogue.innerHTML = "아빠!";
	dialogue.style.fontSize = "100px";
	// setTimeout(page10, pace);
}

function page10() {
	page += 1;
	whitebox.style.left = String(move_factor*2)+"px";
	dialogue.innerHTML = "아빠! 안돼!";
	dialogue.style.fontSize = "130px";
	// setTimeout(page11, pace);
}

function page11() {
	page += 1;
	screen.style.backgroundColor = "#3a576b";
	whitebox.style.left = String(move_factor*3.8)+"px";
	dialogue.innerHTML = "아빠!";
	dialogue.style.fontSize = "160px";
	// setTimeout(page12, pace);
}

function page12() {
	page += 1;
	whitebox.style.left = String(move_factor*5.5)+"px";
	dialogue.innerHTML = "안돼!";
	dialogue.style.fontSize = "190px";
	// setTimeout(page13, pace);
}

function page13() {
	document.getElementById("next").style.display = "none";
	screen.style.backgroundColor = "#426477";
	whitebox.style.display = "none";
	dialogue.style.display = "none";
	setTimeout(page14, pace);
}

function page14() {
	screen.style.backgroundColor = "#75112b";
	// document.body.style.backgroundColor = "#75112b";
	// document.getElementById("background").style.backgroundColor = "#75112b";
	setTimeout(page15, vfast);
}

function page15() {
	screen.style.backgroundColor = "#426477";
	// document.body.style.backgroundColor = "#000000";
	// document.getElementById("background").style.backgroundColor = "#000000";
	setTimeout(page16, medium);
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
	setTimeout(page23, medium);	
}

function page23() {
	screen.style.backgroundColor = "#75112b";
	setTimeout(page24, vfast);
}

function page24() {
	screen.style.backgroundColor = "#4c7f93";
	setTimeout(page25, medium);
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

	setTimeout(page280, vfast);
}

function page280() {
	screen.style.left = "2%";
	// screen.style.top = "55%";

	setTimeout(page28, vvfast);
}

function page28() {
	screen.style.left = "auto";
	// screen.style.top = "50%";
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
	setTimeout(page32, medium);	
}

function page32() {
	screen.style.backgroundColor = "#75112b";
	setTimeout(page33, vfast);
}

function page33() {
	screen.style.backgroundColor = "#5f91a3";
	setTimeout(page34, medium);
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
	setTimeout(page370, fast);
}

function page370() {
	screen.style.left = "-2%";
	// screen.style.top = "55%";

	setTimeout(page371, vvfast);
}

function page371() {
	screen.style.left = "2%";
	// screen.style.top = "50%";
	setTimeout(page37, vvfast);
}

function page37() {
	screen.style.left = "auto";
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
	setTimeout(page41, medium);	
}

function page41() {
	screen.style.backgroundColor = "#75112b";
	setTimeout(page42, vfast);
}

function page42() {
	screen.style.backgroundColor = "#6da1af";
	setTimeout(page43, medium);
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
	setTimeout(page450, fast);
}

function page450() {
	screen.style.left = "2%";
	// screen.style.top = "55%";

	setTimeout(page451, vvfast);
}

function page451() {
	screen.style.left = "auto";
	// screen.style.top = "55%";

	setTimeout(page45, vvfast);
}

function page45() {
	whitebox.style.opacity = 0.3;
	setTimeout(page460, fast);
}

function page460() {
	screen.style.left = "2%";
	// screen.style.top = "55%";

	setTimeout(page461, vvfast);
}

function page461() {
	screen.style.left = "auto";
	// screen.style.top = "55%";

	setTimeout(page462, vfast);
}

function page462() {
	screen.style.left = "-2%";
	// screen.style.top = "55%";

	setTimeout(page463, vvfast);
}

function page463() {
	screen.style.left = "auto";
	// screen.style.top = "55%";

	setTimeout(page464, vvfast);
}


function page464() {
	whitebox.style.opacity = 0.2;
	setTimeout(page465, fast);
}

function page465() {
	screen.style.left = "-2%";
	screen.style.top = "48%";
	// screen.style.top = "55%";

	setTimeout(page46, vvfast);
}

function page46() {
	screen.style.left = "auto";
	screen.style.top = "50%";
	// screen.style.top = "55%";

	setTimeout(page47, vvfast);
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
	screen.style.width = "1120px";
	screen.style.height = "750px";
	setTimeout(page51, pace);
}

function page51() {
	screen.style.backgroundColor = "#82b8c4";
	screen.style.width = "1320px";
	screen.style.height = "850px";
	setTimeout(page52, pace);
}

function page52() {
	screen.style.backgroundColor = "#9dd4e0";
	screen.style.width = "1420px";
	screen.style.height = "950px";
	setTimeout(page53, pace);
}

function page53() {
	screen.style.backgroundColor = "#b9e8ed";
	screen.style.width = "1520px";
	screen.style.height = "1050px";
	setTimeout(page54, pace);
}

function page54() {
	screen.style.backgroundColor = "#d7f3f4";
	document.getElementById("background").style.backgroundColor = "#d7f3f4";
	document.body.style.backgroundColor = "#d7f3f4";
	screen.style.width = "100%";
	screen.style.height = "100%";
	setTimeout(page55, pace);
}

function page55() {
	screen.style.backgroundColor = "#ffffff";
	document.getElementById("background").style.backgroundColor = "#ffffff";
	document.body.style.backgroundColor = "#ffffff";
	setTimeout(splash, 4000);
}










