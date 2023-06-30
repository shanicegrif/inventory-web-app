const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target.name.value;
  let origin = event.target.origin.value;
  let price = event.target.price.value;
  let strength = event.target.strength.value;
  let stock = event.target.stock.value;

  if (!isValidPrice(price)) {
    alert("Please enter a valid price (numeric value).");
    return;
  }

  console.log(name);
  console.log(origin);
  console.log(price);
  console.log(strength);
  console.log(stock);

  createCoffeeInfo(name, origin, price, strength, stock);
  form.reset();
});

const resetButton = document.querySelector("button[type= 'reset']");
resetButton.addEventListener("click", () => {
  form.reset();
});

function isValidPrice(price) {
  return !isNaN(parseFloat(price)) && isFinite(price);
}

function coffeeTemp(name, origin, price, strength, stock) {
  const li = document.createElement("li");
  li.textContent += name;

  if (origin) {
    const italic = document.createElement("em");
    italic.textContent = "Origin: ";
    li.append(document.createElement("br"), italic, origin);
  } else {
    const italic = document.createElement("em");
    italic.textContent = "Origin: ";
    li.append(document.createElement("br"), italic, "Unknown");
  }

  if (price) {
    const strong = document.createElement("strong");
    strong.textContent = "Price: $";
    li.append(document.createElement("br"), strong, price);
  }

  if (strength) {
    const strong = document.createElement("strong");
    strong.textContent = "Coffee Strength: ";
    li.append(document.createElement("br"), strong, strength);
  }

  const stockButton = document.createElement("button");
  stockButton.classList.add("stock-button");
  stockButton.textContent = stock === "in-stock" ? "In Stock" : "Out of Stock";
  stockButton.classList.toggle("out-of-stock", stock === "out-of-stock");
  li.append(document.createElement("br"), stockButton);

  stockButton.addEventListener("dblclick", () => {
    stock = stock === "in-stock" ? "out-of-stock" : "in-stock";
      stock === "in-stock" ? "In Stock" : "Out of Stock";
    stockButton.classList.toggle("out-of-stock", stock === "out-of-stock");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete Coffee";
  console.log(deleteButton);
  li.append(document.createElement("br"), deleteButton);

  deleteButton.addEventListener("dblclick", () => {
    li.remove();
  });

  return li;
}

function createCoffeeInfo(name, origin, price, strength, stock) {
  const li = coffeeTemp(name, origin, price, strength, stock);
  const lineBreak = document.createElement("br");

  const ul = document.querySelector("ul");
  ul.prepend(lineBreak);
  ul.prepend(li);
}
