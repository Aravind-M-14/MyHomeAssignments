let a = 'madam'
let b = a.split("")
let rev = ''
for (let i = a.length - 1; i >= 0; i--) {
  rev = rev + a.charAt(i)
}
console.log(rev)
if (a == rev) {
  console.log(a + ' is Palindrome')
} else {
  console.log(a + ' is not Palindrome')
}

