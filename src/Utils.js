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

function arrayFromZero(num) {
    return Array.from(Array(num).keys());
}

function getMathData(data) {
    const mathResult = data.filter((entry) => entry.tag === "geometry");
    return mathResult;
}

function getReadingAndWritingData(data) {
    const readingResult = data.filter((entry) => entry.tag === "reading");
    return readingResult;
}

export { convertToBarChartArray, arrayFromZero, getMathData, getReadingAndWritingData };