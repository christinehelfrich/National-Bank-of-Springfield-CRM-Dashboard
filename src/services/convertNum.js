export const convertNum = num => {
  let alteredNum
  if (num < 1000) {
    let result2 = num.toFixed(2)
    alteredNum = result2
    return alteredNum
  }
  if (1000 <= num && num < 1000000) {
    let result = num / 1000
    let result2 = result.toFixed(2)
    alteredNum = result2 + 'K'
    return alteredNum
  }
  if (num >= 1000000) {
    let result = num / 1000000
    let result2 = result.toFixed(2)
    alteredNum = result2 + 'M'
    return alteredNum
  }
}

export const convertDate = str => {
  var pattern = /(\d{4})\.(\d{2})\.(\d{2})/
  var dt = new Date(str.replace(pattern, '$3-$2-$1'))
  return dt.toLocaleDateString()
}
