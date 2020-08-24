let toggle = document.querySelector('#toggle');
let header = document.querySelector('#header');

function changeBg() {
	header.style.backgroundColor = "black"
	$(".nav-link").on("click", function(){
	   $('.navbar-collapse').collapse('hide');
	});
}

function changeAgain() {
	header.style.backgroundColor = "transparent";
}

