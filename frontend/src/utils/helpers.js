export function convertTime (time) {
    let date = new Date(time)
    return date.toISOString().split('T')[0];
}