export const firstLetterUpperCase = (string: string) => {
  const newString = string
    .split(" ")
    .map(word => word.split(""))
    .map((word) =>
      word
        .map((letter, index) => (index === 0) ? letter.toUpperCase() : letter)
        .join("")
    )
    .join(" ")

  return newString;
}