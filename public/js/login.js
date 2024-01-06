// Global Elements
const popup = document.querySelector('#jsearch-key-popup');
const popupBtn = document.querySelector('#jsearch-key-popup-button');
const jsearchInstruction = document.querySelector('#jsearch-instructions');



// Toggles view of jsearch instructions popup
const jsearchPopupToggle = ()=> {
    popup.classList.toggle('hidden');   
}

// Event listeners
popupBtn.addEventListener('click', jsearchPopupToggle);
jsearchInstruction.addEventListener('click', jsearchPopupToggle);