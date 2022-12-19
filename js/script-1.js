function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if (totalSpent >= 50000) {
  let discount = 0.1;
} else if (totalSpent >= 20000) {
  let discount = 0.05;
} else if (totalSpent >= 5000) {
  let discount = 0.02;
} else {let discount = 0}
  
  // Change code above this line
    return discount;
    console.log(discount)
}
function getDiscount(137000)