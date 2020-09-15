
const rules = {}

rules.email = value => {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!value) return true
  return pattern.test(value) || 'Correo inválido'
}

rules.min8 = (value) => {
  return (value && value.length >= 8) || 'La contraseña debe tener minimo 8 carácteres'
}

rules.onlyNumbers = (value) => {
  const pattern = /^[0-9]+$/
  if (!value) return true
  return pattern.test(value) || 'Solo se permiten números'
}

rules.phoneNumber = (value) => {
  const invalidMessage = 'Ingresa un número de teléfono válido'
  const trimmedValue = value.trim()
  if (!trimmedValue) return invalidMessage
  const plusSign = trimmedValue.charAt(0)
  const parenthesesRegex = /\(([^)]+)\)/
  const countryCode = parenthesesRegex.exec(trimmedValue)[1]
  const country = countries.find(item => item.number === countryCode)
  const phone = trimmedValue.split(')')[1]
  return (plusSign === '+' && country && phone && rules.onlyNumbers(phone)) || invalidMessage
}


rules.required = (value) => {
  let success = 'Requerido'
  if (value !== undefined && value !== null) {
    if (Array.isArray(value)) {
      if (value.length > 0) success = true
    } else if (typeof value === 'object' && value !== null && value &&
      // https://stackoverflow.com/a/32108184/7712185
      Object.entries(value).length !== 0) {
      success = true
    } else if (typeof value === 'string' && value.length > 0 && value.trim().length > 0) {
      success = true
    } else if (typeof value === 'number') {
      success = true
    }
  }
  return success
}

export default rules
