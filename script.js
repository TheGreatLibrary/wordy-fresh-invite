const params = new URLSearchParams(window.location.search);
const word = params.get('word');
const lang = params.get('lang') || 'ru';

const packageName = 'com.sinya.projects.wordle';
const storeUrl = `https://www.rustore.ru/catalog/app/${packageName}`;
const deepLink = `wordy-fresh://invite?word=${word}&lang=${lang}`;

function tryOpen() {
    window.location.href = deepLink;

    setTimeout(() => {
        document.getElementById('status').textContent = 'Приложение не найдено. Скачай Wordy в RuStore 👇';
        document.getElementById('storeBtn').style.display = 'flex';
        document.getElementById('openBtn').textContent = 'Попробовать снова';
    }, 1600);
}

if (word) {
    tryOpen();
} else {
    document.getElementById('status').textContent = 'Ссылка недействительна';
}
