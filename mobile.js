$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
  });

  // Add touch event listeners
  owl.on("drag.owl.carousel", function (event) {
    $(".dot").removeClass("active");
  });

  owl.on("changed.owl.carousel", function (event) {
    var current = event.item.index;
    var dots = $(".dot");
    dots.removeClass("active");
    dots.eq(current % dots.length).addClass("active");
  });
  $(".dots-indicator .dot").click(function () {
    var index = $(this).index();
    owl.trigger("to.owl.carousel", [index, 300]);
    $(".dot").removeClass("active");
    $(this).addClass("active");
  });
});
