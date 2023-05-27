let notes = [];
let noteList = null;

window.onload = () => {
    noteList = document.getElementById('note-list');
    onLoad();
}

insertNote = () => {
    if(input.value) {
        notes.push(input.value);
        noteList.innerText = '';
        notes.forEach((item) => {
            newItem = document.createElement('li');
            noteList.appendChild(newItem);
            newItem.innerText = item
        })

        input.value = '';
    } else {
        notes.push('---');
        noteList.innerText = '';
        notes.forEach((item) => {
            newItem = document.createElement('li');
            noteList.appendChild(newItem);
            newItem.innerText = item;
        })

        input.value = '';
    }
}

onLoad = () => {
    if (!notes.length) {
        newItem = document.createElement('li');
        noteList.appendChild(newItem);
        newItem.classList.add('disabled-item');
        newItem.innerText = 'Nada por aqui ainda...';
    }
}