// menghitung huruf
let countLetters = (input) => {
  let split = input.split('')
  let result = split.length
  return result
}
let checkLetters = console.log(countLetters('Dwi Bayu'))

// menghitung kata
let countWords = (input) => {
  let split = input.split(' ')
  let result = split.length
  return result
}
let checkWords = console.log(countWords('Dwi Bayu'))

// calculator
let calculator = (input1, input2, operator) => {
  if (operator === '+')
    console.log(`${input1} ${operator} ${input2} = `, input1 + input2)
  else if (operator === '-')
    console.log(`${input1} ${operator} ${input2} = `, input1 - input2)
  else if (operator === '*')
    console.log(`${input1} ${operator} ${input2} = `, input1 * input2)
  else if (operator === '/')
    console.log(
      `${input1} ${operator} ${input2} = `,
      (input1 / input2).toFixed(2),
    )
  else console.log('Bukan operator')
}
let checkCalculator = calculator(7, 8, '+')

// cek apakah palindrome
let isPalindrome = (input) => {
  let rev = input.split('').reverse().join('')

  if (input === rev) {
    return true
  }
  return false
}
let str1 = 'kodok'
let str2 = 'kasur rusak'
let str3 = 'mie ayam'
let checkIsPalindrome = console.log(isPalindrome(str3))

// discount
let discount = (disc, price) => {
  let discount = disc / 100
  let result = (price - price * discount).toFixed(2)
  return console.log(
    `Total harga dari ${price} setelah di discount sebesar ${disc} adalah `,
    result,
  )
}
let checkDiscount = discount(10, 100)
