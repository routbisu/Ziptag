"use strict";

(function() {
  // Handle side nav bar for small screens
  $(document).ready(function() {
    $("#sidebar-hamburger").click(function(event) {
      $("#side-nav-bar").addClass('open-side-nav');
      event.stopPropagation();
    });
  });

  $(window).click(function() {
    $("#side-nav-bar").removeClass('open-side-nav');
  });

  $('#side-nav-bar').click(function(event){
      event.stopPropagation();
  });

})();
