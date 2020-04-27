//Javascript Pizza Order using constant, function, parameter, and arguments

let orderCount = 0;

const takeOrder = (topping , crustType) => {
  console.log('Order: ' + crustType + ' crust ' + 'topped with ' + topping + '.');
 orderCount++;
};
takeOrder('bacon', 'thin');
// Take a pizza order

takeOrder('pepperoni', 'thick');
// Take a second pizza order

takeOrder('chicken', 'deep-dish');
// Take a third pizza order

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
}

console.log('Subtotal: $' + getSubTotal(orderCount));

const getTax = () => {
  return getSubTotal(orderCount) * 0.06;
}

console.log('Sales Tax: $' + getTax(orderCount));

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
};

console.log('Total: $ ' + getTotal());