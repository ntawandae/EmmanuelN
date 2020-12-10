$(document).ready(function(){
        $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.up').addClass("show");
        }else{
            $('.up').removeClass("show");
        }
    });

    // slide-up script
    $('.up').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
//typing effect
    var typed = new Typed(".typing-2", {
        strings: ["Web-Developer", "Designer", "Freelancer","Photographer"],
        typeSpeed: 180,
        backSpeed: 90,
        loop: true
    });
    //aos effect
    AOS.init({
    easing:'ease',
    duration:1800,
    once: true
  });


});
//data filtering
 const filterContainer = document.querySelector(".portfolio-filter"),
 portfolioItems = document.querySelectorAll(".portfolio-item");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("filter-item")){
   	 // deactivate existing active 'filter-item'
   	 filterContainer.querySelector(".active").classList.remove("active");
   	 // activate new 'filter-item'
   	 event.target.classList.add("active");
   	 const filterValue = event.target.getAttribute("data-filter");
   	 portfolioItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove("hide");
       	 item.classList.add("show");
       }
       else{
       	item.classList.remove("show");
       	item.classList.add("hide");
       }
   	 });
   }
 });
//active testimonial
    $('.testimonial-pics img').click(function() {
      $(".testimonial-pics img").removeClass("active");
      $(this).addClass("active");

      $(".testimonial-text").removeClass("active");
      $("#" + $(this).attr("alt")).addClass("active");
    });
//google api maps
    function init_map() {
      var myOptions = {
        zoom: 14,
        center: new google.maps.LatLng(19.075314480255834, 72.88153973865361),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
      marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(36.164129567567876, 120.4973639130302)
      });
      infowindow = new google.maps.InfoWindow({
        content: '<strong>My Location</strong><br>Laoshan<br>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
      });
      infowindow.open(map, marker);
    }
    google.maps.event.addDomListener(window, 'load', init_map);
