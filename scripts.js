$(window).on('load', () => {
  //remove the loading screen after site has finished loading
  $(".loading-screen").fadeOut("slow");

  AOS.init();

  $('#contact-form').submit((event) => {
      event.preventDefault();
      
      //enable the loading spinner
      $("#submit-btn").html('Sending &nbsp; <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true">');

      emailjs.sendForm('contact_service', 'template_pujf54r', event.currentTarget, "user_VrEOLCVXUi06JSSqeXuqQ")
          .then(() => {
            //resets the form, button and displays resulting message to user
              $('#contact-form').trigger('reset');
              $("#submit-btn").html('Send');
              $("#email-result").hide().html("Message sent successfully! I'll get back to you as soon as possible.").fadeIn('slow');
          }, (error) => {
              console.dir(error);
              $("#email-result").hide().html("Sorry, this message couldn't be sent. Please get in contact with me through email directly.").fadeIn('slow');
          });
  });
});

$(window).scroll(() =>{scrollButtonHandler()});

scrollButtonHandler = () => {
  var scrollTop = $(window).scrollTop();
  scrollTop > 100 ? $("#scroll-btn").show() : $("#scroll-btn").hide();
}

$("#scroll-btn").click(() => { $(window).scrollTop(0); });
 