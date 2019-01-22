$(document).ready(function(){
  if(screen.width > 1200 && $('.bundle-swiper-container .swiper-slide').length > 4){
    var bundleSwiper = new Swiper('.bundle-swiper-container', {
      navigation: {
        nextEl: '.bundle-swiper-button-next',
        prevEl: '.bundle-swiper-button-prev',
      },
      pagination: {
        el: '.bundle-swiper-pagination',
      },
      slidesPerView: 4
    });
    $('.swiper-button-next, .swiper-button-prev').css('display', 'block');
  }else if(screen.width < 1200 && $('.bundle-swiper-container .swiper-slide').length > 3){
    var bundleSwiper = new Swiper('.bundle-swiper-container', {
      navigation: {
        nextEl: '.bundle-swiper-button-next',
        prevEl: '.bundle-swiper-button-prev',
      },
      pagination: {
        el: '.bundle-swiper-pagination',
      },
      slidesPerView: 2,
    });
    $('.swiper-button-next, .swiper-button-prev').css('display', 'block');
  }else if(screen.width < 768 && $('.bundle-swiper-container .swiper-slide').length > 2){
  var bundleSwiper = new Swiper('.bundle-swiper-container', {
    navigation: {
      nextEl: '.bundle-swiper-button-next',
      prevEl: '.bundle-swiper-button-prev',
    },
    pagination: {
      el: '.bundle-swiper-pagination',
    },
    slidesPerView: 2,
      576:{
        slidesPerView: 2,
        spaceBetween: 0,
        freeMode: true,
      }
    });
    $('.swiper-button-next, .swiper-button-prev').css('display', 'block');
  }else if(screen.width < 576 && $('.bundle-swiper-container .swiper-slide').length > 2){
  var bundleSwiper = new Swiper('.bundle-swiper-container', {
    navigation: {
      nextEl: '.bundle-swiper-button-next',
      prevEl: '.bundle-swiper-button-prev',
    },
    pagination: {
      el: '.bundle-swiper-pagination',
    },
    slidesPerView: 2,
    spaceBetween: 0,
    freeMode: true,
    });
    $('.swiper-button-next, .swiper-button-prev').css('display', 'block');
  }else{
    $('.bundle-swiper-container').css('width', '100%');
    $('.bundle-swiper-container .swiper-slide').css('max-width', '100%');
  }
  var productSwiper = new Swiper('.product-swiper-container', {
		pagination: {
      el: '.product-swiper-pagination',
      clickable: true,
      type : 'custom',
      bulletClass:'js-swiper-pagination-img'
		},
		navigation: {
			nextEl: '.product-swiper-button-next',
			prevEl: '.product-swiper-button-prev'
		}
	});
  if(screen.width >= 992){
    $('.headerNav > ul > li').click(function(){
      $('.headerNav > ul > li.active > ul').fadeOut('100');
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $(this).find('ul').fadeIn('100');
    });

    $('.headerNav > ul > li > ul > li').click(function(event){
      event.stopPropagation();
      if($(this).hasClass('active')){
        $(this).find('.headerSubmenu').fadeOut('100');
        $(this).removeClass('active');
      }else{
        $('.headerNav > ul > li.active > ul > li.active > .headerSubmenu').fadeOut('100');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).find('.headerSubmenu').fadeIn('100');
      }
    });
  }else{
    $('.headerNav > ul > li > ul').css('display', 'none');
    $('.headerNav > ul > li').removeClass('active');
    $('.hamburger').click(function(){
      $('body').toggleClass('fixedBody');
      $('.mobileOverlay').fadeToggle('300');
      $(this).toggleClass('is-active');
      $('.headerNav').toggleClass('visible');
    });
    $('.headerNav > ul > li:not(.back)').click(function(event){
      event.stopPropagation();
      $(this).parent().addClass('secondLevel');
      $(this).siblings().find('ul').fadeOut('50');
      $(this).find('ul').fadeIn('50');
    });
    $('.headerNav > ul > li > ul > li:not(.back)').click(function(event){
      event.stopPropagation();
      $('ul.secondLevel').removeClass('secondLevel').addClass('thirdLevel');
      $(this).siblings().find('.headerSubmenu').fadeOut('50');
      $(this).find('.headerSubmenu').fadeIn('50');
    });
    $('.js-back-second').click(function(event){
      event.stopPropagation();
      $('ul.secondLevel').removeClass('secondLevel');
      $(this).parent().fadeOut('');
    });
    $('.js-back-third').click(function(event){
      event.stopPropagation();
      $('ul.thirdLevel').addClass('secondLevel').removeClass('thirdLevel');
      $(this).parent('.headerSubmenu').fadeOut('50');
    });
  }
  $('.js-add-to-fav').click(function(){
    $(this).toggleClass('added');
  });
  var rowHeight = $('.detailsRow').outerHeight();
  if(screen.width < 1200){
    $('.detailsRow').css('height', '200px');
  }else{
    $('.detailsRow').css('height', '300px');
  }
  $('.showMore').click(function(){
    $('.detailsRow__overlay').fadeToggle('300');
    if($('.detailsRow').hasClass('toggled')){
      $('.detailsRow').animate({
        height: '300px',
      }, 300, 'linear', function(){
        $('.detailsRow').removeClass('toggled');
      });
    }else{
      $('.detailsRow').animate({
        height: rowHeight,
      }, 300, function(){
        $('.detailsRow').addClass('toggled');
      });
    }
  });
  $('.citySelection__selected span').click(function(){
    $('.overlay-wrapper').fadeIn('300');
  });
  $('.cityList ul li a').click(function(){
    var city = $(this).text();
    $('.citySelection__selected span').text(city);
    $('.overlay-wrapper').fadeOut('300');
  });
  $('.productImage__remove').click(function(){
    $(this).parents('.productColumn').fadeOut('');
  });
  $('.toTop').click(function(){
    $("html, body").animate({scrollTop: 0+"px"});
  });
  $('.searchPanel__input').focus(function(){
    $('.searchOverlay').fadeIn('');
  });
  $('.searchPanel__input').blur(function(){
    $('.searchOverlay').fadeOut('');
  });
  if(screen.width <= 576){
    $('.searchPanel__button-mobile').click(function(){
      $('.searchPanel').fadeIn('300');
    });
    $('.close-mobile').click(function(){
      $('.searchPanel').fadeOut('300');
    });
  }
});
