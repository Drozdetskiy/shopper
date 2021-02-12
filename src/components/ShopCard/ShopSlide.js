const ShopSlide = ({ src, alterName }, key, length) => {
    return (
        '<div class="slide fade">' +
        `<div class="page-number">${key + 1} / ${length}</div>` +
        `<img class="image" src="${src}" alt="${alterName}">` +
        '</div>'
    );
};

export { ShopSlide };
