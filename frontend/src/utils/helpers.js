export function convertTime (time) {
    console.log(time)
    let date = new Date(time)
    return date.toISOString().split('T')[0];
}