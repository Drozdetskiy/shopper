import { getMapData } from "./data/getMapData";
import { getShopData } from "./data/getShopData";
import { getStore } from "./store/store";
import { createMap } from "./mapLogic/createMap";
import { InMemoryStore, StoredList } from "./store/inMemoryStore";
import { getApp } from "./app/app";
import { getBubbleClickCallback } from "./componentsLogic/shopInfoNode/callbacks";

async function initApp() {
    const app = getApp();

    const store = getStore();
    store.add("mapData", getMapData, 10 * 60);
    store.add("shopData", getShopData, 5 * 60);
    await store.fetchStore();

    const inMemoryStore = new InMemoryStore({ shopInfoNodes: StoredList });
    app.store = store;
    app.inMemoryStore = inMemoryStore;

    const [mapData, shopData] = await Promise.all([
        app.store.get("mapData"),
        app.store.get("shopData"),
    ]);
    createMap(mapData, shopData, getBubbleClickCallback);
}

initApp().catch((ex) => {
    console.error("Can`t init app");
});
