const ShopSliderContainer = (slides, dots) => {
    return (
        '<div class="slideshow-container">' +
        slides.join("") +
        '<a id="prev-shop-img" class="prev">&#10094;</a>' +
        '<a id="next-shop-img" class="next">&#10095;</a>' +
        `<div style="text-align:center">${dots.join("")}</div>` +
        "</div>"
    );
};

const ShopSlide = ({ src, alterName }, key, length) => {
    return (
        '<div class="mySlides fade">' +
        `<div class="numbertext">${key + 1} / ${length}</div>` +
        `<img src="${src}" alt="${alterName}" style="width:100%">` +
        `<div class="text">${alterName}</div>` +
        "</div>"
    );
};

const ShopSlider = ({ imagesData }) => {
    const slides = imagesData.map((imageData, index, arr) =>
        ShopSlide(imageData, index, arr.length)
    );
    const dots = imagesData.reduce((acc) => [ShopSliderDot(), ...acc], []);
    const shopSliderDot = ShopSliderContainer(slides, dots);
    console.log(shopSliderDot);
    return ShopSliderContainer(slides, dots);
};

const ShopSliderDot = () => '<span class="dot"></span>';

function initSlider() {
    let slideIndex = 1;

    const plusSlides = (n) => {
        showSlides((slideIndex += n));
    };

    const currentSlide = (n) => {
        showSlides((slideIndex = n));
    };

    const showSlides = (n) => {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    };

    showSlides(slideIndex);

    const elements = document.getElementsByClassName("dot");
    Array.from(elements).forEach((el, i) => {
        el.addEventListener("click", () => {
            currentSlide(i + 1);
        });
    });
    const prev = document.getElementById("prev-shop-img");
    prev.addEventListener("click", () => {
        plusSlides(-1);
    });
    const next = document.getElementById("next-shop-img");
    next.addEventListener("click", () => {
        plusSlides(1);
    });
}

export { ShopSlider, initSlider };
