document.getElementById('informacao-extra').addEventListener('click', function() {
    const infoExtra = document.getElementById('info-extra');
    if (infoExtra.style.display === 'none') {
        infoExtra.style.display = 'block';
    } else {
        infoExtra.style.display = 'none';
    }
});