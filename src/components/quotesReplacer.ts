export const quotesReplacer = (string: string) => {
    const obj1 = string?.replace(/&quot;/g, '"')
    const obj2 = obj1?.replace(/&#039;/g, "'")
    return obj2;
}