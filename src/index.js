import { getMapData } from "./data/getMapData";
import { getShopData } from "./data/getShopData";
import { createMap } from "./mapLogic/createMap";

async function initApp() {
    const [mapData, shopData] = await Promise.all([
        getMapData(),
        getShopData(),
    ]);
    createMap(mapData, shopData);
}

initApp().catch((ex) => {
    console.error("Can`t init app");
});
