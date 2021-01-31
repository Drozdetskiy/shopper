const SHOP_DATA_TEMPLATE_ID = "shop-data-template";
const SHOP_INFO_SELECTORS = {
    NODE: ".shop-data",
    HEADER: ".header",
    DESCRIPTION: ".description",
    ADDRESS: ".address",
    GALLERY: ".gallery",
    CLOSE_BUTTON: ".close-button",
};

class ShopInfoNode {
    constructor(shopInfo, [coordX, coordY], closeCallback) {
        this.shopInfo = shopInfo;
        this.coordX = coordX;
        this.coordY = coordY;
        this.closeCallback = closeCallback;
        this._node = null;
    }

    compile() {
        const shopInfoNodeTemplate = document.getElementById(
            SHOP_DATA_TEMPLATE_ID
        ).content;
        const node = shopInfoNodeTemplate.querySelector(
            SHOP_INFO_SELECTORS.NODE
        );
        const shopInfoNode = node.cloneNode(true);
        const header = shopInfoNode.querySelector(SHOP_INFO_SELECTORS.HEADER);
        const description = shopInfoNode.querySelector(
            SHOP_INFO_SELECTORS.DESCRIPTION
        );
        const address = shopInfoNode.querySelector(SHOP_INFO_SELECTORS.ADDRESS);
        const closeButton = shopInfoNode.querySelector(
            SHOP_INFO_SELECTORS.CLOSE_BUTTON
        );
        closeButton.addEventListener("click", this.closeCallback);
        header.innerText = this.shopInfo.name;
        description.innerText = this.shopInfo.description;
        address.innerText = this.shopInfo.contact_info.address;

        shopInfoNode.style.left = `${this.coordX}px`;
        shopInfoNode.style.top = `${this.coordY}px`;
        this._node = shopInfoNode;
    }

    get gallery() {
        if (this._node) {
            return this._node.querySelector(SHOP_INFO_SELECTORS.GALLERY);
        }
        throw new Error("Compile node first");
    }

    get node() {
        if (this._node) {
            return this._node;
        }
        throw new Error("Compile node first");
    }
}

export { ShopInfoNode };
