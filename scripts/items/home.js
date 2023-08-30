document.querySelector('.list-home-button')
    .addEventListener('click', () => {
        removeCurListIdxAsync();
        window.location.href = 'index.html';
});