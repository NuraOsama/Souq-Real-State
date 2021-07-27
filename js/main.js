(function ($) {

    "use strict";
    new WOW().init();

    //sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $('.nav-index').addClass('sticky-top').animate({

            }, 4000);

        } else {
            $('.nav-index').removeClass('sticky-top').animate({

            }, 4000);

        }
    });
    //navbar-toggle
  $(".nav-toggle").click(function(){
    $(".toggle-navbar").toggleClass('active');
    $(".submenu").removeClass('active');

   });
   //dropdown
   $(".drop-menu").click(function(){
  $(".submenu").toggleClass('active');
  $(".toggle-navbar").removeClass('active');


   });

    // select
    /*
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown').length) {
         $('.option-list, .search-box').hide();
        }
      });
      $('.dropdown').click(function(event) {
        $(this).closest('.dropdown').find('.option-list, .search-box').toggle(); 
        $('.option-list a').click(function(){
          var select = $(this).text();
          $(this).closest('.dropdown').children('.select').text(select);
          $('.option-list, .search-box').hide();
        });
      });
      
$('.first-dropdown').click(function(){
    $(".second-option-list").hide();
    $(".third-option-list").hide();
    $(".fourth-option-list").hide();
    $(".fifth-option-list").hide();
    $(".sixth-option-list").hide();
    $(".seventh-option-list").hide();  
    $(".eightn-option-list").hide(); 
    $(".ninthn-option-list").hide();     
});
$('.second-dropdown').click(function(){
    $(".first-option-list").hide();
    $(".third-option-list").hide();
    $(".fourth-option-list").hide();
    $(".fifth-option-list").hide();
    $(".sixth-option-list").hide();
    $(".seventh-option-list").hide();  
    $(".eightn-option-list").hide(); 
    $(".ninthn-option-list").hide();     
});
$('.third-dropdown').click(function(){
    $(".first-option-list").hide();
    $(".second-option-list").hide();
    $(".fourth-option-list").hide();
    $(".fifth-option-list").hide();
    $(".sixth-option-list").hide();
    $(".seventh-option-list").hide();
    $(".eightn-option-list").hide();
    $(".ninthn-option-list").hide();        
});
$('.fourth-dropdown').click(function(){
    $(".first-option-list").hide();
    $(".second-option-list").hide();
    $(".third-option-list").hide();
    $(".fifth-option-list").hide();
    $(".sixth-option-list").hide();
    $(".seventh-option-list").hide();  
    $(".eightn-option-list").hide(); 
    $(".ninthn-option-list").hide();     
});
$('.fifth-dropdown').click(function(){
    $(".first-option-list").hide();
    $(".second-option-list").hide();
    $(".third-option-list").hide();
    $(".fourth-option-list").hide();
    $(".sixth-option-list").hide();
    $(".seventh-option-list").hide();  
    $(".eightn-option-list").hide();
    $(".ninthn-option-list").hide();     
});
$('.sixth-dropdown').click(function(){
    $(".first-option-list").hide();
    $(".second-option-list").hide();
    $(".third-option-list").hide();
    $(".fourth-option-list").hide();
    $(".fifth-option-list").hide();
    $(".seventh-option-list").hide();
    $(".eightn-option-list").hide();
    $(".ninthn-option-list").hide();          
});
$('.seventh-dropdown').click(function(){
  $(".first-option-list").hide();
  $(".second-option-list").hide();
  $(".third-option-list").hide();
  $(".fourth-option-list").hide();
  $(".fifth-option-list").hide();
  $(".sixth-option-list").hide();  
  $(".eightn-option-list").hide();  
  $(".ninthn-option-list").hide();     
});
$('.eightn-dropdown').click(function(){
  $(".first-option-list").hide();
  $(".second-option-list").hide();
  $(".third-option-list").hide();
  $(".fourth-option-list").hide();
  $(".fifth-option-list").hide();
  $(".sixth-option-list").hide();
  $(".seventh-option-list").hide();   
  $(".ninthn-option-list").hide();     
});
$('.ninthn-dropdown').click(function(){
  $(".first-option-list").hide();
  $(".second-option-list").hide();
  $(".third-option-list").hide();
  $(".fourth-option-list").hide();
  $(".fifth-option-list").hide();
  $(".sixth-option-list").hide();
  $(".seventh-option-list").hide(); 
  $(".eightn-option-list").hide();      
});*/
    // range sliders
$( function() {
	// price range 
	$( ".slider-range" ).slider({
		range: true,
		min: 1000,
		max: 5000000,
		values: [ 1000, 5000000],
		step: 1000,
		slide: function( event, ui ) {
			$( ".amount" ).val( "" + ui.values[ 0 ].toLocaleString('us-US') + " إلى" + ui.values[ 1 ].toLocaleString('us-US') );
		}
	});
	$( ".amount" ).val( "" + $( ".slider-range" ).slider( "values", 0 ).toLocaleString('us-US') + " إلى" + $( ".slider-range" ).slider( "values", 1 ).toLocaleString('us-US') );


} );

$(".advance-button").click(function(){
    $(".fa-minus-square").toggleClass('active');
    $(".fa-plus-square").toggleClass('active')


});

 //slider
 $('.owl').owlCarousel({
    items:4,
    margin:1,
    loop:true,
    autoplay:true,
    nav:false,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    responsiveClass:true,
    responsive:{
        0:{
            items:4,
          
        },
       
        1190:{
            items:4,
            
        },

        1024:{
            items:3,
            
        },
        991:{
            items:2,
        },

       
          768 : {
  
            items:2, 
          },
  
          575 : {
  
            items:1,
           
          },
         
          425: {
  
            items:1,
          
      },
     375: {
  
        items:1,
         
      },
      320: {
     
    items:1,
      
  },
  220: {
   
    items:1,
   
  }
    }
  })
 //slider
 $('.owl2').owlCarousel({
    items:1,
    margin:1,
    loop:true,
    nav:true,
    autoplay:true,
});
//model
$(".login").addClass('active');

$(".login").click(function(){

    $(this).addClass('active');
    $(".register").removeClass('active');
    $(".login-body").css('display','block'),
    $(".resgister-body").css('display','none')
  
  });
$(".register").click(function(){
  $(this).addClass('active');
  $(".login").removeClass('active');
  $(".login-body").css('display','none'),
  $(".resgister-body").css('display','block')
});
// accordion angle
$(".angle").click(function(){
    $(this).toggleClass('active');
})
//calender
$('#txtHijriDate').calendarsPicker({
    
  });
  //add-taps-login

  $(".login-here").click(function(){
    $('.first-form').css('display','none');
    $('.second-form').css('display','block');
    $(this).css('display','none');
    $('.register-here').css('display','block');
});
$(".register-here").click(function(){
    $('.first-form').css('display','block');
    $('.second-form').css('display','none');
    $(this).css('display','none');
    $('.login-here').css('display','block');
})

//agents
$(".short-number").click(function(){
   $(".long-number").toggleClass('active');
   $(this).toggleClass('active');
});

$(".long-number").click(function(){
    $(".short-number").toggleClass('active');
    $(this).removeClass('active');
 });

 $(".short-number-library").click(function(){
    $(".long-number-library").toggleClass('active');
    $(this).toggleClass('active');
 });
 
 $(".long-number-library").click(function(){
     $(".short-number-library").toggleClass('active');
     $(this).removeClass('active');
  });
  
  //navbar-tabs
  $(".btn-list").addClass('active')
  $(".btn-list").click(function(){
      $(".group-1").fadeIn();
      $(".group-2").fadeOut();
      $(this).addClass('active');
      $('.btn-grid').removeClass('active')
  });
  $(".btn-grid").click(function(){
    $(".group-1").fadeOut();
    $(".group-2").fadeIn();
    $(this).addClass('active');
    $('.btn-list').removeClass('active')
});

//scroll to top
$(window).scroll(function(){
    if($(this).scrollTop() > 300) {
       $(".auto-scroll-to-top").addClass("visible");                    
     } else {
         $(".auto-scroll-to-top").removeClass("visible");
     }        
    });
     
   $(".auto-scroll-to-top").click(function(){
     $("html, body").animate({scrollTop: 0}, 1000);
   });

  //editor
  $('#summernote').summernote({
    tabsize: 2,
    height:300,
  });

  //tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  $(document).ready(function() {
    $('#lightgallery').lightGallery({
      pager: true,
      thumbnail:true,
      useLeft:true,
      autoplay:true,	
  
    });
  });
 

// share 
const $menu = $('.shareing-social');

$(document).mouseup(function (e) {
   if (!$menu.is(e.target) // if the target of the click isn't the container...
   && $menu.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $menu.removeClass('is-active');
  }
 });

$('.share').on('click', () => {
  $menu.toggleClass('is-active');

});

//best
$('.best').on('click', () => {
    $menu.removeClass('is-active');
  });

  //print
  $('.print').on('click', () => {
    $menu.removeClass('is-active');
    window.print();  
    return false; 
  });


  //camer
  $('.camera').click(function(){
    $(".iframemansoura").fadeOut();
    $(".iframeseeroad").fadeOut();
    $(".estate-image").fadeIn();
    $(".registration").fadeIn();
    $(this).addClass('active');
    $('.see-map').removeClass('active');
    $('.see-road').removeClass('active');
  });
  
  //see map
  $('.see-map').click(function(){
    $(".iframemansoura").fadeIn();
    $(".iframeseeroad").fadeOut();
    $(".estate-image").fadeOut();
    $(".registration").fadeOut();
    $(this).addClass('active');
    $('.camera').removeClass('active');
    $('.see-road').removeClass('active');
  });

  
   //see road
   $('.see-road').click(function(){
    $(".iframeseeroad").fadeIn();
    $(".iframemansoura").fadeOut();
    $(".estate-image").fadeOut();
    $(".registration").fadeOut();
    $(this).addClass('active');
    $('.camera').removeClass('active');
    $('.see-map').removeClass('active');
  });

  
  //map modal change animation
  $('.iframe-map').on('show.bs.modal', function (e) {
    $('.iframe-map .modal-dialog').attr('class', 'modal-dialog  zoomIn  animated');
})
$('.iframe-map').on('hide.bs.modal', function (e) {
    $('.iframe-map .modal-dialog').attr('class', 'modal-dialog  zoomOut  animated');
})


//panel
$('.side-panel-1').addClass("active");
$('.side-panel-2').addClass("active");
$('.compare-side').removeClass("active");
$('.compare-unicode').css('visibility','visible');


  //compare
  $('.compare-plus-1').click(function (){
    $('.plus-1').addClass('active');
    setTimeout(function() {
      $('.plus-1').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-2').addClass("active");
      $('.unicode-2').removeClass("active");
      $('.side-panel-1').removeClass("active");
      $('.unicode-1').addClass("active");
       $('.side-panel-1').addClass("side-panel--close");        
      },3500);  
  
  });
  $('.compare-plus-2').click(function (){
    $('.plus-2').addClass('active');
    setTimeout(function() {
      $('.plus-2').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-2').addClass("active");
      $('.unicode-2').removeClass("active");
      $('.side-panel-1').removeClass("active");
      $('.unicode-1').addClass("active");
       $('.side-panel-1').addClass("side-panel--close");   
        },3500);  
  
  });
  $('.compare-plus-3').click(function (){
    $('.plus-3').addClass('active');
    setTimeout(function() {
      $('.plus-3').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-2').addClass("active");
      $('.unicode-2').removeClass("active");
      $('.side-panel-1').removeClass("active");
      $('.unicode-1').addClass("active");
       $('.side-panel-1').addClass("side-panel--close");   
      },3500);  
  
  });
  $('.compare-plus-4').click(function (){
    $('.plus-4').addClass('active');
    setTimeout(function() {
      $('.plus-4').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-2').addClass("active");
      $('.unicode-2').removeClass("active");
      $('.side-panel-1').removeClass("active");
      $('.unicode-1').addClass("active");
       $('.side-panel-1').addClass("side-panel--close");   
      },3500);  
  
  });
  $('.compare-plus-5').click(function (){
    $('.plus-5').addClass('active');
    setTimeout(function() {
      $('.plus-5').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-2').addClass("active");
      $('.unicode-2').removeClass("active");
      $('.side-panel-1').removeClass("active");
      $('.unicode-1').addClass("active");
       $('.side-panel-1').addClass("side-panel--close");   
      },3500);  
  
  });
  $('.compare-plus-6').click(function (){
    $('.plus-6').addClass('active');
    setTimeout(function() {
      $('.plus-6').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-2').addClass("active");
      $('.unicode-2').removeClass("active");
      $('.side-panel-1').removeClass("active");
      $('.unicode-1').addClass("active");
       $('.side-panel-1').addClass("side-panel--close");   
      },3500);  
  
  });
  $('.compare-plus-7').click(function (){
    $('.plus-7').addClass('active');
    setTimeout(function() {
      $('.plus-7').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-2').addClass("active");
      $('.unicode-2').removeClass("active");
      $('.side-panel-1').removeClass("active");
      $('.unicode-1').addClass("active");
       $('.side-panel-1').addClass("side-panel--close");     
      },3500);  
  
  });
  $('.compare-plus-8').click(function (){
    $('.plus-8').addClass('active');
    setTimeout(function() {
      $('.plus-8').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-2').addClass("active");
      $('.unicode-2').removeClass("active");
      $('.side-panel-1').removeClass("active");
      $('.unicode-1').addClass("active");
       $('.side-panel-1').addClass("side-panel--close");     
      },3500);  
  });
  $('.compare-plus-9').click(function (){
    $('.plus-9').addClass('active');
    setTimeout(function() {
      $('.plus-9').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-2').addClass("active");
      $('.unicode-2').addClass("active");
      $('.side-panel-1').removeClass("active");
      $('.unicode-1').removeClass("active");
       $('.side-panel-1').addClass("side-panel--close");         
      },3500);  
  });

  $('.best-heart-1').click(function (){
    $('.heart-1').addClass('active'); 
    setTimeout(function() {
      $('.heart-1').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-1').addClass("active");
      $('.unicode-1').removeClass("active");
      $('.side-panel-2').removeClass("active");
      $('.unicode-2').addClass("active");
      $('.side-panel-2').addClass("side-panel--close");
       
      },3500);  
  });
    $('.best-heart-2').click(function (){
    $('.heart-2').addClass('active');
    setTimeout(function() {
      $('.heart-2').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-1').addClass("active");
      $('.unicode-1').removeClass("active");
      $('.side-panel-2').removeClass("active");
      $('.unicode-2').addClass("active");
      $('.side-panel-2').addClass("side-panel--close");
         
      },3500);  
  });
  $('.best-heart-3').click(function (){
    $('.heart-3').addClass('active');
    setTimeout(function() {
      $('.heart-1').removeClass('active');

    },3500);
    setTimeout(function() {
      $('.side-panel-1').addClass("active");
      $('.unicode-1').removeClass("active");
      $('.side-panel-2').removeClass("active");
      $('.unicode-2').addClass("active");
      $('.side-panel-2').addClass("side-panel--close");
        
      },3500);  
  });
  $('.best-heart-4').click(function (){
    $('.heart-4').addClass('active');
    setTimeout(function() {
      $('.heart-1').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-1').addClass("active");
      $('.unicode-1').removeClass("active");
      $('.side-panel-2').removeClass("active");
      $('.unicode-2').addClass("active");
      $('.side-panel-2').addClass("side-panel--close");
      },3500);  
  });
  $('.best-heart-5').click(function (){
    $('.heart-5').addClass('active');
    setTimeout(function() {
      $('.heart-1').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-1').addClass("active");
      $('.unicode-1').removeClass("active");
      $('.side-panel-2').removeClass("active");
      $('.unicode-2').addClass("active");
      $('.side-panel-2').addClass("side-panel--close");
      },3500);  
  });
  $('.best-heart-6').click(function (){
    $('.heart-6').addClass('active');     
    setTimeout(function() {
      $('.heart-6').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-1').addClass("active");
      $('.unicode-1').removeClass("active");
      $('.side-panel-2').removeClass("active");
      $('.unicode-2').addClass("active");
      $('.side-panel-2').addClass("side-panel--close");
      },3500);  
  });
  $('.best-heart-7').click(function (){
    $('.heart-7').addClass('active'); 
    setTimeout(function() {
      $('.heart-7').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-1').addClass("active");
      $('.unicode-1').removeClass("active");
      $('.side-panel-2').removeClass("active");
      $('.unicode-2').addClass("active");
      $('.side-panel-2').addClass("side-panel--close");     
      },3500);  
  });
  $('.best-heart-8').click(function (){
    $('.heart-8').addClass('active');
    setTimeout(function() {
      $('.heart-8').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-1').addClass("active");
      $('.unicode-1').removeClass("active");
      $('.side-panel-2').removeClass("active");
      $('.unicode-2').addClass("active");
      $('.side-panel-2').addClass("side-panel--close");
        },3500);
  });
  $('.best-heart-9').click(function (){
    $('.heart-9').addClass('active'); 
    setTimeout(function() {
      $('.heart-9').removeClass('active');
    },3500);
    setTimeout(function() {
      $('.side-panel-1').addClass("active");
      $('.unicode-1').removeClass("active");
      $('.side-panel-2').removeClass("active");
      $('.unicode-2').addClass("active");
      $('.side-panel-2').addClass("side-panel--close");
      },3500);  
  });
 
  $(".unicode").on("click", function(){
    $('.side-panel').toggleClass("side-panel--close ");
  });
  $(".close-btn").on("click", function(){
    $('.side-panel').toggleClass("side-panel--close ");

  });
//my account
  $(".advs").click(function(){
    $(this).addClass("active");
    $('.estate').removeClass("active");
    $('.notes').removeClass("active");
  });
  $(".estate").click(function(){
    $(this).addClass("active");
    $('.advs').removeClass("active");
    $('.notes').removeClass("active");
  });
  $(".notes").click(function(){
    $(this).addClass("active");
    $('.advs').removeClass("active");
    $('.estate ').removeClass("active");
  });

  
 
})(jQuery);
