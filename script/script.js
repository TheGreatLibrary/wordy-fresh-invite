const params = new URLSearchParams(window.location.search);
const word = params.get('word');
const packageName = 'com.sinya.projects.wordle';
const storeUrl = `https://www.rustore.ru/catalog/app/${packageName}`;
const deepLink = `wordy-fresh://invite?word=${word}`;

function tryOpen() {
    if (!word) return;

    // Пытаемся открыть приложение
    window.location.href = deepLink;
    document.getElementById('status').textContent = 'Открываем Wordy...';

    // Даем браузеру чуть больше времени (2 секунды)
    setTimeout(() => {
        // Если страница ВСЁ ЕЩЁ видима (не скрыта другим приложением), значит диплинк не сработал
        if (!document.hidden) {
            document.getElementById('status').textContent = 'Приложение не найдено. Скачай Wordy 👇';
            document.getElementById('storeBtn').style.display = 'flex';
            document.getElementById('openBtn').textContent = 'Попробовать снова';
        }
    }, 2000);
}

// Убираем автозапуск! Оставляем только проверку на валидность ссылки
if (!word) {
    document.getElementById('status').textContent = 'Ссылка недействительна';
    document.getElementById('openBtn').style.display = 'none';
} else {
    document.getElementById('status').textContent = 'Нажми кнопку выше, чтобы начать';
}
