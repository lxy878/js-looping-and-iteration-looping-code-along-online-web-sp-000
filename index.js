// Code your solutions in this file
function writeCards(array, word){
  const messages = []
  for(i=0; i<array.length, i++){
      messages.push(`Thank you, ${array[i]}, for the wonderful ${word} gift!`);
  }
  return messages;
}
