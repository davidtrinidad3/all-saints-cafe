function manejarScroll() {
	const style = document.createElement('style');
	style.innerHTML = `.estilosAcercaDe { transform: translateY(window.scrollY);}`;
	document.head.appendChild(style);

	const style2 = document.createElement('style');
	style2.innerHTML = `.estilosAcercaDe2 { transform: translateY(window.scrollY);}`;
	document.head.appendChild(style2);

	const scroll = document.querySelector('.acerca-de__textos');

	scroll.classList.remove('estilosAcercaDe', 'estilosAcercaDe2');

	if (scroll) {
		const translateYValue = -window.scrollY + 'px';

		if (window.scrollY > 300) {
			scroll.style.transform = `translateY(${translateYValue})`;
		} else if (window.scrollY < 700) {
			scroll.style.transform = `translateY(${translateYValue})`;
		}
	}
}
window.addEventListener('scroll', manejarScroll);
