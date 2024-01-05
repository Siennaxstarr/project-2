// Global Elements
const eventDatePopup = document.querySelector('#event-date-popup');
const eventDateBtn = document.querySelector('#event-date-create-button');
const eventDateAddBtn = document.querySelector('#event-add-event-button');
const todoPopup = document.querySelector('#todo-popup');
const todoBtn = document.querySelector('#create-todo-button');
const todoAddBtn = document.querySelector('#add-todo-button');

// Event Functions
const toggleEventDatePopup = ()=> {
    eventDatePopup.classList.toggle('hidden')
};
const toggleTodoPopup = ()=> {
    todoPopup.classList.toggle('hidden')
};


// Event Listeners
eventDateBtn.addEventListener('click', toggleEventDatePopup);
eventDateAddBtn.addEventListener('click', toggleEventDatePopup);
todoAddBtn.addEventListener('click', toggleTodoPopup);
todoBtn.addEventListener('click', toggleTodoPopup);