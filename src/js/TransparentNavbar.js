var $document = $(document),
    $element = $('.navbar'),
    navbarDefault = 'navbar-default',
    navbarTransparent = '.navbar-transparent',
    $NavLogo = $('.navbar-img');

    fadeInDown = 'fadeInDown';

$document.scroll(function(){

if ($document.scrollTop() >= 200){

$element.addClass(navbarDefault);
$element.removeClass(navbarTransparent);
    
    $NavLogo.addClass('navbar-img-animated');
    $NavLogo.removeClass('navbar-img-animated-NotAnimated');
    
    $element.addClass(fadeInDown);
} else {
   
    
    $element.addClass(navbarTransparent);
    $element.removeClass(navbarDefault);
    
    $element.removeClass(fadeInDown);
    $NavLogo.addClass('navbar-img-NotAnimated');
    $NavLogo.removeClass('navbar-img-animated');
    

    
    
    
    
}








});

