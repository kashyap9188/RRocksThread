document.querySelectorAll('.faq-question').forEach(el => {
    el.addEventListener('click', () => {
        const activeFaqItem = document.querySelector('.faq-item.active')
        if (activeFaqItem && activeFaqItem != el.parentNode) {
            activeFaqItem.classList.remove('active')
        }

        el.parentNode.classList.toggle('active')
    })
})

document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('#navbar').classList.toggle('mobile-nav-active')
    })
})

const galleryItems = document.querySelectorAll('.gallery-item');
const fullscreenModal = document.querySelector('.fullscreen-modal');
const modalContent = fullscreenModal.querySelector('.modal-content');
const modalClose = fullscreenModal.querySelector('.modal-close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').getAttribute('src');
        modalContent.setAttribute('src', imgSrc);
        fullscreenModal.style.display = 'flex';
    });
});

modalClose.addEventListener('click', () => {
    fullscreenModal.style.display = 'none';
});


// JavaScript
window.addEventListener("scroll", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.scrollY > 100) {
        scrollToTopBtn.parentElement.classList.add("active");
    } else {
        scrollToTopBtn.parentElement.classList.remove("active");
    }
});

document.getElementById("scrollToTopBtn").addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
