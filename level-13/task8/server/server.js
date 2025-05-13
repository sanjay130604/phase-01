const { MongoClient } = require("mongodb");

async function run() {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  const db = client.db("yourDatabase");
  const products = db.collection("products");

  // Sorted, paginated, and limited
  const result = await products.find()
    .sort({ price: -1 })
    .skip(5)
    .limit(5)
    .toArray();

  console.log("Page 2 products:");
  result.forEach(p => console.log(`${p.name}: $${p.price}`));

  // Count
  const count = await products.countDocuments({ category: "Clothing" });
  console.log(`Total clothing items: ${count}`);

  client.close();
}

run();
