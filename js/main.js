$(document).ready(function(){
  var bundleSwiper = new Swiper('.bundle-swiper-container', {
    navigation: {
      nextEl: '.bundle-swiper-button-next',
      prevEl: '.bundle-swiper-button-prev',
    },
    slidesPerView: 4,
    breakpoints:{
      1200:{
        slidesPerView: 3,
      },
      768:{
        slidesPerView: 2,
      },
      576:{
        slidesPerView: 1,
      }
    }
  });
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
    $('.headerNav > ul > li').click(function(event){
      event.stopPropagation();
      $(this).parent().addClass('secondLevel');
      $(this).siblings().find('ul').fadeOut('100');
      $(this).find('ul').fadeIn('100');
    });
    $('.headerNav > ul > li > ul > li').click(function(event){
      event.stopPropagation();
      $('ul.secondLevel').removeClass('secondLevel').addClass('thirdLevel');
      $(this).siblings().find('.headerSubmenu').fadeOut('100');
      $(this).find('.headerSubmenu').fadeIn('100');
    });
    $('.js-back-second').click(function(event){
      event.stopPropagation();
      $('ul.secondLevel').removeClass('secondLevel');
      $(this).parent().fadeOut('');
    });
    $('.js-back-third').click(function(event){
      event.stopPropagation();
      $('ul.thirdLevel').addClass('secondLevel').removeClass('thirdLevel');
      $(this).parent('.headerSubmenu').fadeOut('100');
    });
    $('.js-add-to-fav').click(function(){
      $(this).toggleClass('added');
    });
  }
  $('.showMore').click(function(){
    $('.detailsRow').css('max-height', 'unset');
    $('.detailsRow__overlay').css('opacity', '0');
  });
});
