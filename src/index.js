import { getMapData } from "./data/getMapData";
import { getShopData } from "./data/getShopData";
import { getStore } from "./store/store";
import { createMap } from "./mapLogic/createMap";
import { ShopInfoNode } from "./components/shopInfoNode";
import { FlickityGallery } from "./components/flickityGallery";

function getBubbleClickCallback(map, shopInfo) {
    function callback(event) {
        const shopInfoNode = new ShopInfoNode(shopInfo, [
            event.get("clientX"),
            event.get("clientY"),
        ]);
        shopInfoNode.compile();
        document.body.appendChild(shopInfoNode.node);
        const gallery = new FlickityGallery(shopInfoNode.gallery, shopInfo);
        gallery.compile();
        const Flickity = require("flickity");
        require("flickity-imagesloaded");

        const flkty = new Flickity(gallery.gallery, {
            imagesLoaded: true,
        });
        map.behaviors.disable("scrollZoom");
    }
    return callback;
}

function insertElement(el) {
    const currentMap = document.getElementById("map");
    document.body.insertBefore(el, currentMap.nextSibling);
}

async function main() {
    const store = getStore();
    store.add("mapData", getMapData, 10 * 60);
    store.add("shopData", getShopData, 5 * 60);

    await store.fetchStore();
    const [mapData, shopData] = await Promise.all([
        store.get("mapData"),
        store.get("shopData"),
    ]);
    createMap(mapData, shopData, getBubbleClickCallback);
}

main().catch((ex) => {
    console.error("Can`t init app");
});
