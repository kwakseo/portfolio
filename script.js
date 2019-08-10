var default_content="";
$(document).ready(function(){ //executed after the page has loaded

    checkURL(); //check if the URL has a reference to a page and load it

    // $('.navitem').click(function (e){    //traverse through all our navigation links..

    //         checkURL(this.hash);    //.. and assign them a new onclick event, using their own hash as a parameter (#page1 for example)

    // });
    $('#me_nav').click(function (e){
        checkURL('me');
    })
    default_content = $('#content').html();
    setInterval("checkURL()",250);  //check for a change in the URL every 250 ms to detect if the history buttons have been used

});

var lasturl=""; //here we store the current URL hash

function checkURL(hash)
{
    if(!hash) hash=window.location.hash;
    
    if(hash != lasturl)
    {
        lasturl=hash;
        
        // FIX - if we've used the history buttons to return to the homepage,
        // fill the pageContent with the default_content
        
        if(hash=="")
        $('#content').html(default_content);
        
        else
        loadPage(hash);
    }
}

function loadPage(url)  //the function that loads pages via AJAX
{

    // $('#loading').css('visibility','visible');  //show the rotating gif animation
    console.log(url + " url");
    $.ajax({    //create an ajax request to load_page.php
        type: "POST",
        url: "load_page.php",
        data: '{"page":' + url + '}',  //with the page number as a parameter
        dataType: "html",   //expect html to be returned
        success: function(msg){
            console.log(msg + " ajax success");
            if(parseInt(msg)!=0)    //if no errors
            {
                $('#content').html(msg);    //load the returned html into pageContet
                // $('#loading').css('visibility','hidden');   //and hide the rotating gif
            }
        }

    });

}