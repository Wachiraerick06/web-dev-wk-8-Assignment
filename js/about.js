// About page animations and team data
document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = [
        {
            name: 'Wachira Erick',
            role: 'Founder & CEO',
            image: 'images/team-1.jpg',
            bio: 'Environmental activist and entrepreneur with 10+ years in sustainable business.'
        },
        {
            name: 'Sarah Green',
            role: 'Product Development',
            image: 'images/team-2.jpg',
            bio: 'Expert in sustainable materials and eco-friendly manufacturing processes.'
        },
        {
            name: 'Lisa Kendra',
            role: 'Sustainability Director',
            image: 'images/team-3.jpg',
            bio: 'Environmental scientist specializing in carbon footprint reduction.'
        }
    ];

    // Load team members
    const teamGrid = document.querySelector('.team-grid');
    if (teamGrid) {
        teamGrid.innerHTML = teamMembers.map(member => {
            const fallbackImage = 'https://via.placeholder.com/200x200?text=' + encodeURIComponent(member.name);
            return `
                <div class="team-card animate-fade-in">
                    <img 
                        src="${member.image}" 
                        alt="${member.name}" 
                        onerror="this.src='${fallbackImage}'"
                    >
                    <div class="team-info">
                        <h3>${member.name}</h3>
                        <p class="role">${member.role}</p>
                        <p class="bio">${member.bio}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Animate impact stats when they come into view
    const stats = document.querySelectorAll('.stat .number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));

    function animateValue(element) {
        const value = parseInt(element.textContent);
        let current = 0;
        const increment = value / 50; // Adjust for animation speed
        const duration = 1500; // Animation duration in milliseconds
        const step = duration / 50;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                element.textContent = value.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, step);
    }
});