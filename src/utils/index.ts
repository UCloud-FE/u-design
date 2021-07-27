export function delLast(str: string, del: string): string {
    if (typeof str !== 'string') {
        return str;
    }

    let index = str.lastIndexOf(del);
    return str.substring(0, index) + str.substring(index + 1, str.length);
}
