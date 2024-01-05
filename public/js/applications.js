// Global Elements
const eventDatePopup = document.querySelector('#event-date-popup');
const eventDateBtn = document.querySelector('#event-date-create-button');
const eventDateAddBtn = document.querySelector('#event-add-event-button');

// Event Functions
const toggleEventDatePopup = ()=> {
    eventDatePopup.classList.toggle('hidden')
};


// Event Listeners
eventDateBtn.addEventListener('click', toggleEventDatePopup);
eventDateAddBtn.addEventListener('click', toggleEventDatePopup);