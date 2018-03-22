// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myButton").style.display = "block";
    } else {
        document.getElementById("myButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
     $('html, body').animate({scrollTop:0}, 'slow');
}


//3 buttons
$("#AboutUs").click(function() {
    $('html,body').animate({
        scrollTop: $("#teamBlock").offset().top},
        'slow');
});

$("#HowToUse").click(function() {
    $('html,body').animate({
        scrollTop: $("#howToUseBlock").offset().top},
        'slow');
});

$("#Contribution").click(function() {
    $('html,body').animate({
        scrollTop: $("#contributionBlock").offset().top},
        'slow');
});

$("#loginBtn").click(function() {
    location.href="profilePage.html"
});

$("#registerBtn").click(function() {
    location.href="profilePage.html"
});
