import { getStore } from "./store/store.js";
import { getMapData } from "./data/getMapData.js";
import { getShopData } from "./data/getShopData.js";

async function main() {
    const store = getStore();
    store.add("mapData", getMapData, 10 * 60);
    store.add("shopData", getShopData, 5 * 60);

    await store.fetchStore();
    const result = await store.get("mapData");
    const result2 = await store.get("shopData");
    console.log(result);
    console.log(result2);
}

main();
