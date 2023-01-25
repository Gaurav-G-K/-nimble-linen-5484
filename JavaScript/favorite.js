
let containar = document.querySelector("#cloth-containar")
let login = localStorage.getItem("login")
let arr = JSON.parse(localStorage.getItem("loginData"))
let data = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].email == login) {
        data = arr[i].favorite;
        displayData(data)
        break;
    }
}
function displayData(data) {
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
        icon.addEventListener("click", () => {
            data.splice(i, 1)
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].email == login) {
                    arr[j].favorite = data;
                    localStorage.setItem("loginData", JSON.stringify(arr))
                    alert("Item Removed ")
                    displayData(arr[j].favorite);
                }
            }


        });
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
        addToCart.addEventListener("click", () => {
            let login = localStorage.getItem("login")
            if (login == null)
                location = "./LogInAndUp.html"
            else {
                let arr = JSON.parse(localStorage.getItem("loginData"))
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j].email == login) {
                        if (!check(arr[j].cart, data[i])) {
                            arr[j].cart.push(data[i])
                            alert("item Added in Cart")
                        }
                        else
                            alert("Item already in Cart")
                        break;
                    }
                }
                localStorage.setItem("loginData", JSON.stringify(arr));
            }

        });
        cart.append(image, div, price, addToCart)
        containar.appendChild(cart)

    }
}
function check(array, el) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == el.id) {
            return true;
        }
    }
    return false
}