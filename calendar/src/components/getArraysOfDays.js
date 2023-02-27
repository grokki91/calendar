export default function getArraysOfDays(arr) {

    const result = [];
    for (let start = 0, end = 7; start < arr.length; start += 7, end += 7)
        result.push(arr.slice(start, end));

    return result;
}