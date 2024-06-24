
function initializeCart() {
    if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([]));
    }
}


function addItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart'));

    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart'));

    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart))
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log('Cart contents:', cart);
}

document.getElementById('addItemForm').addEventListener('submit', function() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);


    const newItem = {
     id: Date.now(),
        name: itemName,
        price: itemPrice
    };
    
    addItem(newItem);
});

document.getElementById('displayCartButton').addEventListener('click', displayCart);

initializeCart();