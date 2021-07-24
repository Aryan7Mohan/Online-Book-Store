
function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



function openSlideMenu(){
    document.getElementById('meenu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }
  function closeSlideMenu(){
    document.getElementById('meenu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }

  $(document).ready(function() {
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = true;

  trigger.click(function() {
    hamburger_cross();
  });

  function hamburger_cross() {

    if (isClosed == true) {
      //overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      //overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function() {
    $('#wrapper').toggleClass('toggled');
  });
});