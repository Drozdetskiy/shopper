import { getShopPoint } from "./getShopPoint";
import { MainMenuSelect } from "../components/mainMenuSelect";

function createMap(mapData, shopData, getBubbleClickCallback) {
    ymaps.ready(function () {
        const map = new ymaps.Map("map", mapData);
        const menu = new MainMenuSelect();

        shopData.forEach((shopInfo, key) => {
            const shopPoint = getShopPoint(shopInfo);
            map.geoObjects.add(shopPoint);
            menu.addOption(shopPoint, shopInfo, key);
        });
        menu.compile();
    });
}

export { createMap };
