import { ShopSlide } from "./ShopSlide";
import { ShopSliderContainer } from "./ShopSliderContainer";
import { ShopSliderDot } from "./ShopSliderDot";

const ShopSlider = ({ imagesData }) => {
    const slides = imagesData.map((imageData, index, arr) =>
        ShopSlide(imageData, index, arr.length)
    );
    const dots = imagesData.reduce((acc) => [ShopSliderDot(), ...acc], []);
    return ShopSliderContainer(slides, dots);
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
        const slides = document.getElementsByClassName("slide");
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
