$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200, 
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/slider_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/slider_right.png"></button>',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
            },
               {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows:false
                }
              }
            
            ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        });
      };
      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

      //modal
      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form) {
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Пожалуйста, введите своё имя",
          phone: "Пожалуйста, введите свой телефонный номер",
          email: {
            required: "Пожалуйста, введите свою почту",
            email: "Неправильно введён адрес почты"
          }
        }
      });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask(" +7 (999) 999-99-99");
});