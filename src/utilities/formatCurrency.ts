const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency"
  })
  
  export function formatCurrency(number: number | undefined) {
    if (typeof number === 'number') {
      return CURRENCY_FORMATTER.format(number)
    }
    return ''
  }
  