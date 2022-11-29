// ITERATION 1
let total = 0;
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceStr = product.querySelector('.price span').childNodes[0].textContent;
  const quantity = product.querySelector('#quantityInput').value;
  const price = Number(priceStr);
  let subTotal = price * quantity;

  const updatedSubtotal = product.querySelector('.subtotal').childNodes[1];
  updatedSubtotal.innerHTML = subTotal;
  
  total += subTotal;
  
  console.log("subtotal:", subTotal);
  console.log("updatedSubtotal:", updatedSubtotal.innerHTML);
  console.log("quantity:",quantity)
  console.log("price:",price)
}
// const product = document.getElementById('cart')
// console.log(updateSubtotal(product))




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  for (let index = 0; index < allProducts.length; index++) {
    const element = allProducts[index];
    updateSubtotal(element)
    
  }

  // ITERATION 3
  const totalValue = document.getElementById("total-value").childNodes[1];
  console.log("totalValue:",totalValue);
  totalValue.innerHTML = total;
  console.log("total:", total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
