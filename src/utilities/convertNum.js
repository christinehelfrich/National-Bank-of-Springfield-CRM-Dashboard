export const convertNum = params => {
  let alteredNum
  if (params < 1000) {
    const result2 = params
    alteredNum = result2
    return alteredNum
  }
  if (params >= 1000 && params < 1000000) {
    const result = params / 1000
    const result2 = result.toFixed(2)
    alteredNum = `${result2} K`
    return alteredNum
  }
  if (params >= 1000000) {
    const result = params / 1000000
    const result2 = result.toFixed(2)
    alteredNum = `${result2} M`
    return alteredNum
  }
}

export const convertCurrency = params => {
  let alteredNum
  if (params.value < 1000) {
    const result2 = params.value
    alteredNum = result2
    return `$ ${alteredNum}`
  }
  if (params.value >= 1000 && params.value < 1000000) {
    const result = params.value / 10000
    const result2 = result.toFixed(2)
    alteredNum = `$ ${result2} K`
    return alteredNum
  }
  if (params.value >= 1000000) {
    const result = params.value / 1000000
    const result2 = result.toFixed(2)
    alteredNum = `$ ${result2} M`
    return alteredNum
  }
}

export const convertDate = params => {
  var pattern = /(\d{4})\.(\d{2})\.(\d{2})/
  var dt = new Date(params.value.replace(pattern, '$3-$2-$1'))
  return dt.toLocaleDateString()
}
