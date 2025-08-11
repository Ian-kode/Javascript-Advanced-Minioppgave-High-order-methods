const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

// CASE #1 ------------------------------------------------------------------

// filter
const cheapestProduct = products.filter((item) => item.price < 200); // Using filter() to create and return a new array with objects that have "price" property in the products array which is less than 200.
console.log(`Products on sale for 200nok or less:`, cheapestProduct);

// map
const ProductNames = products.map((item) => item.name);
console.log(`Products in stock: ${ProductNames}`);

// map, filter
const electronicProducts = products
  .filter((item) => item.category === "electronics")
  .map((item) => item.name);
console.log(`Electronic Products in stock: ${electronicProducts}`);

// some, filter, map
let sellTheseToPoshPeeps = [];
if (products.some((item) => item.price > 1000)) {
  sellTheseToPoshPeeps = products
    .filter((item) => item.price > 1000)
    .map((item) => item.name);
} else sellTheseToPoshPeeps = [];
console.log(`Luxury Products: ${sellTheseToPoshPeeps}`);

// reduce
// prettier-ignore
const totalWorthOfProducts = products.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price, 0);
console.log(`Total worth of inventory: ${totalWorthOfProducts}`);

// CASE #2------------------------------------------------------------------------
// prettier-ignore
const possibleTotalEarnings = products.reduce((accumulator, currentPrice) => accumulator + currentPrice.price, 0)
console.log(`Total possible earnings: ${possibleTotalEarnings}`);

let productsToSell = [];
if (products.some((item) => item.price <= 200)) {
  productsToSell = products
    .filter((item) => item.price <= 200)
    .map((item) => item.name);
  console.log(`Products on SALE!!! ${productsToSell}`);
} else productsToSell = [];

if (products.some((item) => item.category === "clothing")) {
  clothingProducts = products
    .filter((item) => item.category === "clothing")
    .map((item) => item.name);
  console.log(`Special discount on clothings! ${clothingProducts}`);
} else clothingProducts = [];

let luxProductsDiscounted = [];
if (products.some((item) => item.price > 1000)) {
  luxProductsDiscounted = products
    .filter((item) => item.price > 1000)
    .map((item) => item.name);
} else luxProductsDiscounted = [];
console.log(`Special discount on luxury products: ${luxProductsDiscounted}`);
