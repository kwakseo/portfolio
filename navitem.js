function navitem(order, title, hi=false) {
	var div = document.createElement("div");
	var p = document.createElement("p");
	div.className = "navitem";
	div.id = title + "_nav";
	p.innerHTML = title.toUpperCase();
	p.className = "navitem_title";
	div.appendChild(p);
	document.getElementById("navbar").appendChild(div);
	// div.onclick = function() {show_page(title); toggle_navitem(title)};
	div.onclick = function () {checkURL(title)};

}

function show_page(title){
	$('#content').children().each(function () {
		if (this.id == title) {
			this.style.display = "flex";
		}
		else {
			this.style.display = "none";
		}
	})
}

function show_page2(title){
	var loaded = false;
	$('#content').children().each(function () {
		if (this.id == title) {
			loaded = true;
			this.style.display = "flex";
		}
		else if (this.id != title) {
			this.style.display = "none";
		}
	})
	if (!loaded) {
		console.log(title + " not loaded");
		$('#content').load(title+".html");
	}
	else {
		console.log(title + " loaded");
	}
}

function toggle_navitem(title) {
	var navtitle = title + "_nav";
	$('#navbar').children().each(function () {
    	if (this.id == navtitle) {
    		console.log(true);
    		this.className = "navitem active";
    	}
    	else {
    		console.log(false);
    		console.log(this.id);
    		this.className = "navitem";
    	}
	});
}

