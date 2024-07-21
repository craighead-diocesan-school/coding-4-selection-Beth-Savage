// ####################################
// ###### ----- Driving Age ----- #####
// ####################################

function drivingAge() {
  let age = prompt('How old are you?')
  age = Number(age)

  if (age >= 16) {
    alert("You're old enough to drive.")
  } else {
    alert("You're not old enough to drive")
  }
}
