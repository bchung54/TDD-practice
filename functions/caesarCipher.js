export function cipher(n, string) {
    const output = [];
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char.match(/[a-z]/)) {
            output.push(rot(n, char));
        } else if (char.match(/[A-Z]/)) {
            output.push(rot(n, char).toUpperCase());
        } else {
            output.push(char);
        }
    }
    return output.join('');
}

export function rot(n, char) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const charIndex = alpha.indexOf(char.toLowerCase());
    return alpha[(charIndex + n) % 26];
}