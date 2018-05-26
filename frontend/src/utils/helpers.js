export function convertTime (time) {
    let date = new Date(time*1000);
    return date.toISOString().split('T')[0];
}