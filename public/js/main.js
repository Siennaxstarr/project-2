//Global Elements
const hamburger = document.querySelector('#hamburgerIcon svg');
const exitHamburger = document.querySelector('#exitHamburgerIcon svg');
const mobileMenuButton = document.querySelector('#mobile-menu-button')
const mobileMenu = document.querySelector('#mobile-menu')

//Toggles mobile menu navigation
mobileMenuButton.addEventListener('click', () => {
	exitHamburger.classList.toggle('block');
	exitHamburger.classList.toggle('hidden');

	hamburger.classList.toggle('block');
	hamburger.classList.toggle('hidden');

	mobileMenu.classList.toggle('hidden');

})