$(document).ready(function(){
    $(".select-btn > li").click(function() {
      $(".dropdown-wrapper .btn").html($(this).html());
    });
    $('.dropdown-wrapper .btn').click(function(){
      $('.select-btn').slideToggle();
    })
    $('.sub-value').click(function() {
        $('.sub-value.active').removeClass('active');
        $(this).addClass('active');
      $('.select-btn').slideUp();
    });
});