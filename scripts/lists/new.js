async function addNewList() {
    const allLists = await getAllListsAsync();
    allLists.lists.push({
        name: document.querySelector('.js-new-list-input').value,
        items: [],
        showCompleted: true
    });
    document.querySelector('.js-new-list-input').value = '';
    await setAllListsAsync(allLists);
    showLists();
}

document.querySelector('.js-new-list-input')
    .addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            addNewList();
        }
});