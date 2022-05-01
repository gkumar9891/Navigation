$(document).ready(function() {

$("#open-menu-btn").click( () => {
    $("body").toggleClass("menu-open");
});

if($(window).width() < 992) {
      $('#main-navigation .has-child .fa').click(function(e) {
          if( $(this).parent().hasClass("active")){
              $(this).parent().removeClass("active");
          } else {
            $(this).parent().addClass("active");
          }
      });
}

});