async function setHeader() {
    const {currentList} = await getCurrentList();
    //const currentList = await getCurrentList();
    document.title = `${currentList.name}`;
    document.querySelector('.js-list-name').innerText = `${currentList.name}`;
}

async function showItems() {
    document.querySelector('.js-list-items').innerHTML = '';
    const {currentList, allLists} = await getCurrentList();
    //const allLists = await getAllListsAsync();
    //const currentList = await getCurrentList();
    currentList.items.forEach((item) => {
        // item checkbox
        const checkboxElem = generateCheckbox('item-checkbox', item.completed);
        checkboxElem.addEventListener('change', (event) => {
            item.completed = event.currentTarget.checked;
            setAllListsAsync(allLists);
        });

        // item text
        const editItemElem = generateTextInput('item-edit-input', '', item.name);
        editItemElem.addEventListener('keydown', (event) => {
            if (event.key == 'Enter') {
                item.name = event.currentTarget.value;
                setAllListsAsync(allLists);
                showItems();
            }
        });
        editItemElem.addEventListener('blur', (event) => {
            item.name = event.currentTarget.value;
            setAllListsAsync(allLists);
        })

        // delete item
        const deleteItemElem = generateButton('', 'delete-item-button');
        const deleteItemImg = generateDeleteImg('delete-item-img');
        deleteItemElem.appendChild(deleteItemImg);
        deleteItemElem.addEventListener('click', () => {
            let deleteIdx = currentList.items.indexOf(item);
            currentList.items.splice(deleteIdx, 1);
            setAllListsAsync(allLists);
            showLists();
        });

        const itemLineElem = document.createElement('ul');
        appendChildren(itemLineElem, [checkboxElem, editItemElem, deleteItemElem]);

        document.querySelector('.js-list-items').appendChild(itemLineElem);
    });
}

async function showNavigation() {
    document.querySelector('.js-list-of-lists-div').innerHTML = '';
    const allLists = await getAllListsAsync();
    allLists.lists.forEach((list) => {
        const navElem = generateButton(list.name, 'list-navigation');
        navElem.addEventListener('click', async () => {
            currentIdx = allLists.lists.indexOf(list);
            await setCurListIdxAsync(currentIdx);
            setHeader();
            showItems();
        })
        document.querySelector('.js-list-of-lists-div').appendChild(navElem);
    });
}

setHeader();
showItems();
showNavigation();