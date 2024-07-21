// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  // write your code here
  let spend = prompt('How much do you have to spend?')
  let originalPrice = prompt('How much is this item normally.')
  let discount = prompt('What is the discount percentage')
  spend = Number(spend)
  originalPrice = Number(originalPrice)
  discount = Number(discount)
  let newPrice = (originalPrice / 100) * (100 - discount)
  if (spend < newPrice){
    alert('You do not have enough. You have $' + spend + ' to spend but even with a ' + discount + '% discount it is still $' + newPrice + '.')
  } else if (spend >= newPrice){
    alert('You have enough money')
  } else{
    alert('Something went wrong please make sure you have only inputted numbers.')
  }
}
