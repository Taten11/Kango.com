document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Product 1', price: '10.00', description: 'Description for product 1', image: 'images/product1.jpg' },
        { name: 'Product 2', price: '20.00', description: 'Description for product 2', image: 'images/product2.jpg' },
        { name: 'Product 3', price: '30.00', description: 'Description for product 3', image: 'images/product3.jpg' },
        { name: 'Product 4', price: '40.00', description: 'Description for product 4', image: 'images/product4.jpg' },
    ];

    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
});
