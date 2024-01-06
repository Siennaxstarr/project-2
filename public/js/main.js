//Global Elements
const hamburger = document.querySelector('#hamburgerIcon svg');
const exitHamburger = document.querySelector('#exitHamburgerIcon svg');
const mobileMenuButton = document.querySelector('#mobile-menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

const homeTabs = document.querySelectorAll('a[href="/"]');
const jobSearchTabs = document.querySelectorAll('a[href="/job-search"]');
const applicationTabs = document.querySelectorAll('a[href="/applications"]');

//Toggles mobile menu navigation
mobileMenuButton.addEventListener('click', () => {
	exitHamburger.classList.toggle('block');
	exitHamburger.classList.toggle('hidden');

	hamburger.classList.toggle('block');
	hamburger.classList.toggle('hidden');

	mobileMenu.classList.toggle('hidden');

});

//Changes active tab in navigation
switch (window.location.pathname) {
	case '/':
		Array.from(homeTabs).map(tab => tab.classList.add('bg-gray-900', 'text-white'));
		break;
	case '/job-search':
		Array.from(jobSearchTabs).map(tab => tab.classList.add('bg-gray-900', 'text-white'));		
		break;
	case '/applications':
		Array.from(applicationTabs).map(tab => tab.classList.add('bg-gray-900', 'text-white'));		
		break;
}