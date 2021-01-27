import { getShopPoint } from "./getShopPoint";

function createMap(mapData, shopData, getBubbleClickCallback) {
    ymaps.ready(function () {
        const map = new ymaps.Map("map", mapData);
        shopData.forEach((shopInfo) => {
            const shopPoint = getShopPoint(shopInfo);
            shopPoint.events.add(
                "click",
                getBubbleClickCallback(map, shopInfo)
            );
            map.geoObjects.add(shopPoint);
        });
    });
}

export { createMap };
