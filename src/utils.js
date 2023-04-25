const pricePipe = (value) => {
  return '$' + value
}

const dateFormatPipe = (date) => {
  const year = date.getFullYear()
  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${month}-${day}`
}

export default {
  pricePipe,
  dateFormatPipe
}