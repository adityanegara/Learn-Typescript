const isPangram = (text: string): boolean => {
    const regex = /([a-z])(?!.*\1)/g;
    const toLowerCaseText = text.toLowerCase();
    return (toLowerCaseText.match(regex) || []).length === 26;
}

export default isPangram;