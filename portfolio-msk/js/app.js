(function($) {

  $(document).ready(function() {

    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('#overlay, .close-modal');
    var modal = $('.dialog');
    var body = $('body');

    open_modal.click( function(event){
      event.preventDefault();
      var div = $(this).attr('href');
      overlay.fadeIn(400,
        function(){
          $(div)
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
        });
      $(body).css('overflow', 'hidden');
      $(modal).css('overflow', 'auto');
    });
    close.click( function(){
      modal
      .animate({opacity: 0, top: '45%'}, 200,
        function(){
          $(this).css('display', 'none');
          overlay.fadeOut(400);
        });
      $(body).css('overflow', 'auto');
    });


  })

})(jQuery)
