import { getShopPoint } from "./getShopPoint";

function createMap(mapData, shopData, getBubbleClickCallback) {
    ymaps.ready(function () {
        const map = new ymaps.Map("map", mapData);
        shopData.forEach((shopInfo, i) => {
            const shopPoint = getShopPoint(shopInfo, i);
            shopPoint.events.add(
                "click",
                getBubbleClickCallback(map, `my-mark-${i}`)
            );
            map.geoObjects.add(shopPoint);
        });
    });
}

export { createMap };
