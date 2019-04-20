var helper  = new Helpers ();


function Helpers(){
  var methods = this;
  var wrapper = $('.wrapper');
  var init =  function(){
    // wave.
    Waves.init();
    // Waves.attach('a',['waves-block' , 'waves-light']);
    // Waves.attach('a',['waves-button','waves-float']);


    methods.scrollUp();
    methods.select2Search();
    methods.scrollOptionSticky();
    methods.reponsiveTableMobile();
  }
  //table mobile
  // methods.reponsiveTableMobile = function(){
  //   $(function(){
  //     $('.table-mobile .toggle-trigger').on('click',function(){
  //       $(this).closest('tr').toggleClass('expand');
  //     });
  //   });
  // }
  //select2 search no result
  methods.select2Search = function(){
    $(function(){
      $('.select2').select2();
      // var select = $('.select-warehouse').select2({
      //   language: {
      //     noResults: function() {
      //       return "<a class='create-supplier' onclick='load_data_to_modal(this,\"#myModal\")' data-url='modal-create-supplier.html'>Tạo mới nhà cung cấp</a>";
      //     }
      //   },
      //   escapeMarkup: function (markup) {
      //     return markup;
      //   }
      // });
      // $('#myModal').on('show.bs.modal', function (e) {
      //   select.select2("close");
      // })
    });
  }
  // fixed menu when srcoll
  methods.scrollOptionSticky=function(){
    $(window).scroll(function(){
      var sticky = $('.option-info-order'),
      scroll = $(window).scrollTop();
      if (scroll >= 170){
        sticky.addClass('fixed');
      }
      else{
        sticky.removeClass('fixed');
      }

      if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    });
    // $(window).on('load resize', function(event) {
    //   $('.page-content').css('min-height', $('body').height()  - $('.bg-breakcrumb').height() - $('#navigation').height() - $('header').height() - $('footer').height());
    // });
  }
  // display button scroll top
  methods.scrollUp = function(){
    $('.scrollup').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
  }
  // call back init function
  init();
  return this;
}
