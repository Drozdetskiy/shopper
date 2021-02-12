import { getShopPoint } from "./getShopPoint";

function initMap(mapData, shopData, postInit) {
    const shopPoints = [];
    const options = [];
    const callback = () => {
        const map = new ymaps.Map("map", mapData);
        shopData.forEach((shopInfo, key) => {
            const shopPoint = getShopPoint(shopInfo);
            shopPoints.push(shopPoint);
            map.geoObjects.add(shopPoint);
            options.push(new Option(shopInfo.title, key));
        });

        postInit(shopPoints, options);
    };
    ymaps.ready(callback);
    return shopPoints;
}

export { initMap };
