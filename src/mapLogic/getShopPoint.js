import { ICON_IMAGE_OFFSET, ICON_IMAGE_SIZE } from "./constants";

function getShopPoint(shopInfo) {
    let counter = 0;
    const BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
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
            "" +
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
            "</div>",
        {
            build: function () {
                // First, we call the "build" method of the parent class.
                BalloonContentLayout.superclass.build.call(this);
                // Then we perform additional steps.
                $("#counter-button").bind("click", this.onCounterClick);
                $("#count").html(counter);
                var slideIndex = 1;
                showSlides(slideIndex);

                function plusSlides(n) {
                    showSlides((slideIndex += n));
                }

                function currentSlide(n) {
                    showSlides((slideIndex = n));
                }

                function showSlides(n) {
                    var i;
                    var slides = document.getElementsByClassName("mySlides");
                    var dots = document.getElementsByClassName("dot");
                    if (n > slides.length) {
                        slideIndex = 1;
                    }
                    if (n < 1) {
                        slideIndex = slides.length;
                    }
                    for (i = 0; i < slides.length; i++) {
                        slides[i].style.display = "none";
                    }
                    for (i = 0; i < dots.length; i++) {
                        dots[i].className = dots[i].className.replace(
                            " active",
                            ""
                        );
                    }
                    slides[slideIndex - 1].style.display = "block";
                    dots[slideIndex - 1].className += " active";
                }
                const elements = document.getElementsByClassName("dot");
                Array.from(elements).forEach((el, i) => {
                    el.addEventListener("click", () => {
                        currentSlide(i + 1);
                    });
                });
                try {
                    const prev = document.getElementById("prev-shop-img");
                    prev.addEventListener("click", () => {
                        plusSlides(-1);
                    });
                    const next = document.getElementById("next-shop-img");
                    next.addEventListener("click", () => {
                        plusSlides(1);
                    });
                } catch (error) {
                    console.log(error, "hello2");
                }
            },

            /**
             * In the same way, we redefine the "clear" function in order to
             * remove listening for clicks when the layout is deleted from the map.
             */
            clear: function () {
                /**
                 * We perform the steps in reverse order - first remove the listener,
                 * and then call the "clear" method of the parent class.
                 */
                $("#counter-button").unbind("click", this.onCounterClick);
                BalloonContentLayout.superclass.clear.call(this);
            },

            onCounterClick: function (ev) {
                console.log(ev);
                $("#count").html(++counter);
                if (counter === 5) {
                    alert("Good work.");
                    counter = 0;
                    $("#count").html(counter);
                }
            },
        }
    );
    return new ymaps.Placemark(
        shopInfo.coords,
        {
            name: "Calculating",
            // balloonContentHeader:
            //     '<a href = "#">Рога и копыта</a><br>' +
            //     '<span class="description">Сеть кинотеатров</span>',
            // // Зададим содержимое основной части балуна.
            // balloonContentBody:
            //     '<img src="img/cinema.jpg" height="150" width="200"> <br/> ' +
            //     '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
            //     "<b>Ближайшие сеансы</b> <br/> Сеансов нет.",
            // // Зададим содержимое нижней части балуна.
            // balloonContentFooter:
            //     'Информация предоставлена:<br/>OOO "Рога и копыта"',
            // Зададим содержимое всплывающей подсказки.
        },
        {
            iconLayout: "default#image",
            iconImageHref: "assets/placemark.svg",
            iconImageSize: ICON_IMAGE_SIZE,
            iconImageOffset: ICON_IMAGE_OFFSET,
            balloonContentLayout: BalloonContentLayout,
            balloonPanelMaxMapArea: 0,
        }
    );
}

export { getShopPoint };
