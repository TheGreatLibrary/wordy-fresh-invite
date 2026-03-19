
const params = new URLSearchParams(window.location.search);
const word = params.get('word');
const packageName = 'com.sinya.projects.wordle';
const storeUrl = `https://www.rustore.ru/catalog/app/${packageName}`;
const deepLink = `wordy-fresh://invite?word=${word}`;

function tryOpen() {
    const startTime = Date.now();
    window.location.href = deepLink;

    setTimeout(() => {
        const elapsed = Date.now() - startTime;
        // Если фокус остался (приложение не открылось)
        document.getElementById('status').textContent = 'Приложение не найдено. Скачай Wordy в RuStore 👇';
        document.getElementById('storeBtn').style.display = 'flex';
        document.getElementById('openBtn').textContent = 'Попробовать снова';
    }, 1600);
}

// Автозапуск только если есть word в параметре
if (word) {
    tryOpen();
} else {
    document.getElementById('status').textContent = 'Ссылка недействительна';
}
