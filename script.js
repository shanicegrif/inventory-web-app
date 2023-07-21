const form = document.querySelector("form");
let errorMessage = document.createElement("p");
errorMessage.style.color = "red"

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target.name.value;
  let origin = event.target.origin.value;
  let price = event.target.price.value;
  let strength = event.target.strength.value;
  let stock = event.target.stock.value;

  const coffeeList = document.querySelectorAll(".list li");

  for (const coffeeItem of coffeeList) {
    const coffeeName = coffeeItem.firstChild.textContent.trim().toLowerCase();

    if (coffeeName === name.toLowerCase()) {
      alert("A coffee brand with the same name already exists. Please enter a different name.");
      return;
    }
  }

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

document.addEventListener("DOMContentLoaded", () => {
  const coffeeData = [
    {
      name: "Blue Bottle",
      origin: "Unknown",
      price: "12.99",
      strength: "Medium Roast",
      stock: "out-of-stock",
    },
    {
      name: "Peet's",
      origin: "Ethiopia",
      price: "10.99",
      strength: "Dark Roast",
      stock: "in-stock",
    },
    {
      name: "Folgers",
      origin: "Columbia",
      price: "11.69",
      strength: "Medium Roast",
      stock: "in-stock",
    },
  ];

  coffeeData.forEach((coffee) => {
    createCoffeeInfo(coffee.name, coffee.origin, coffee.price, coffee.strength, coffee.stock)
  })
})

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

  stockButton.addEventListener("click", () => {
    stock = stock === "in-stock" ? "out-of-stock" : "in-stock";
    stockButton.textContent = stock === "in-stock" ? "In Stock" : "Out of Stock";
    stockButton.classList.toggle("out-of-stock", stock === "out-of-stock");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete Coffee";
  console.log(deleteButton);
  li.append(document.createElement("br"), deleteButton);

  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  return li;
}

function createCoffeeInfo(name, origin, price, strength, stock) {
  const li = coffeeTemp(name, origin, price, strength, stock);
  const lineBreak = document.createElement("br");

  const ul = document.querySelector(".list");
  ul.prepend(lineBreak);
  ul.prepend(li);
}
