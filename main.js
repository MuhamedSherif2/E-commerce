let creatCart = document.querySelector(".creatcart");
let openCart = document.querySelector("#cart");
let closeCart = document.getElementById("xmark");
let quantity = document.querySelector(".quantity");
let cartList = document.querySelector(".cartList")
let price = document.querySelector(".price")
let product = document.getElementById('product')

openCart.addEventListener("click", () => {
    creatCart.classList.add("active");
});

closeCart.addEventListener("click", () => {
    creatCart.classList.remove("active")
})

let products = [
    {
        id: 1,
        image: "11.png",
        name: "Iphone 11",
        price: 700
    },
    {
        id: 2,
        image: "11max.png",
        name: "Iphone 11pro max",
        price: 1100
    },
    {
        id: 3,
        image: "12.png",
        name: "Iphone 12",
        price: 750
    },
    {
        id: 4,
        image: "12max.png",
        name: "Iphone 12pro max",
        price: 1250
    },
    {
        id: 5,
        image: "13.png",
        name: "Iphone 13",
        price: 900
    },
    {
        id: 7,
        image: "14.png",
        name: "Iphone 14",
        price: 950
    },
    {
        id: 8,
        image: "14plus.png",
        name: "Iphone 14plus",
        price: 1100
    },
    {
        id: 9,
        image: "14pro.png",
        name: "Iphone 14pro",
        price: 700
    },
    {
        id: 10,
        image: "14max.png",
        name: "Iphone 14pro max",
        price: 1100
    },
    {
        id: 11,
        image: "15.png",
        name: "Iphone 15",
        price: 700
    },
    {
        id: 12,
        image: "15plus.png",
        name: "Iphone 15plus",
        price: 1100
    },
    {
        id: 13,
        image: "15max.png",
        name: "Iphone 15pro max",
        price: 1100
    },
]

let listCards = [];
if (localStorage.product != null) {
    listCards = JSON.parse(localStorage.product)
}
getProductLocal();

function getProductLocal() {
    localStorage.getItem("product");
    reloadCard();
}

function initApp() {
    products.forEach((value) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("product-box");
        newDiv.innerHTML = `
        <img class="img" src="${value.image}">
        <h2>${value.name}</h2>
        <span>${value.price}</span>
        <br>
        <button class="btn34" onclick="addToCart(${value.id})">add to cart</button>
        `;
        product.appendChild(newDiv);
    });
}
initApp();

function addToCart(id) {
    let product = products.find((a) => a.id === id);
    let productIndex = listCards.findIndex((a) => a.id === id);
    if (productIndex > -1) {
        listCards[productIndex].quantity += 1;
    }
    else {
        listCards.push({ ...product, quantity: 1 });
    }
    reloadCard();
}

function reloadCard() {
    cartList.innerHTML = "";
    let totalPrice = 0;
    let count = 0;
    listCards.forEach((value) => {
        totalPrice += value.price * value.quantity;
        count += value.quantity;
        let newList = document.createElement("div");
        newList.classList.add("box");
        newList.innerHTML = `
        <img src="${value.image}">
        <h2>${value.name}</h2>
        <span>${value.price}</span>
        <div class="change">
        <button onclick="changeQuantity(${value.id}, ${value.quantity+1})">+</button>
        <div>${value.quantity}</div>
        <button onclick="changeQuantity(${value.id}, ${value.quantity-1})">-</button>
        </div>
        `;
        cartList.appendChild(newList);
    })
    price.innerHTML = totalPrice + "EG";
    quantity.innerHTML = count;
    localStorage.setItem("product", JSON.stringify(listCards));
}
function changeQuantity(id, newQuantity) {
    let productIndex = listCards.findIndex((a) => a.id === id);
    if (newQuantity === 0) {
        listCards.slice(productIndex, 1);
    }
    else {
        listCards[productIndex].quantity = newQuantity;
    }
    reloadCard();
}
let cheak = document.querySelector("#btn1");
let remove = document.querySelector("#close")
let payment = document.querySelector("#payment")

cheak.addEventListener("click", () => {
    payment.classList.add("creat")
})
remove.addEventListener("click", () => {
    payment.classList.remove("creat")
})