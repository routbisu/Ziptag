"use strict";

// Hide loader overlay div
var hideLoader = function() {
  $('.loader-overlay').hide();
}

var showLoader = function() {
  $('.loader-overlay').show();
}

var loaderTest = function() {
  console.log("Yes");
  showLoader();
  setTimeout(function() {
    hideLoader();
  }, 6000);
}

// Handle side nav bar for small screens
$(document).ready(function() {

  // Hamburger menu
  $("#sidebar-hamburger").click(function(event) {
    $("#side-nav-bar").addClass('open-side-nav');
    event.stopPropagation();
  });

  $(window).click(function() {
    $("#side-nav-bar").removeClass('open-side-nav');
  });

  $('#side-nav-bar').click(function(event){
      event.stopPropagation();
  });

  // Submenu - Side nav
  $('#master-data-sub-menu').hide();

  $('#master-data-menu').hover(function() {
    $('#master-data-menu .right-chevron').addClass('right-chevron-hovered');
  }, function() {
    $('#master-data-menu .right-chevron').removeClass('right-chevron-hovered');
  });

  $('#master-data-menu').click(function () {
    $('#master-data-sub-menu').slideToggle();
  });

  hideLoader();

  $('#loaderTest').click(loaderTest);
});



