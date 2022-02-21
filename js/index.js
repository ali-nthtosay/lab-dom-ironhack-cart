// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const pricevalue = product.querySelector('.price span');
  const price = Number(pricevalue.innerHTML);

  const quantityValue = product.querySelector('.quantity input');
  const quantity = Number(quantityValue.value);

  const subTotal = product.querySelector(".subtotal span");
  const subtotalValue = price * quantity;
  subTotal.innerHTML = subtotalValue;
  console.log(subtotalValue);
  return subtotalValue;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalsum = 0;
  const products = document.querySelectorAll(".product");
  products.forEach((singleProduct) =>{
  subtotal = updateSubtotal(singleProduct);
  totalsum += subtotal;
  
  });
  const totalprice = document.querySelector("total-value span"); 
  totalprice.contentText =  totalsum;
  return   totalsum
}

  // ITERATION 3
  //... your code goes here
   /////////-------------------------------it does not work

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const removeButtons = document.querySelectorAll("btn-remove");
  removeButtons.addEventListener( "click", (event) => {
    event.preventDefault();
  });
  
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
