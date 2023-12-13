function convertToBarChartArray(data) {
    const resultArray = Object.values(data.reduce((acc, entry) => {
        const { tag, is_correct } = entry;
        acc[tag] = acc[tag] || { tag, frequency: 0, number_correct: 0 };
        acc[tag].frequency += 1;
        if (is_correct) {
            acc[tag].number_correct += 1;
        }
        return acc;
    }, {}));

    return resultArray;
}

function getMaxFrequency(data) {
    return data.reduce((max, current) => {
        return current.frequency > max ? current.frequency : max;
    }, 0);
}

function getMathData(data) {
    const mathResult = data.filter((entry) => entry.tag === "geometry");
    return mathResult;
}

function getReadingAndWritingData(data) {
    const readingResult = data.filter((entry) => entry.tag === "reading");
    return readingResult;
}

function arrayFromZero(num) {
    return Array.from(Array(num).keys());
}

export { convertToBarChartArray, arrayFromZero, getMathData, getReadingAndWritingData, getMaxFrequency };