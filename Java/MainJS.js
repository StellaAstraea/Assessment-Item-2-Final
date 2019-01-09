//Javascript loops the images around, having the user click and drag them
$(document).ready(function(){
	console.log("ready");
	$(".owl-carousel").owlCarousel({
		margin: 10,
		loop:true,
		autoWidth:true,
		items:4
	});
});