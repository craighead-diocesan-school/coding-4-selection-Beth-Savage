// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {
  // write your code here
  let number = 0
  while (number != 'stop') {
    number = prompt('What number do you want to compare to 2?')

    if (number > 2) {
      alert(number + ' is greater than 2.')
    } else if (number < 2) {
      alert(number + ' is less than 2.')
    } else if (number == 2) {
      alert(number + ' is the same as 2.')
    } else if (number == 'stop') {
      alert('Fine you win')
    }
  }
}