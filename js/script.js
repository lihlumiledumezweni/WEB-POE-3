/* ==========================================
   HLUMIE'S NGO - PART 3 MAIN SCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* 1. GALLERY LIGHTBOX FUNCTIONALITY */
    const images = document.querySelectorAll('.gallery-img');
    
    const modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-content" src="" alt="Enlarged View">
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('.lightbox-content');
    const closeBtn = modal.querySelector('.lightbox-close');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    /* 2. FORM VALIDATION */
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            if (nameInput && nameInput.value.trim() === '') {
                alert('Please enter your full name.');
                nameInput.focus();
                return;
            }

            const emailInput = document.getElementById('email');
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (emailInput && !emailInput.value.match(emailPattern)) {
                alert('Please enter a valid email address.');
                emailInput.focus();
                return;
            }

            const messageInput = document.getElementById('message');
            if (messageInput && messageInput.value.trim().length < 10) {
                alert('Message must be at least 10 characters long.');
                messageInput.focus();
                return;
            }

            alert('Thank you! Your form has been successfully validated and processed.');
            contactForm.reset();
        });
    }
});