$('.slider').slick({
    infinite: false,
    arrows: false,
    dots: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
          {
            breakpoint: 1008,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,  
                
            }
          },
          {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,  
               
            }
          },
    ]
  });
