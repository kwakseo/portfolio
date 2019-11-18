var page = 0;
document.body.onkeyup = function(e){
    if(e.keyCode == 32 && page < 8){
        //your code

        current_page = document.getElementById('page' + page);
        current_page.style.display = "none";
        page = page + 1;
        new_page = document.getElementById('page' + page);
        new_page.style.display = "flex";

        counter = document.getElementById('counter');
        counter.innerHTML =page + '/8';

        console.log("hi");
    }
}

function resetPage() {
	start_page = document.getElementById('page0');
	start_page.style.display = "flex";
	current_page = document.getElementById('page8');
    current_page.style.display = "none";
    page = 0;
    counter = document.getElementById('counter');
    counter.innerHTML = '';

}