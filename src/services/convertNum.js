export const convertNum = num => {
  let alteredNum
  if (num < 1000) {
    alteredNum = '$' + num / 1000
    return alteredNum
  }
  if (1000 <= num && num < 1000000) {
    alteredNum = '$' + num / 1000 + 'K'
    return alteredNum
  }
  if (num >= 1000000) {
    alteredNum = '$' + num / 1000000 + 'M'
    return alteredNum
  }
}
