const bobInterraction = (message: string): string => {
    if ((message === message.toUpperCase()) && (message.includes('?')) && containsAnyLetter(message)) {
        return "Calm down, I know what I'm doing!"
    }
    else if ((message === message.toUpperCase()) && containsAnyLetter(message)) {
        return 'Whoa, chill out!';
    } else if (isThelastCharacter('?', message)) {
        return 'Sure.';
    } else if (isEmptyOrSpaces(message)) {
        return 'Fine. Be that way!'
    }
    else {
        return 'Whatever.';
    }
}

const isThelastCharacter = (character: string, text: string): boolean => {
    let textWithRemovedWhiteSpaces = text.replace(/\s/g, "");
    return (textWithRemovedWhiteSpaces.slice(-1) === character) ? true : false;
}

const isEmptyOrSpaces = (string: string): boolean => {
    const stringRemovedBackSlash: string = string = string.replace(/\/$/, "");
    const textWithRemovedWhiteSpaces = stringRemovedBackSlash.replace(/\s/g, "");
    return textWithRemovedWhiteSpaces === null || textWithRemovedWhiteSpaces.match(/^ *$/) !== null;
}

function containsAnyLetter(text: string): boolean {
    return /[a-zA-Z]/.test(text);
}

export default bobInterraction;
