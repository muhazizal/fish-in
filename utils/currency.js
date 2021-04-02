export const rupiahCurrency = (value, rem, currency, splitter) => {
  let result = ''
  value = value.toString()
  const index = value.length
  console.log(value, index)

  // If value length is 4/5/6
  if (index === 4 || index === 5 || index === 6) {
    result =
      currency +
      value.slice(0, index - 3) +
      splitter +
      value.slice(index - 3 + Math.abs(rem))
  }

  // If value length is 7/8/9
  if (index === 7 || index === 8 || index === 9) {
    let start

    if (index === 7) {
      start = 1
    } else if (index === 8) {
      start = 2
    } else {
      start = 3
    }

    result =
      currency +
      value.slice(0, index - 6) +
      splitter +
      value.slice(start, index - 3) +
      splitter +
      value.slice(index - 3 + Math.abs(rem))
  }

  return result
}
