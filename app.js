if ('serviceWorker' in navigator) {
    navigator
        .serviceWorker
        .register('./service-worker.js', { scope: './' })
        .then(function (registration) {
            console.log('Service worker registered');
        })
        .catch(function (error) {
            console.error('Service worker error', error);
        });
}
