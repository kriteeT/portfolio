console.log("main js");
$(document).ready(function() {

  var menu = $(".nav__menu");
  $("#bars").click(function(event){
    event.stopPropagation();
    menu.slideToggle('fast');
  });
  $('body').click(function(event) {
    menu.slideUp(0);
  });
  $(window).scroll(function(event) {
    var wScroll = $(this).scrollTop();
    var header = $('.header__welcome');

    var explore = $('.explore');
    var explore_title = explore.children(".title");
    var explore_content = explore.children(".explore-content");
    var explore_img = explore.children('.explore__img');

    var explore2 = $('.explore-2');
    var explore2_img = explore2.children('.explore-2__img');
    var explore2_list = explore2.children('.explore-2__list').children('li');


    var plan = $('.plan');
    var plan_title = plan.children('.title');
    var plan_card = plan.find('.card-plan');


    var service = $('.service');
    var service_title = service.children('.title');
    var service_card = service.find('.service-card');

    var team = $('.team');
    var team_title = team.children('.title');
    var team_card = team.find('.card-team');

    var qus = $('.questions');
    var qus_title = qus.children('.title');
    var qus_card = qus.children('.card-question');

    var parner = $('.partner');
    var parner_title = parner.children('.title');
    var parner_list = parner.children('.partner-list').children('li');

    if(wScroll > parner.offset().top-200) {
      parner_title.addClass('open');
      $.each(parner_list,function(index, el) {
        setTimeout(function(){
          parner_list.eq(index).addClass('open');
        },200 * (index+1));
      });
    }

    if(wScroll < header.offset().top) {
      header.css({
        transform: 'translateY(-'+wScroll/3+'%)'
      });
    }


    if(wScroll > explore.offset().top-200){
      explore_title.addClass('open');
      if(wScroll > explore.offset().top){
        explore_content.addClass('open');
      }
      if(wScroll > explore.offset().top){
        explore_img.addClass('open');
      }
    }

    if(wScroll > explore2.offset().top -200){
      explore2_img.addClass('open');
      $.each(explore2_list ,function(index, el) {
         setTimeout(function(){
           explore2_list.eq(index).addClass('open');
         },100 * (index+1));
      });
    }

    if(wScroll > plan.offset().top-200){
      plan_title.addClass('open');
      console.log(service_card);
      $.each(plan_card, function(index, el) {
        setTimeout(function(){
          plan_card.eq(index).addClass('open');
        }, 200 * (index+1));
      });
    }

    if(wScroll > service.offset().top-200){
      service_title.addClass('open');
      $.each(service_card, function(index, el) {

        setTimeout(function(){
          service_card.eq(index).addClass('open');
        }, 150 * (index+1));
      });
    }

    if(wScroll > team.offset().top-100){
      team_title.addClass('open');
      team_card.addClass('open');
    }

    if(wScroll > qus.offset().top-100){
      qus_title.addClass('open');
      qus_card.addClass('open');
    }

  });


  $('a[href*=\\#]').on('click', function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

});
