let containar = document.querySelector("#cloth-containar")
let login = localStorage.getItem("login")
let arr = JSON.parse(localStorage.getItem("loginData"))
let data = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].email == login) {
        data = arr[i].cart;
        displayData(data)
        break;
    }
}
function displayData(data) {
    totalPrice(data)
    containar.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let cart = document.createElement("div")
        let image = document.createElement("img")
        let div = document.createElement("div")
        let innerlefttdiv = document.createElement("div")
        let innerrightdiv = document.createElement("div")
        let brand = document.createElement("h3")
        let title = document.createElement("p")
        let icon = document.createElement("img")
        icon.style.cursor = "pointer"
        let add = document.createElement("button")
        let quantity = data[i].quantity;
        let min = document.createElement("button")
        let cancel = document.createElement("button")
        add.innerText = "+"
        min.innerText = "-"
        cancel.innerText = "Remove";
        add.addEventListener("click", () => {
            data[i].quantity = data[i].quantity + 1;
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].email == login) {
                    arr[j].cart = data;
                    localStorage.setItem("loginData", JSON.stringify(arr))
                    displayData(arr[j].cart);
                }
            }
        })
        min.addEventListener("click", () => {
            if (data[i].quantity > 1) {
                data[i].quantity = data[i].quantity - 1;
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j].email == login) {
                        arr[j].cart = data;
                        localStorage.setItem("loginData", JSON.stringify(arr))
                        displayData(arr[j].cart);
                    }
                }
            }
        })
        cancel.addEventListener("click", () => {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].email == login) {
                    arr[j].cart.splice(i, 1)
                    localStorage.setItem("loginData", JSON.stringify(arr))
                    displayData(arr[j].cart);
                }
            }
        })
        let price = document.createElement("h2")
        let addToCart = document.createElement("button")
        image.src = data[i].src
        brand.innerText = "Bewakoof";
        title.innerText = data[i].title
        innerlefttdiv.append(brand, title)
        icon.src = "./icons/heart.svg"
        innerrightdiv.append(icon)
        div.append(innerlefttdiv, innerrightdiv)
        price.innerText = `₹${data[i].price}`
        addToCart.innerText = "Buy now"
        addToCart.setAttribute("id", "buy")
        cart.append(image, div, price, add, quantity, min, cancel, addToCart)
        containar.appendChild(cart)

    }
}
function totalPrice(data) {
    let sum = 0;
    data.forEach(el => {
        sum = sum + el.quantity * el.price
    });
    document.querySelector("#total_cost").innerText = sum
}