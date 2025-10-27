// Product data
const products = [
    {
        id: 1,
        name: 'Bamboo Utensil Set',
        category: 'Sustainable Home Goods',
        price: 24.99,
        image: '/web-dev-wk-8-Assignment/images/bamboo-utensils.jpg',
        description: 'Complete set of eco-friendly bamboo utensils for sustainable dining.'
    },
    {
        id: 2,
        name: 'Reusable Shopping Bag Set',
        category: 'Reusable Items',
        price: 19.99,
        image: '/web-dev-wk-8-Assignment/images/shopping-bags.jpg',
        description: 'Set of 5 durable, washable shopping bags made from recycled materials.'
    },
    {
        id: 3,
        name: 'Solar-Powered LED Lantern',
        category: 'Solar-Powered Gadgets',
        price: 34.99,
        image: '/web-dev-wk-8-Assignment/images/solar-lantern.jpg',
        description: 'Portable LED lantern powered by solar energy, perfect for outdoor activities.'
    },
    {
        id: 4,
        name: 'Bamboo Toothbrush Set',
        category: 'Bamboo Products',
        price: 12.99,
        image: '/web-dev-wk-8-Assignment/images/bamboo-toothbrush.jpg',
        description: 'Pack of 4 biodegradable bamboo toothbrushes with charcoal-infused bristles.'
    },
    {
        id: 5,
        name: 'Organic Skincare Kit',
        category: 'Organic Products',
        price: 49.99,
        image: '/web-dev-wk-8-Assignment/images/skincare-kit.jpg',
        description: 'Complete organic skincare set with cleanser, toner, and moisturizer.'
    },
    {
        id: 6,
        name: 'Glass Food Container Set',
        category: 'Sustainable Home Goods',
        price: 39.99,
        image: '/web-dev-wk-8-Assignment/images/glass-containers.jpg',
        description: 'Set of 5 glass food containers with bamboo lids for plastic-free food storage.'
    },
    {
        id: 7,
        name: 'Solar Power Bank',
        category: 'Solar-Powered Gadgets',
        price: 45.99,
        image: 'images/solar-powerbank.jpg',
        description: 'High-capacity power bank with solar charging capability for eco-friendly charging.'
    },
    {
        id: 8,
        name: 'Bamboo Bathroom Set',
        category: 'Bamboo Products',
        price: 29.99,
        image: 'images/bamboo-bathroom.jpg',
        description: 'Complete bathroom set including soap dish, toothbrush holder, and storage containers.'
    }
];

// Eco tips data
const ecoTips = [
    'Replace single-use plastics with reusable alternatives',
    'Turn off lights when leaving a room',
    'Use a reusable water bottle',
    'Bring your own shopping bags',
    'Start composting kitchen waste'
];

// Function to create product cards
function createProductCard(product) {
    const fallbackImage = 'https://via.placeholder.com/300x200?text=' + encodeURIComponent(product.name);
    return `
        <div class="product-card animate-fade-in">
            <img src="${fallbackImage}" alt="${product.name}" onerror="this.src='${fallbackImage}'">
            <h3>${product.name}</h3>
            <p class="category">${product.category}</p>
            <p class="price">$${product.price}</p>
            <p class="description">${product.description}</p>
            <button class="view-details">View Details</button>
        </div>
    `;
}

// Function to display featured products
function displayFeaturedProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        const featuredProducts = products.slice(0, 4); // Show first 4 products
        productGrid.innerHTML = featuredProducts.map(createProductCard).join('');
    }
}

// Function to display eco tips
function displayEcoTips() {
    const tipsContainer = document.querySelector('.tips-container');
    if (tipsContainer) {
        tipsContainer.innerHTML = ecoTips.map(tip => `
            <div class="tip animate-fade-in">
                <i class="fas fa-leaf"></i>
                <p>${tip}</p>
            </div>
        `).join('');
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedProducts();
    displayEcoTips();
});