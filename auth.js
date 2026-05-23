document.addEventListener("DOMContentLoaded", () => {
    const hasBooted = sessionStorage.getItem('bootSequenceCompleted');

    if (!hasBooted && window.location.pathname !== '/index.html') {
        window.location.href = 'index.html'; 
    }
});
