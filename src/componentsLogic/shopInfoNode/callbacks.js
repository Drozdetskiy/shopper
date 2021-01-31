import { ShopInfoNode } from "../../components/shopInfoNode";
import { FlickityGallery } from "../../components/flickityGallery";
import { getApp } from "../../app/app";

function getCloseShopInfoCallback(map) {
    function callback(event) {
        event.target.parentElement.parentElement.remove();
        map.behaviors.enable("scrollZoom");
    }
    return callback;
}

function getBubbleClickCallback(map, shopInfo) {
    function callback(event) {
        const app = getApp();
        app.inMemoryStore.shopInfoNodes.getValues().forEach((node) => {
            node.remove();
        });
        app.inMemoryStore.shopInfoNodes.clearValues();

        const shopInfoNode = new ShopInfoNode(
            shopInfo,
            [event.get("clientX"), event.get("clientY")],
            getCloseShopInfoCallback(map)
        );
        shopInfoNode.compile();

        app.inMemoryStore.shopInfoNodes.addValue(shopInfoNode.node);
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

export { getBubbleClickCallback };
