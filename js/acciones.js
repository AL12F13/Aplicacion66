// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnvibrar').on('tap', function(){ 
	navigator.vibrate(10000);
	});//tap a btnvibrar
	$('#btnbeep').on('tap', function(){
		navigator.beep(1);
	});//tap a btnbeep
	$('#izquierda').on('swipeleft',
	function(){
		alert("Barrio a la izq");
	});
	$('#izquierda').on('swiperinght',
	function(){
		alert("Barrio a la der");
	});
}); 
});

