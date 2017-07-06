
$(document).ready(function() {



  function RedderAllrooms(allRooms){
    for(var i=0; i < allRooms.numbers; i++){

      var HTMLroomImg = "<div class='card-room'><figure class='card-room__img'><img src=%data% alt=%data%></figure>"
      var HTMLroomTitle = "<div class='card-room__body'><h2 class='card-room__title'>%data%</h2>"
      var HTMLroomStart = "<ul class='card-room__start'>";
      var HTMLStart = "<li><i class='fa fa-star' aria-hidden='true'></i></li>"
      var HTMLroomContent = "<p class='card-room__content'>%data%</p>"
      var HTMLroomPrice = " <p class='card-room__price'><a title='%dataTitleLink%' href='%dataLink%' class='btn btn--green btn--card'>book now</a><span class='card-room__price__text'><strong>%dataPrice%</strong>Per Night</span></p></div></div>"

      var formattedroomImg = HTMLroomImg.replace("%data%", allRooms.room[i].img);
      var formattedroomTitle = HTMLroomTitle.replace("%data%", allRooms.room[i].title);
      for(var start=0; start< allRooms.room[i].start; start++){
         HTMLroomStart+=HTMLStart;
      }
      var formattedroomStart = HTMLroomStart+="</ul>";
      var formattedroomContent = HTMLroomContent.replace('%data%', allRooms.room[i].content);

      var formattedroomPrice = HTMLroomPrice.replace("%dataPrice%", allRooms.room[i].price);
          formattedroomPrice.replace("%dataLink%", allRooms.room[i].link);
          formattedroomPrice.replace("%dataTitleLink%", allRooms.room[i].title);


        var formattedroomCard = formattedroomImg+formattedroomTitle+formattedroomStart+formattedroomContent+formattedroomPrice;

          $('.our-rooms__wrap').append(formattedroomCard);


  }
    $('.our-rooms__wrap').slick({
    mobileFirst: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });

};


    var urlJson = "https://api.myjson.com/bins/co7sz"
    var getJson = $.getJSON( urlJson, function(json) {
    console.log( "success" );
    var Allrooms = json
    RedderAllrooms(Allrooms);
  })
    .done(function() {

    })
    .fail(function() {
      console.log( "offline obj" );
      var allRooms = {
        "numbers": 7,
        "room":[
            {
              "img": "img/room-1.png",
              "title": "superior room",
              "start" : 5,
              "content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              "link": "index.html",
              "price": 250
          },{
              "img": "img/room-2.png",
              "title": "sigle room",
              "start" : 3,
              "content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              "link": "index.html",
              "price": 244
          },{
              "img": "img/room-3.png",
              "title": "sigle room",
              "start" : 2,
              "content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              "link": "index.html",
              "price": 300
          },{
              "img": "img/room-4.png",
              "title": "sigle room",
              "start" : 5,
              "content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              "link": "index.html",
              "price": 300
          },{
              "img": "img/room-5.png",
              "title": "sigle room",
              "start" : 1,
              "content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              "link": "index.html",
              "price": 300
          },{
              "img": "img/room-8.png",
              "title": "sigle room",
              "start" : 4,
              "content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              "link": "index.html",
              "price": 300
          },{
              "img": "img/room-7.png",
              "title": "sigle room",
              "start" : 5,
              "content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              "link": "index.html",
              "price": 300
          }
      ]
      };
      RedderAllrooms(allRooms);
    })
    .always(function() {
      console.log( "complete");
    });






  $('#left-gallery').click(function(event) {
    /* Act on the event */

    $('.all-gallery').slick("slickPrev");
  });
  $('#right-gallery').click(function(event) {
    $('.all-gallery').slick("slickNext");
  });
  $('#left-cardrooms').click(function(event){
    $('.our-rooms__wrap').slick("slickPrev");
  });
  $('#right-cardrooms').click(function(event){
    $('.our-rooms__wrap').slick("slickNext");
  });
  $('#welcome-left').click(function(event){
    $('.silde-welcome').slick("slickPrev");
  });
  $('#welcome-right').click(function(event){
    $('.silde-welcome').slick("slickNext");
  });
  $('.wrap-boxComment').slick({
    arrows: false,
    dots: true,
    dotsClass: 'comment-dot',
    autoplay: false,
    autoplaySpeed: 1200,
    mobileFirst: true

  });





  $('.silde-welcome').slick({
    mobileFirst: true,
    arrows: false,
    autoplay: false,
    fade: true,
    cssEase: 'linear',
    autoplaySpeed: 100

  });
  $('.all-gallery').slick({
  mobileFirst: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 900,

  responsive: [
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,  
      }
    }
  ]
  });



});
