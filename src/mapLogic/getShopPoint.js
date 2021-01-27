import { ICON_IMAGE_OFFSET, ICON_IMAGE_SIZE } from "./constants";

function getShopPoint(shopInfo) {
    return new ymaps.Placemark(
        shopInfo.coords,
        {},
        {
            iconLayout: "default#image",
            iconImageHref: "assets/placemark.svg",
            iconImageSize: ICON_IMAGE_SIZE,
            iconImageOffset: ICON_IMAGE_OFFSET,
        }
    );
}

export { getShopPoint };
