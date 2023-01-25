
let container = document.querySelector("#cloth-containar")
const url = "./productData.json"
let data;
async function fetchData(url) {
    try {
        let res = await fetch(url);
        res = await res.json();
        let arr = []
        res.forEach(el => {
            if (el.type == "women")
                arr.push(el)
        });
        data = res;
        displayData(arr)
    }
    catch (err) {
        console.log(err)
    }
}
fetchData(url)

function displayData(arr) {
    container.innerHTML = "";
    document.querySelector("#count").innerText = arr.length;
    arr.forEach(el => {

        let cart = document.createElement("div")
        let image = document.createElement("img")
        let div = document.createElement("div")
        let innerlefttdiv = document.createElement("div")
        let innerrightdiv = document.createElement(("div"))
        let brand = document.createElement("h3")
        let title = document.createElement("p")
        let icon = document.createElement("img")
        let price = document.createElement("h2")
        let addToCart = document.createElement("button")
        image.src = el.src;
        brand.innerText = "Bewakoof";
        title.innerText = el.title
        innerlefttdiv.append(brand, title)
        icon.src = "./icons/heart.svg"
        innerrightdiv.append(icon)
        div.append(innerlefttdiv, innerrightdiv)
        price.innerText = `₹${el.price}`
        addToCart.innerText = "Buy now"
        icon.style.cursor = "pointer"
        icon.addEventListener("click", () => {
            let login = localStorage.getItem("login")
            let data = [];
            if (login == null)
                location = "./LogInAndUp.html"
            else {
                let arr = JSON.parse(localStorage.getItem("loginData"))
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].email == login) {
                        if (!check(arr[i].favorite, el)) {
                            arr[i].favorite.push(el)
                            alert("Added successfully")
                        }
                        else
                            alert("already Added")
                        break;
                    }
                }
                localStorage.setItem("loginData", JSON.stringify(arr));
            }

        });

        addToCart.addEventListener("click", () => {
            let login = localStorage.getItem("login")
            let data = [];
            if (login == null)
                location = "./LogInAndUp.html"
            else {
                let arr = JSON.parse(localStorage.getItem("loginData"))
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].email == login) {
                        if (!check(arr[i].cart, el)) {
                            arr[i].cart.push(el)
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
        cart.append(image, div, price, addToCart);
        container.appendChild(cart);
    })
    //
}
function check(array, el) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == el.id) {
            return true;
        }
    }
    return false
}

document.querySelector("#search").addEventListener("click", () => {
    let inp = document.querySelector("#searchInp").value;
    inp=inp.toLowerCase()
    let input = inp.trim().split(" ");
    let arr1 = [];
    let checkIn = []
    data.forEach(el => {
        checkIn = el.check.trim().split(" ")
        let checkitem = false;
        for (let k = 0; k < input.length; k++) {
            if (checkIn.includes(input[k]))
                checkitem = true;
            else {
                checkitem = false;
                break;
            }
        }
        if (checkitem == true)
            arr1.push(el)

    });
    document.querySelector("#cloth_type").innerText = ""
    displayData(arr1)
})