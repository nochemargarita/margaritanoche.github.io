'use strict';
$('.scrollto').click(function(e){
    e.preventDefault();
    var scrollElm = $(this).attr('href');
    var scrollTo = $(scrollElm).offset().top;
    $('html, body').animate({ scrollTop: scrollTo - 100 }, "slow");
});