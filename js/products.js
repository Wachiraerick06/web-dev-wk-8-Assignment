// Products page functionality
document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.products-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Load all products initially
    displayProducts('all');

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter products
            const category = button.dataset.category;
            displayProducts(category);
        });
    });

    function displayProducts(category) {
        if (!productsGrid) return;

        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);

        productsGrid.innerHTML = filteredProducts.map(createProductCard).join('');

        // Add click handlers for product cards
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('click', () => {
                const productId = card.dataset.productId;
                showProductModal(productId);
            });
        });
    }

    function showProductModal(productId) {
        const product = products.find(p => p.id === parseInt(productId));
        if (!product) return;

        const modal = document.createElement('div');
        modal.classList.add('product-modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="category">${product.category}</p>
                <p class="price">$${product.price}</p>
                <p class="description">${product.description}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;

        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('show'), 10);

        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        });
    }
});