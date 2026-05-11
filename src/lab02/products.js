// products.js Módulo de gestión de productos
const products = [
  { id: 1, name: 'Laptop HP', price: 2500 },
  { id: 2, name: 'Mouse Logitech', price: null },
  { id: 3, name: 'Teclado Mecánico', price: -50 },
  { id: 4, name: 'Monitor LG', price: undefined }
];

function getProductById(id) {
  let result = null;
  for (let i = 0; i < products.length; i++) {
    console.log("Iteración:", i);
    if (products[i].id == id) {
      result = products[i];
    }
  }
  return result;
}
const product = getProductById(2);
console.log(product, 'individual');

function calculateDiscount (product, discount) {
  const finalPrice = product.price - (product.price * discount);
  return finalPrice; 
}

const discounted = calculateDiscount(product, 0.1);
console.log("Precio con descuento:", discounted);

function filterExpensive (minPrice) {
  return products.filter(p => p.price > minPrice);
}

module.exports = { getProductById, calculateDiscount, filterExpensive };