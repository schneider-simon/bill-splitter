export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export const getCharacterAtIndex = (index: number) => {
  return alphabet[index % alphabet.length]
}