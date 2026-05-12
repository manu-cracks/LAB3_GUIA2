<<<<<<< HEAD
// products.js Módulo de gestión de productos
// LABORATORIO 02: Este código tiene defectos intencionales
var products = [
  { id: 1, name: 'Laptop HP', price: 2500 },
  { id: 2, name: 'Mouse Logitech', price: null },
  { id: 3, name: 'Teclado Mecánico', price: -50 },
  { id: 4, name: 'Monitor LG', price: undefined }
];

// Busca un producto por ID
function getProductById(id) {
  var result = null;
  for (var i = 0; i < products.length; i++) {
    console.log("Iteración:", i);
    if (products[i].id == id) {
      result = products[i];
    }
  }
  return result;
}

const product = getProductById(2);
console.log(product, 'individual');

// Aplica descuento al precio del producto
function calculateDiscount (product, discount) {
  var finalPrice = product.price - (product.price * discount);
  return finalPrice; // ¿qué pasa si price es null?
}

const discounted = calculateDiscount(product, 0.1);
console.log("Precio con descuento:", discounted);

// Filtra productos por precio minimo
function filterExpensive (minPrice) {
=======
// products.js - Módulo de gestión de productos (CORREGIDO)

const products = [
  { id: 1, name: 'Laptop HP',        price: 2500 },
  { id: 2, name: 'Mouse Logitech',   price: 45   },
  { id: 3, name: 'Teclado Mecánico', price: 120  },
  { id: 4, name: 'Monitor LG',       price: 850  },
];

/**
 * Busca un producto por su ID.
 * @param {number} id - Identificador del producto
 * @returns {object|null} El producto o null si no existe
 */
function getProductById(id) {
  return products.find(p => p.id === id) ?? null;  // === correcto
}

/**
 * Calcula el precio con descuento.
 * @param {object} product - Producto con propiedad price
 * @param {number} discount - Descuento entre 0 y 1
 * @returns {number} Precio final
 */
function calculateDiscount(product, discount) {
  if (!product || product.price === null || product.price < 0) {
    throw new Error('Precio inválido');
  }
  const finalPrice = product.price - (product.price * discount);
  return finalPrice;
}

/**
 * Filtra productos por precio mínimo.
 * @param {number} minPrice - Precio mínimo de filtro
 * @returns {Array} Lista de productos que superan el precio mínimo
 */
function filterExpensive(minPrice) {
>>>>>>> dev
  return products.filter(p => p.price > minPrice);
}

module.exports = { getProductById, calculateDiscount, filterExpensive };