document.querySelector('.js-delete-completed-button')
    .addEventListener('click', async () => {
        //const allLists = await getAllListsAsync();
        const {currentList, allLists} = await getCurrentList();
        currentList.items = currentList.items.filter((item) => !item.completed);
        setAllListsAsync(allLists);
        showItems();
    });

document.querySelector('.js-delete-all-button')
    .addEventListener('click', async () => {
        //const allLists = await getAllListsAsync();
        //const currentList = await getCurrentList();
        const {currentList, allLists} = await getCurrentList();
        currentList.items = [];
        setAllListsAsync(allLists);
        showItems();
    })
