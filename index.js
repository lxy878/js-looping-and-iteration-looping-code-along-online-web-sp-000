// Code your solutions in this file
function writeCards(array, word){
  let messages = []
  for(i=0; i<array.length, i++){
      messages[i] = `Thank you, ${array[i]}, for the wonderful ${word} gift!`;
  }
  return messages;
}
