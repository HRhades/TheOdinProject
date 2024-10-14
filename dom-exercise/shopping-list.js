const shoppingListContent = []

const textInput = document.querySelector("#item")
const shoppingList = document.querySelector("#shoppingList")
const addItemBtn = document.querySelector("#addItemBtn")

addItemBtn.addEventListener("click", () => {
    addItem(textInput.value)
    textInput.value = null
})

function deleteItem(e) {
    console.log(e)
    e.srcElement.parentNode.remove()
}

function addItem(itemName) {
    // maxId = shoppingListContent.length()

    // shoppingListItem = {
    //     id: maxId + 1,
    //     name: itemName,
    // }
    // shoppingListContent.push(shoppingListItem)

    li = document.createElement("li")
    li.textContent = itemName

    btn = document.createElement("button")
    btn.textContent = "delete"
    btn.addEventListener("click", (e) => {
        deleteItem(e)
    })
    li.appendChild(btn)
    shoppingList.appendChild(li)
}
