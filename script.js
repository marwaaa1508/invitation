// DOM Elements
const envelopeFront = document.getElementById('envelopeFront');
const waxSeal = document.getElementById('waxSeal');
const envelopeOpen = document.getElementById('envelopeOpen');
const backButton = document.getElementById('backButton');
const rspsButton = document.querySelector('.rsvp-button');

// State
let isOpen = false;

// Event Listeners
waxSeal.addEventListener('click', openEnvelope);
backButton.addEventListener('click', closeEnvelope);
rspsButton.addEventListener('click', handleRSVP);

// Functions
function openEnvelope(e) {
    if (isOpen) return;
    
    e.stopPropagation();
    
    // Add break effect to seal
    waxSeal.style.animation = 'sealBreak 0.6s ease-out forwards';
    
    setTimeout(() => {
        isOpen = true;
        envelopeFront.classList.add('open');
        envelopeOpen.style.display = 'block';
        backButton.style.display = 'block';
        
        // Trigger animation
        setTimeout(() => {
            envelopeOpen.style.opacity = '1';
        }, 50);
    }, 400);
}

function closeEnvelope() {
    if (!isOpen) return;
    
    isOpen = false;
    envelopeFront.classList.remove('open');
    envelopeOpen.style.display = 'none';
    backButton.style.display = 'none';
    
    // Reset seal animation
    waxSeal.style.animation = 'sealPulse 2s ease-in-out infinite';
}

function handleRSVP() {
    // You can customize this behavior
    // For now, it opens an email client or shows a message
    alert('Thank you for your interest! Please send an email to rsvp@example.com to confirm your attendance.');
    // Or you could redirect to a form:
    // window.location.href = 'https://forms.gle/your-form-link';
}

// Add smooth scroll if needed
document.addEventListener('DOMContentLoaded', () => {
    console.log('Wedding Invitation loaded successfully');
});

// Optional: Add keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
        closeEnvelope();
    }
    if (e.key === 'Enter' && !isOpen) {
        openEnvelope({ stopPropagation: () => {} });
    }
});