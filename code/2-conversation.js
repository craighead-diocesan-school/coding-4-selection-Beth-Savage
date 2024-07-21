// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('Welcome to my sports discussion program.')

  alert('Do you like running? Answer yes or no.')
  let answer = prompt()

  if (answer == 'yes') {
    alert("That's good. Do you do athletics?")
    let athletics = prompt()
    if (athletics == 'yes'){
      alert('Good luck in your next race.')
    } else {
      alert('Just for fun then.')
    }
  } else {
    alert('Maybe you like a different sport. Do you watch Olympic athletics?')
    let olympics = prompt()
    if (olympics == 'yes'){
      alert("That's good, it's inspiring")
    } else {
      alert("It's not for everyone.")
    }
  }

  alert('Goodbye')
}

function age() {
  // write your code here
  let name = prompt('What is your name')
  let age = prompt('How old are you ' + name + '?')
  age = Number(age)
  let retire = ''
  let drive = ''
  let vote = ''
  let me = ''
  if(age > 1 && age < 130){
  if(age > 65){
    retire = ('old enough to retire')
  } else {
    retire = ('not yet old enough to retire')
  }
  if(age < 16){
    drive = ('not old enough to drive')
  } else {
    drive = ('old enough to drive')
  }
  if(age >= 18){
    vote = ('old enough to vote')
  } else {
    vote = ('not old enough to vote')
  }
  if(age > 16){
    me = ('older than me')
  } else if (age < 16){
    me = ('younger than me')
  } else {
    me = ('the same age as me')
  }

alert('You are: ' + drive + ', ' + vote + ', ' + retire + ' and ' + me + '.')
} else {
  alert('Your age is invalid')
}
}
