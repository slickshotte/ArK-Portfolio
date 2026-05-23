(function() {
    const hasBooted = sessionStorage.getItem('bootSequenceCompleted');

    if (hasBooted !== 'true') {
        window.location.href = 'index.html';
    }
})();