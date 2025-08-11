const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

// Case #1 ------------------------------------------------------------------
const cheapestProduct = products.filter((item) => item.price < 200);
console.log(`Products on sale for 200nok or less:`, cheapestProduct);

const ProductNames = products.map((item) => item.name);
console.log(`Products in stock: ${ProductNames}`);

const electronicProducts = products
  .filter((item) => item.category === "electronics")
  .map((item) => item.name);
console.log(`Electronic Products in stock: ${electronicProducts}`);

const sellTheseToPoshPeeps = products.some((item) =>)
