function createNote(){
    const stickyNotes = document.querySelector(".sticky-notes");
    const noteContainer = document.createElement("div");
    noteContainer.classList.add("note-container");
    const noteContent = document.createElement("div");
    noteContainer.classList.add("note-content");
    noteContent.contentEditable=true;
    noteContent.textContent="new note";

    const noteActions = document.createElement("div");
    noteActions.classList.add("notes-action");

    const deleteButton = document.createElement("buttons");
    deleteButton.classList.add("delete-note");
    deleteButton.textContent = "Delete";
    deleteButton.onclick=function(){
        noteContainer.remove();
    };

    noteActions.appendChild(deleteButton);
    noteContainer.appendChild(noteContent);
    noteContainer.appendChild(noteActions);
    stickyNotes.appendChild(noteContainer);
    
}

function deleteNote(button){
    const noteContainer = button.closest(".note-container");
    noteContainer.remove();

}