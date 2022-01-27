$(".show-sidebar").click(function(){
    $(".sidebar").animate({marginLeft:0});
})

$(".hide-sidebar").click(function(){
    $(".sidebar").animate({marginLeft:"-100%"});
})
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
