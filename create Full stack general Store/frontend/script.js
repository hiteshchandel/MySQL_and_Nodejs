const API_URL = "http://localhost:3000/items";

// Handle form submission
document.getElementById("itemForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const item = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    price: parseFloat(document.getElementById("price").value),
    quantity: parseInt(document.getElementById("quantity").value),
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });

  loadItems();
  e.target.reset();
});

// Fetch and display items
async function loadItems() {
  const res = await fetch(API_URL);
  const items = await res.json();

  const container = document.getElementById("itemsContainer");
  container.innerHTML = "";

  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <div>
        <p><strong>${item.name}</strong> - ${item.description}</p>
        <p>Price: $${item.price.toFixed(2)} | Quantity: ${item.quantity}</p>
      </div>
      <div>
        <button class="buy1" onclick="buyItem(${item.id},1)">Buy 1</button>
        <button class="buy2" onclick="buyItem(${item.id},2)">Buy 2</button>
        <button class="buy3" onclick="buyItem(${item.id},3)">Buy 3</button>
      </div>
    `;

    container.appendChild(div);
  });
}

// Buy item (reduce quantity)
// async function buyItem(id, qty) {
//   await fetch(`${API_URL}/${id}/${qty}`, { method: "PUT" });
//   loadItems();
// }

async function buyItem(id, qty) {
  const res = await fetch(`${API_URL}/${id}/${qty}`, { method: "PUT" });

  if (!res.ok) {
    const error = await res.json();
    alert(error.error); // Show backend message
    return;
  }

  loadItems();
}


// Initial load
loadItems();
