$(function () {

  // create google maps
  let map;
  let mapContainer = $('#map')[0];
  let mapCenter = { lat: 50.0064197, lng: 36.2349421 };
  map = new google.maps.Map(mapContainer, {
    center: mapCenter,
    zoom: 17,
    disableDefaultUI: true,
    // gray style
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });
  // создаем маркер
  let marker = new google.maps.Marker({
    position: mapCenter,
    map: map,
    title: 'Beetroot Academy',
    icon: 'images/Pin.png',
  });

  //scroll

  // $('.ba-scroll-down__link').on('click', function (event) {
  //   event.preventDefault();
  //   let $blockID = $(this);
  //   let $destantion = $blockID[0].offsetTop;
  //   console.log($destantion);
  //   if ($destantion != 0) {
  //     $('html, body').animate({
  //       scrollTo: $destantion
  //     }, 1000);
  //   }

  // });
  // $(".ba-scroll-down__link").on("click", function (e) {
  //   let href = $(this).attr('href');

  //   $('html, body').animate({
  //     scrollTop: $(href).offset().top
  //   }, {
  //     duration: 370,   // по умолчанию «400» 
  //     easing: "linear" // по умолчанию «swing» 
  //   });

  // });
  // header slick

  $('.ba-wrapp-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 875,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: false,
        }
      }
    ]
  });


  // slick fot news section 

  $('.ba-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 953,
        settings: {
          arrows: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 739,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: false,
        }
      }
    ]
  });

  // немного магии

  $('.ba-menu__circle').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).toggleClass('active');
    } else {
      $(this).toggleClass('active');
    }
  });


  // scroll for project
  let down = document.querySelector('.ba-scroll-down__link');

  down.onclick = function (event) {
    event.preventDefault();
    let blockID = this.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  // light scroll for all link
  let allLink = document.querySelectorAll('.ba-menu__link');

  for (let i = 0; i < allLink.length; i++) {
    allLink[i].onclick = function (event) {
      event.preventDefault();
      let blockID = this.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
});