import { getMapData } from "./data/getMapData";
import { getShopData } from "./data/getShopData";
import { initMap } from "./componentsLogic/mapLogic/initMap";
import { initMenuSelect } from "./componentsLogic/menuLogic/initMenuSelect";
import { initClearButton } from "./componentsLogic/clearButtonLogic/initClearButton";
import { DEFAULT_OPTION_VALUE } from "./componentsLogic/clearButtonLogic/constants";
import "reset-css";
import "./styles/styles.css";

async function initApp() {
    const addPointEvents = (menu, shopPoints) => {
        shopPoints.forEach((shopPoint, key) => {
            shopPoint.balloon.events.add("open", () => {
                menu.value = key;
            });
            shopPoint.balloon.events.add("close", () => {
                menu.value = DEFAULT_OPTION_VALUE;
            });
        });
    };

    const postInit = (shopPoints, options) => {
        const menu = initMenuSelect(shopPoints, options);
        initClearButton(menu, shopPoints);
        addPointEvents(menu, shopPoints);
    };

    const [mapData, shopData] = await Promise.all([
        getMapData(),
        getShopData(),
    ]);

    initMap(mapData, shopData, postInit);
}

initApp().catch((ex) => {
    console.error("Can`t init app");
});
