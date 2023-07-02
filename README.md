# Coffee Inventory Web App

This is a international coffee web application that keeps track of coffee inventory. It takes take in new inventory through the use of the form with information inputted by the user. Every new form that is created is moved to the top of the inventory list. The stock status of any existing inventory can be changed and the user can delete an item from the inventory list.

---
## Guide:

### *Form Instructions:*
- It is required for the user to enter the coffee brand name and the price. The user will be notified when they try to input an existing brand name.
```js
alert("A coffee brand with the same name already exists. Please enter a different name.")
```
- The origin is not required and can be left empty
- The price is also a required field that only take in a numerical value. The user will be notified when an incorrect value is inputted through an alert box.
```js
alert("Please enter a valid price (numeric value).")
```

- The user must choose one of the four coffee strength they best believe apply to their input and then choose the stock status of the coffee.

- When the "Reset Form" button is clicked, the form will be cleared for the user to start over.

*Note: If the coffee brand or/and price isn't provided (or incorrect information is input into the wrong section) then you will not be able to add the new coffee to the list when "Add Coffee" is clicked.*


### *List Features:*

- To update the stock status of an existing inventory item, the user must click the stock button of that item to make it in or out of stock.

- To delete an existing inventory item, the user must click the "Delete Coffee" button.

### Stretch Goals:

- If origin is not given by the user then it will be given a default value of *Unknown* after a new coffee item is created.