export function getFormattedDate(date) {
    return new Date(Date.parse(date)).toLocaleDateString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    });
}
