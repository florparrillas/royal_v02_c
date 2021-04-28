$(document).ready(function(){

    var numero = 1;

    $('#btnMenu').on('click', function (e) {

        e.preventDefault();
        if (numero == 1) {
            $('.menu-mobile .header_nav_mobile').animate({left:0}, 300, function () {
                numero = 0;
            });
            
        } else {
            $('.menu-mobile .header_nav_mobile').animate({left:'-100%'}, 300, function () {
               numero = 1; 
            })
        }
    })
 
 
    $('.menu-mobile .header_nav_mobile a').on('click', function () {
        
        $('.menu-mobile .header_nav_mobile').animate({left:'-100%'}, 300, function () {
            numero = 1; 
         })
        
        })

 });