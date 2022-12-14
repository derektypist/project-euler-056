# Project Euler 056 - Powerful Digit Sum

A googol (10<sup>100</sup>) is a massive number: one followed by one-hundred zeros; 100<sup>100</sup> is almost unimaginably large: one followed by two-hundred zeros.  Despite their size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, a<sup>b</sup>, where a, b &lt; n, what is the maximum digital sum?

Information at [Project Euler 056](https://projecteuler.net/problem=56)

## UX

**Getting Started**

In the input field, enter a whole number between 2 and 100 without leading zeros such as 02.  Select the Submit button.  You will see the maximum digital sum as well as the number entered, unless you have made an invalid input.  Select the reset button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 2 or greater than 100
- Including leading zeros such as 02
- Entering a number, but it is not an integer

As a user, I expect the function `powerfulDigitSum(3)` to return a number.

As a user, I expect the function `powerfulDigitSum(3)` to return 4.

As a user, I expect the function `powerfulDigitSum(10)` to return 45.

As a user, I expect the function `powerfulDigitSum(50)` to return 406.

As a user, I expect the function `powerfulDigitSum(75)` to return 684.

As a user, I expect the function `powerfulDigitSum(100)` to return 972.

User Stories on function `powerfulDigitSum(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 056](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-56-powerful-digit-sum)

**Information Architecture**

The function `powerfulDigitSum(n)` returns a number, where `n` is a number between 2 and 100.

## Features

Allows the user to enter a number in order to get the maximum digital sum.  Performs checks on valid user input.  If the input is not valid, an error message is displayed instead.

## Technologies

Uses HTML5, CSS3, JavaScript with BigInt, Bootstrap 5.2.2 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-056) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)