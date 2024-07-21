// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  // write your code here
  let name = prompt('What is your name?')
  let capital = prompt('Quick question, ' + name + '. What is the capital of France')
  if (capital == 'Paris'){
    alert('Correct, well done ' + name)
  } else if(capital == 'paris'){
    alert('Correct ' + name + ', but please use a capital letter next time')
  } else {
    alert('Incorrect, sorry ' +name)
  }
}
