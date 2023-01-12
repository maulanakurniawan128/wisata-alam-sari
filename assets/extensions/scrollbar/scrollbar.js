var barTimeout;

document.body.onscroll = () => {
	if (barTimeout) {
		clearTimeout(barTimeout);
	}
	barTimeout = setTimeout(() => {
		document.body.classList.remove('scrolling');
	}, 500);
	document.body.classList.add('scrolling');
}
