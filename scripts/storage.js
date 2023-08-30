const allListsStr = 'allLists';
const curListIdxStr = 'curListIdx';

async function getAllListsAsync() {
    return (await chrome.storage.sync.get([allListsStr]))[allListsStr];
}

async function setAllListsAsync(allLists) {
    await chrome.storage.sync.set({allLists});
}

async function getCurListIdxAsync() {
    return (await chrome.storage.sync.get([curListIdxStr]))[curListIdxStr];
}

async function setCurListIdxAsync(curListIdx) {
    await chrome.storage.sync.set({curListIdx});
}

async function removeCurListIdxAsync() {
    await chrome.storage.sync.remove([curListIdxStr]);
}