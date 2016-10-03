/* global $ */
/* global jQuery */

"use strict";
(function($) {

	$(document).ready(function () {
	  
    /*Validation*/
    $("#contactform").validate({
      submitHandler: function(form) {
        $(form).ajaxSubmit();
        $(form).find('.formSent').show();
        $(form).find('input[type=text]').val('');
        $(form).find('input[type=email]').val('');
        $(form).find('textarea').val('');
      }
    });

    /*Sections appears in scroll*/
    $('.jt_row').bind('inview', function(event, visible) {
      if(visible === true){
        $(this).addClass('visible');
      }
    });
    
    if($('.swipebox').length){
	    $('.swipebox').swipebox(); 
	  }
        
    $(window).scrollTop(1); //move scroll to fires inview events

    $(document).on('click', '.collapse.in .menu-item a', function() {
      $('.collapse').collapse('hide');
    });
        
    /**** BACK TO TOP ****/
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 400,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
      if($(this).scrollTop() > offset ) {
        $back_to_top.addClass('cd-is-visible');
      }else{
        $back_to_top.removeClass('cd-is-visible cd-fade-out');
      }
      if( $(this).scrollTop() > offset_opacity ) {
        $back_to_top.addClass('cd-fade-out');
      }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0 ,
        }, scroll_top_duration
      );
    });
        
    $(".mouse").on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
        scrollTop: $("#horarios").offset().top - 90,
        }, scroll_top_duration
      );
    });
    
    //Scroll to sections
    if (!$('#ip-container').hasClass('single')) {
      $('#nav').onePageNav();
    }
        
    /**** CAROUSELS ****/
    if($("#owl-about").length){
      $("#owl-about").owlCarousel({
        navigation: false,
        pagination: false,
        autoPlay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fade",
      });  
    }
    
    if($("#owl-about2").length){
      $("#owl-about2").owlCarousel({
        navigation: true,
        navigationText: [ "<", ">" ],
        pagination: true,
        autoPlay: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
      });
    }
    
    /*Gallery*/
    $('a[data-gal]').each(function() {
      $(this).attr('rel', $(this).data('gal'));
    });

    if($("a[data-rel^='prettyPhoto']").length){
      $("a[data-rel^='prettyPhoto']").prettyPhoto({
        animationSpeed: 'slow',
        theme: 'light_square',
        slideshow: false,
        overlay_gallery: false,
        social_tools: false,
        deeplinking: false
      }); 
    }
    
    /*Parallax*/
    if($(window).width() > 1024) {
      $(window).bind("scroll", function(){ //when the user is scrolling...
        Move('.paraOn'); //move the background images in relation to the movement of the scrollbar
      });
    }
  }); // End document ready

  $(document).ajaxComplete(function() {
    "use strict";
    $(".close").click(function(e) {
      $('#ajax').html('').css('height','0px');
      e.preventDefault();
    });
  }); // End ajax complete

	$(window).load(function() {
  	$(".loader").delay(500).fadeOut();
  	$("#mask").delay(1000).fadeOut("slow");
    
    $('#home-slider').height($(window).height());
        
    /* Home background slider */
    if($("#owl-main").length){
  		$("#owl-main").owlCarousel({
  			autoPlay: 200,
  			navigation: true,
        goToFirst: true,
        goToFirstSpeed: 2000,
  			slideSpeed: 100,
  			pagination: true,
  			transitionStyle: "fade",
  			singleItem: true,
        paginationSpeed : 400,
  	    afterInit: function() {
          $('#home-slider').height($(window).height());
          $('#home-slider #owl-main .item').height($(window).height());
          $('#home-slider #owl-main img').height($(window).height());
          $('#home-slider #owl-main img').width('auto');
  
          var left = ((($('#home-slider').width() - $('#home-slider #owl-main img').width())/2));
          if (left<0) {
            $('#home-slider #owl-main img').css('top', '0px' );
            $('#home-slider #owl-main img').css('left', left + 'px' );
          } else {
            $('#home-slider #owl-main img').css('left', '0px' );
            $('#home-slider #owl-main img').height('auto');
            $('#home-slider #owl-main img').width($(window).width());
            $('#home-slider #owl-main img').css('top', ((($('#home-slider').height() - $('#home-slider #owl-main img').height())/2)) + 'px' );
          }
        },
        afterUpdate: function() {
          $('#home-slider').height($(window).height());
          if (!$('#home-slider').hasClass('fixed-height')) {
            $('#home-slider #owl-main .item').height($(window).height());
            $('#home-slider #owl-main img').height($(window).height());
          } else {
            $('#home-slider #owl-main .item').height(600);
          }
          $('#home-slider #owl-main img').width('auto');
          var left = ((($('#home-slider').width() - $('#home-slider #owl-main img').width())/2));
          if (left<0) {
            $('#home-slider #owl-main img').css('top', '0px' );
            $('#home-slider #owl-main img').css('left', left + 'px' );
          } else {
            $('#home-slider #owl-main img').css('left', '0px' );
            $('#home-slider #owl-main img').height('auto');
            $('#home-slider #owl-main img').width($(window).width());
            $('#home-slider #owl-main img').css('top', ((($('#home-slider').height() - $('#home-slider #owl-main img').height())/2)) + 'px' );
          }
        }
  	  });
    }

    /**** GALLERY ****/
    var $container = $('.portfolio');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      }
    });

    $('nav.primary ul a').click(function(){
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      });
      return false;
    });
    
    var $optionSets = $('nav.primary ul'),
        $optionLinks = $optionSets.find('a');
          
    $optionLinks.click(function(){
      var $this = $(this);
      // don't proceed if already selected
      if ( $this.hasClass('selected') ) {
        return false;
      }
      var $optionSet = $this.parents('nav.primary ul');
      $optionSet.find('.selected').removeClass('selected');
      $this.addClass('selected');
    });
        
  }); // End Window Load

  //Set home slider height on resize
  $(window).resize(function () {
    $('#home-slider').height($(window).height());
  });

  /* Parallax */
  function Move(seccio){
    $(seccio).each(function(){
      $(this).css('background-position', '0 '+(($(window).scrollTop()+$(window).height()-$(this).attr('yPos'))/3+$(this).height())+'px');
    });
  }
  $('.parallax').bind('inview', function(event, visible) {
    if (visible === true) {
      // element is now visible in the viewport
      var offset = $(this).offset();
      $(this).addClass('paraOn').attr('yPos',offset.top);
    } else {
      // element has gone out of viewport
      $(this).removeClass('paraOn');
    }
  });

}(jQuery));