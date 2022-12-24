function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
  
  const splitMessadge = message.split(" ");
  console.log(splitMessadge)
  const wordAmount = splitMessadge.length;
  console.log(wordAmount)
  const totalPrice = wordAmount * pricePerWord;
  //  console.log(totalPrice)
  return totalPrice;

}

calculateEngravingPrice('Web-development is creative work', 20) 