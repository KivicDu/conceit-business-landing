// ===== FADE IN SECTION KHI SCROLL =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Sau khi đã hiện rồi thì không cần observe nữa
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15  // Hiện khi 15% phần tử vào viewport
});

document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el);
});


// ===== NAVBAR: thêm shadow đậm hơn khi scroll xuống =====
const navbarWrapper = document.querySelector('.navbar-wrapper');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbarWrapper.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    } else {
        navbarWrapper.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});