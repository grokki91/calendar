export default function getDaysBetweenDates(start, end) {
    const startClone = start.clone();
    const arr = [];
    while (startClone.isSameOrBefore(end)) {
        arr.push(startClone.format('DD'));
        startClone.add(1, 'days');
    }
    return arr;
}