const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let origin = event.target.origin.value;
    let price = event.target.price.value;
    let strength = event.target.strength.value;
    let stock = event.target.stock.value;

    console.log(name);
    console.log(origin);
    console.log(price);
    console.log(strength);
    console.log(stock)

    createCoffeeInfo(name, origin, price, strength, stock);
    form.reset();
})

function coffeeTemp(name, origin, price, strength, stock) {
    const li = document.createElement("li");
    li.textContent += name;

    if (origin) {
        const italic = document.createElement("em");
        italic.textContent = "Origin: ";
        li.append(document.createElement("br"), italic, origin);
    }
    
    if (price) {
        const strong = document.createElement("strong");
        strong.textContent = "Price: ";
        li.append(document.createElement("br"), strong, price);
    }
    
    if (strength) {
        const strong = document.createElement("strong");
        strong.textContent = "Coffe Strength: ";
        li.append(document.createElement("br"), strong, strength);
    }
    if (stock) {
        const strong = document.createElement("strong");
        strong.textContent = "Stock: ";
        li.append(document.createElement("br"), strong, stock);
    }

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Coffee";
    console.log(deleteButton);
    li.append(deleteButton);

    deleteButton.addEventListener("click", () => {
        li.remove();
    })

    return li;
}

function createCoffeeInfo(name, origin, price, strength, stock) {
    const li = coffeeTemp(name, origin, price, strength, stock);

    const ul = document.querySelector("ul");
    ul.append(li);
}