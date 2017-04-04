$(document).ready(function() {

$('.drop-down-button').click(function(){
	if ($(this).hasClass('active')){
		$(this).removeClass('active');
	}
	else {
		$(this).addClass('active');
	}
})

(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528,
        navigation: {
          effect: "fade"
        },
        pagination: {
          effect: "fade"
        },
        effect: {
          fade: {
            speed: 400
          }
        }
      });
    });

});





