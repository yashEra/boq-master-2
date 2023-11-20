export function convertWordsToTitleCase(inputString) {
    if (!inputString) return '';

    const words = inputString.split(/(?=[A-Z])/);

    const titleCaseWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    const titleCaseString = titleCaseWords.join(' ');

    return titleCaseString;
}