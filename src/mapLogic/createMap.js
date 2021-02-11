import { getShopPoint } from "./getShopPoint";
import { MainMenuSelect } from "../components/MainMenuSelect";

function createMap(mapData, shopData) {
    ymaps.ready(function () {
        const map = new ymaps.Map("map", mapData);
        const optionsList = [];
        const shopPointsList = [];
        shopData.forEach((shopInfo, key) => {
            const shopPoint = getShopPoint(shopInfo);
            map.geoObjects.add(shopPoint);
            shopPointsList.push(shopPoint);
            optionsList.push(new Option(shopInfo.name, key));
        });
        const menu = MainMenuSelect(shopPointsList);
        optionsList.forEach((option) => {
            menu.appendChild(option);
        });
    });
}

export { createMap };
