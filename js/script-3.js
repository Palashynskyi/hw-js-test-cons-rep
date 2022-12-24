function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray)
    const newArrayAmount = newArray.length
    if (newArrayAmount < maxLength) {
      return newArray
    } else {
       return newArray.slice(0, maxLength)
    }

}
  
makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)