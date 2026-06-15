
export function formatDate(date: Date) {
    return date.toLocaleDateString('en-GB', {
        // weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}