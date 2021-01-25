function getShopPoint(shopInfo, i) {
    return new ymaps.Placemark(
        shopInfo.coords,
        {},
        {
            iconLayout: "default#image",
            iconImageHref: "assets/placemark.svg",
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -40],
        }
    );
}

export { getShopPoint };
