import uuid from 'uuid/v4'

export function convertTime (time) {
    let date = new Date(time)
    return date.toISOString().split('T')[0];
}

export function getUuid () {
    let x = uuid();
    return x 
}