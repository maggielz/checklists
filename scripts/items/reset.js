document.querySelector('.js-reset-button').addEventListener('click', async () => {
    //const allLists = await getAllListsAsync();
    //const currentList = await getCurrentList();
    const {currentList, allLists} = await getCurrentList();
    currentList.items.forEach((item) => {
        item.completed = false;
    });
    setAllListsAsync(allLists);
    showItems();
})