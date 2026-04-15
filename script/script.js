function tryOpen() {
    if (!word) return;

    // Формируем fallback URL для RuStore (обязательно кодируем)
    const encodedStoreUrl = encodeURIComponent(storeUrl);
    
    // Специальный формат для Android Chrome
    const intentUrl = `intent://invite?word=${word}#Intent;scheme=wordy-fresh;package=${packageName};S.browser_fallback_url=${encodedStoreUrl};end;`;

    // Определяем, Android это или нет (простая проверка)
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
        // Chrome сам разберется: либо откроет апку, либо кинет в RuStore
        window.location.href = intentUrl;
    } else {
        // Для iOS или ПК используем старый метод
        window.location.href = deepLink;
        
        setTimeout(() => {
            if (!document.hidden) {
                document.getElementById('storeBtn').style.display = 'flex';
            }
        }, 2000);
    }
}
