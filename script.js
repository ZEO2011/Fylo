// Go to top button

let scrollBtn = document.getElementById("scrollBtn");
scrollBtn.style.display = "none";

scrollBtn.onclick = function () {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
};

window.onscroll = function () {
	if (window.scrollY <= 800) {
		scrollBtn.style.opacity = "0";
	} else {
		scrollBtn.style.display = "block";
		scrollBtn.style.opacity = "1";
	}
};
