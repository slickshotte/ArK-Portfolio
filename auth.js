(function() {
    const hasBooted = sessionStorage.getItem('bootSequenceCompleted');
    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

    // Only redirect if they haven't booted AND they are NOT already on the index page
    if (hasBooted !== 'true' && !isIndex) {
        window.location.href = 'index.html';
    }
})();
