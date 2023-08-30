async function getCurrentList() {
    const curListIdx = await getCurListIdxAsync();

    const allLists = await getAllListsAsync();
    if (allLists.lists.length <= 0) {
        console.log('not referencing actual list');
        window.location.href = 'index.html';
    };

    //return allLists.lists[curListIdx];

    return {
        currentList: allLists.lists[curListIdx],
        allLists: allLists
    };
}