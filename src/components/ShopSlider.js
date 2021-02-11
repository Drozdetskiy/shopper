const ShopSlider = (shopInfo) => {
    return (
        '<div class="slideshow-container">' +
        '  <div class="mySlides fade">' +
        '    <div class="numbertext">1 / 3</div>' +
        '    <img src="assets/logo.svg" style="width:100%">' +
        '    <div class="text">Caption Text</div>' +
        "  </div>" +
        '  <div class="mySlides fade">' +
        '    <div class="numbertext">2 / 3</div>' +
        '    <img src="assets/logo.svg" style="width:100%">' +
        '    <div class="text">Caption Two</div>' +
        "  </div>" +
        '  <div class="mySlides fade">' +
        '    <div class="numbertext">3 / 3</div>' +
        '    <img src="assets/logo.svg" style="width:100%">' +
        '    <div class="text">Caption Three</div>' +
        "  </div>" +
        '  <a id="prev-shop-img" class="prev">&#10094;</a>' +
        '  <a id="next-shop-img" class="next">&#10095;</a>' +
        "</div>" +
        "<br>" +
        '<div style="text-align:center">' +
        '  <span class="dot"></span>' +
        '  <span class="dot"></span>' +
        '  <span class="dot"></span>' +
        "</div>"
    );
};

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
