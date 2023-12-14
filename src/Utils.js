function convertToBarChartArray(data) {
    const barChartData = Object.values(data.reduce((acc, entry) => {
        const { tag, is_correct } = entry;
        acc[tag] = acc[tag] || { tag, frequency: 0, number_correct: 0 };
        acc[tag].frequency += 1;
        if (is_correct) {
            acc[tag].number_correct += 1;
        }
        return acc;
    }, {}));

    return barChartData;
}

function getTagBarChartAnalysisData(tagBarChartData) {
    const top3MostFrequent = sortBarChartDataByFrequency(tagBarChartData).map(entry => entry.tag).slice(0, 3);
    const sortedTagByScorePercentage = sortBarChartDataByScorePercentage(tagBarChartData).map(entry => entry.tag)
    const top3MostCorrect = sortedTagByScorePercentage.slice(-3);
    const top3LeastCorrect = sortedTagByScorePercentage.slice(0, 3);

    return { top3MostFrequent, top3MostCorrect, top3LeastCorrect };
}

function sortBarChartDataByScorePercentage(barChartData) {
    return barChartData.sort((a, b) =>
        a.number_correct / a.frequency - b.number_correct / b.frequency);
}

function sortBarChartDataByFrequency(barChartData) {
    return barChartData.sort((a, b) => a.frequency - b.frequency);
}

function getMaxFrequency(barChartData) {
    return barChartData.reduce((max, current) => {
        return current.frequency > max ? current.frequency : max;
    }, 0);
}

function getSuperScores(testData) {
    const EBRWMax = testData.reduce((max, current) =>
        current.reading + current.writing > max ? current.reading + current.writing : max
        , 0);
    const mathMax = testData.reduce((max, current) =>
        current.math > max ? current.math : max
        , 0);

    return { EBRWMax, mathMax };
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

export {
    convertToBarChartArray,
    arrayFromZero,
    getMathData,
    getReadingAndWritingData,
    getMaxFrequency,
    getTagBarChartAnalysisData,
    getSuperScores,
};