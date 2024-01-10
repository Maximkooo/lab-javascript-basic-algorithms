// Iteration 1: Names and Input
const hacker1 = 'Bob'
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Jenny'
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

const longestNameOfHacker = (name1, name2) => {
  const name1Length = name1.length
  const name2Length = name2.length
  if (name1Length > name2Length) {
    return `The driver has the longest name, it has ${name1Length} characters.`
  }
  if (name1Length < name2Length) {
    return `It seems that the navigator has the longest name, it has ${name2Length} characters.`
  }
  return `Wow, you both have equally long names, ${name1Length} characters!`
}
console.log(longestNameOfHacker(hacker1, hacker2));
// Iteration 3: Loops

console.log(hacker1.split('').map(i => i.toUpperCase()).join(' '));

console.log(hacker2.split('').reverse().join(''));


const lexicographicOrderOfName = (name1, name2) => {
  if (name1 === name2) {
    return 'What?! You both have the same name?'
  }

  const sortedArrOfName = [name1, name2].sort((a, b) => a.localeCompare(b))

  if (sortedArrOfName[0] === name1) {
    return 'The driver\'s name goes first.'
  }
  return 'Yo, the navigator goes first, definitely.'
}

console.log(lexicographicOrderOfName(hacker1, hacker2));