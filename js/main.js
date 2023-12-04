// VARIABLES ----------------------------------

// buttons
const newNoteBtn = document.querySelector('.add-note');
const deleteNoteBtn = document.querySelectorAll('.delete-note');
const saveNoteBtn = document.querySelector('.save');
const closePopupBtn = document.querySelector('.cancel');
const deleteAllBtn = document.querySelector('.deleta-all');

// containers
const popupBox = document.querySelector('.popup');
const notesContainer = document.querySelector('.notes-container');

// inputs
const selectInput = document.querySelector('.category');
const texAreaInput = document.querySelector('.note-content');

// new note elements
let noteBox;
let noteHeading;
let noteTitle;
let noteButton;
let noteIcon;
let noteText;

// FUNCTIONS ----------------------------------

// showing and hiding DIV.POPUP function
const openPopup = () => {
	popupBox.classList.remove('hide');
};

const closePopup = () => {
	popupBox.classList.add('hide');
};

// finds all elements with class .note-box / contain them in nodeList / iterate trought all of them and delete each of them
const deleteAllNotes = () => {
	const allNotes = document.querySelectorAll('.note-box');
	allNotes.forEach((el) => {
		el.remove();
	});
};

const deleteOneNote = (e) => {
    console.log(e.target);
    if(e.target.matches('.fa-trash')) {
        e.target.closest('.note-box').remove();
    };
    
}

// creates DIV.NOTE-BOX with all needed elements inside and adds classes to them
const createNoteElements = () => {
	//creating all needed elements
	noteBox = document.createElement('div');
	noteHeading = document.createElement('div');
	noteTitle = document.createElement('h3');
	noteButton = document.createElement('button');
	noteIcon = document.createElement('i');
	noteText = document.createElement('p');

	//adding classes to right elements
	noteBox.classList.add('note-box');
	noteHeading.classList.add('note-heading');
	noteTitle.classList.add('note-title');
	noteButton.classList.add('delete-note');
	noteIcon.classList.add('fa-solid', 'fa-trash');
	noteText.classList.add('note-text');

	// putting all elements in correct order and adding them to DOM
	notesContainer.append(noteBox);
	noteBox.append(noteHeading);
	noteBox.append(noteText);
	noteHeading.append(noteTitle);
	noteHeading.append(noteButton);
	noteButton.append(noteIcon);

	noteTitle.textContent = selectInput.value;
	noteText.textContent = texAreaInput.value;
};

const saveNote = () => {
	if (selectInput.value === '' || texAreaInput.value === '') {
		console.log('ERROR');
	} else {
		createNoteElements();
		closePopup();
	}
};

// EVENT LISTENERS -----------------------

//listener on "add new note" button. runs 'openPopup' function
newNoteBtn.addEventListener('click', openPopup);
// deletes all notes with class.note-box
deleteAllBtn.addEventListener('click', deleteAllNotes);
saveNoteBtn.addEventListener('click', saveNote);
closePopupBtn.addEventListener('click', closePopup);
notesContainer.addEventListener('click', deleteOneNote);



