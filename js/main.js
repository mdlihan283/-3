// start jquery
$(document).ready(function(){
   $(window).scroll(function(){
      if (this.scrollY > 20) {
         $('#navBar').addClass('sticky');
      } else {
         $('#navBar').removeClass('sticky');
      }
   });
//mobile menu icon click
$('.mobileMenu').click(function(){
   $('.menu').toggleClass('showMenu');
   $('.mobileMenu i').toggleClass('fa-times');
})
});