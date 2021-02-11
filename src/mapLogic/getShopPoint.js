import { ICON_IMAGE_OFFSET, ICON_IMAGE_SIZE } from "./constants";
import { initSlider } from "../components/ShopSlider";
import { ShopCard } from "../components/ShopCard";

function getShopPoint(shopInfo) {
    const BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        ShopCard(shopInfo),
        {
            build: function () {
                BalloonContentLayout.superclass.build.call(this);
                initSlider();
            },
        }
    );
    return new ymaps.Placemark(
        shopInfo.coords,
        {},
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
