// Contact form validation and submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            if (!validateForm(name, email, subject, message)) {
                return;
            }
            
            // Simulate form submission
            showSubmissionMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }
    
    function validateForm(name, email, subject, message) {
        // Reset previous error messages
        clearErrors();
        
        let isValid = true;
        
        // Name validation
        if (name.length < 2) {
            showError('name', 'Please enter a valid name');
            isValid = false;
        }
        
        // Email validation
        if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Subject validation
        if (!subject) {
            showError('subject', 'Please select a subject');
            isValid = false;
        }
        
        // Message validation
        if (message.length < 10) {
            showError('message', 'Message must be at least 10 characters long');
            isValid = false;
        }
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        field.classList.add('error');
        field.parentNode.appendChild(errorDiv);
    }
    
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        const errorFields = document.querySelectorAll('.error');
        
        errorMessages.forEach(error => error.remove());
        errorFields.forEach(field => field.classList.remove('error'));
    }
    
    function showSubmissionMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `submission-message ${type}`;
        messageDiv.textContent = message;
        
        contactForm.insertAdjacentElement('beforebegin', messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
});