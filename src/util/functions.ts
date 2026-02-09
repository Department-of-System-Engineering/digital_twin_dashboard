export function convertDateToTimestampTz(date: string): string {
    const d = new Date(date);
    return d.toISOString();
}

export function convertTimestampTzToDate(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toISOString().slice(0, 16);
}
