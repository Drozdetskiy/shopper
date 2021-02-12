const ShopSliderContainer = (slides, dots) => {
    return (
        '<div class="slideshow-container">' +
        slides.join('') +
        '<a id="prev-shop-img" class="prev">&#10094;</a>' +
        '<a id="next-shop-img" class="next">&#10095;</a>' +
        `<div style="text-align:center">${dots.join('')}</div>` +
        '</div>'
    );
};

export { ShopSliderContainer };
