async function showLists() {
    document.querySelector('.js-list-of-lists').innerHTML = '';
    let allLists = await getAllListsAsync();
    allLists.lists.forEach((list) => {
        // list name in list of lists
        const listNameElem = generateButton(list.name, 'a-list-button');
        listNameElem.addEventListener('click', () => {
            listIdx = allLists.lists.indexOf(list);
            setCurListIdxAsync(listIdx);
            window.location.href = 'a-list.html';
        });
        
        // delete list button
        const deleteListElem = generateButton('', 'delete-list-button');
        const deleteListImg = generateDeleteImg('delete-list-img');
        deleteListElem.appendChild(deleteListImg);
        deleteListElem.addEventListener('click', () => {
            let deleteIdx = allLists.lists.indexOf(list);
            allLists.lists.splice(deleteIdx, 1);
            setAllListsAsync(allLists);
            showLists();
        });

        let paraElem = generateParagraph('list-para');
        appendChildren(paraElem, [listNameElem, deleteListElem]);
        document.querySelector('.js-list-of-lists').appendChild(paraElem);
    });
}

showLists();