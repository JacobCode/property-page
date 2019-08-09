




const init = function () {
	document.querySelector('.nav-toggler').addEventListener('click', function () {
		console.log("CLICK")
		this.classList.toggle('open');
		document.querySelector('.nav-menu').classList.toggle('open');
	})
	document.addEventListener('scroll', function() {
		if (document.querySelector('.nav-toggler').classList[1] !== undefined && document.querySelector('.nav-menu').classList[1] !== undefined) {
			document.querySelector('.nav-toggler').classList.remove('open');
			document.querySelector('.nav-menu').classList.remove('open');
		}
	})
};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
	init();
} else {
	document.addEventListener("DOMContentLoaded", init);
}