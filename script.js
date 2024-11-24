document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');
    const burger = document.createElement('div');
    
    burger.classList.add('burger');
    burger.innerHTML = '☰';
    
    // Initially hide burger on desktop
    burger.style.display = 'none';
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navButtons.classList.toggle('active');
        burger.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    document.querySelector('.navbar').appendChild(burger);

    // Handle burger visibility on resize
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            burger.style.display = 'block';
        } else {
            burger.style.display = 'none';
            navLinks.classList.remove('active');
            navButtons.classList.remove('active');
        }
    }

    // Check on load and resize
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    // FAQ Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            item.classList.toggle('active');
        });
    });
});
