async function addNewItem() {
    //const allLists = await getAllListsAsync();
    //const currentList = await getCurrentList();
    const {currentList, allLists} = await getCurrentList();
    currentList.items.push({
        name: document.querySelector('.js-new-item-input').value,
        completed: false
    });
    document.querySelector('.js-new-item-input').value = '';
    setAllListsAsync(allLists);
    showItems();
}

document.querySelector('.js-new-item-input')
    .addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            addNewItem();
        }
    });