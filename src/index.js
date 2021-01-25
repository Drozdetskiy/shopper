import { getMapData } from "./data/getMapData";
import { getShopData } from "./data/getShopData";
import { getStore } from "./store/store";
import { createMap } from "./mapLogic/createMap";

function getBubbleClickCallback(map, markId) {
    function callback(event) {
        const [x, y] = [event.get("clientX"), event.get("clientY")];
        const el = createDetailedModalView([x, y]);
        const shopInfoNodeTemplate = document.getElementById(
            "shop-data-template"
        ).content;
        const node = shopInfoNodeTemplate.querySelector(".shop-data");
        const shopInfoNode = node.cloneNode(true);
        const gallery = shopInfoNode.querySelector(".gallery");

        // window.dispatchEvent(new Event("resize"));
        console.log(shopInfoNode);
        shopInfoNode.style.left = `${x}px`;
        shopInfoNode.style.top = `${y}px`;
        document.body.appendChild(shopInfoNode);
        const Flickity = require("flickity");
        require("flickity-imagesloaded");

        const flkty = new Flickity(gallery, {
            imagesLoaded: true,
        });
        map.behaviors.disable("scrollZoom");
    }
    return callback;
}

function createDetailedModalView([x, y]) {
    console.log(x, y);
    const div = document.createElement("div");
    div.textContent = "Hello!";
    div.style.position = "absolute";
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    return div;
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
    console.log(mapData, shopData);
    createMap(mapData, shopData, getBubbleClickCallback);
}

main().catch((ex) => {
    console.log(ex);
    console.error("Can`t init app");
});
