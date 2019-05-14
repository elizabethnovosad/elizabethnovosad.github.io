$(window).scroll(function() {
    var docViewTop = $(window).scrollTop();
    var sectionHeight = $('div.section').height();
    if(docViewTop >= sectionHeight)
        $('div.section#about_section div.row div.col-xs-6').animate({ opacity: 1.0, top: 64 });
    if(docViewTop >= sectionHeight * 3)
        $('div.section#contacts_section div.row div.col-xs-4#contacts_column').animate({ opacity: 1.0, top: 64 });
});

function mobileNavigation() {
    var navigationBarLinks = document.getElementById("header_navigation_bar_links");
    if (navigationBarLinks.style.display === "block")
        navigationBarLinks.style.display = "none";
    else
        navigationBarLinks.style.display = "block";
}