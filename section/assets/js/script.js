const images = document.querySelectorAll('.product-image');

images.forEach(image => {
    const originalSrc = image.src;

    const hoverSrc = 'assets/images/2.svg';

    image.addEventListener('mouseover', () => {
        image.src = hoverSrc;
    });

    image.addEventListener('mouseout', () => {
        image.src = originalSrc;
    });
});
