const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');

let cart = []
let buttonsDOM = []
    // getting the products 
class Products {
    async getProducts() {
        try {
            let result = await fetch('speakers.json')
            let products = await result.json()
            return products
        } catch (error) {
            console.log(error)
        }
    }
}

//display products
class UI {
    displayProducts(products) {
        let currentTab = "featured"

        function renderProducts() {
            const tabContainer = document.querySelector('.item-block');
            const filteredProducts = products.filter(product => product.category === currentTab)
            tabContainer.innerHTML = '';
            for (const product of filteredProducts) {
                tabContainer.innerHTML += `
          <div class="tab-container">
          <img src="${product.img}" alt="${product.title}">
          <p class="item-name">${product.title}</p>
          <span class="item-price">$${product.price}</span>
          <button data-id="${product.id}"class="item-btn">Add to cart</button>
         </div>
         `
            }
        }
        renderProducts();

        document.querySelector('.tab-featured').addEventListener('click', () => {
            currentTab = "featured";
            renderProducts();
        });

        const sale = document.querySelector('.tab-sale');
        sale.addEventListener('click', function(e) {
            currentTab = "sale";
            const tabContainer = document.querySelector('.item-block-s');
            const filteredProducts = products.filter(product => product.category === currentTab)
            tabContainer.innerHTML = '';
            for (const product of filteredProducts) {
                tabContainer.innerHTML +=
                    ` <div class="tab-container">
                    <img src="${product.img}" alt="${product.title}">
                    <p class="item-name">${product.title}</p>
                    <span class="item-price">$${product.price}</span>
                     <button data-id="${product.id}"class="item-btn">Add to cart</button>
                    </div>`
            }
        });
        const newTab = document.querySelector('.tab-new')
        newTab.addEventListener('click', function(e) {
            currentTab = "new";
            const tabContainer = document.querySelector('.item-block-n');
            const filteredProducts = products.filter(product => product.category === currentTab)
            tabContainer.innerHTML = '';
            for (const product of filteredProducts) {
                tabContainer.innerHTML +=
                    ` <div class="tab-container">
              <img src="${product.img}" alt="${product.title}">
              <p class="item-name">${product.title}</p>
              <span class="item-price">$${product.price}</span>
              <button data-id="${product.id}"class="item-btn">Add to cart</button>
              </div>`

            }
        })
        renderProducts();

    }
    getBagButtons() {
        const buttons = [...document.querySelectorAll('.item-btn')];
        buttonsDOM = buttons;
        buttons.forEach(button => {
            let id = button.dataset.id
            let inCart = cart.find(item => item.id === id);
            if (inCart) {
                button.innerText = "In Cart";
                button.disabled = true;
            }
            button.addEventListener('click', (event) => {
                event.target.innerText = "In Cart";
                event.target.disabled = true;
                //get product from products
                let cartItem = Storage.getProduct(id);
                console.log(cartItem)
                    //add product to the cart 

            })

        })

    }
}

/// local storage 
class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products))
    }
    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id === id);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    const products = new Products();
    //get All products

    products.getProducts().then(products => {
        ui.displayProducts(products);
        Storage.saveProducts(products);
    }).then(() => {
        ui.getBagButtons()
    })

})