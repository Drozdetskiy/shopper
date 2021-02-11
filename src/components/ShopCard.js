import { ShopHeader } from "./ShopHeader";
import { ShopSlider } from "./ShopSlider";
import { ShopDescription } from "./ShopDescription";
import { ShopContactInfo } from "./ShopContactInfo";

const ShopCard = (shopInfo) => {
    const components = [];
    components.push(ShopHeader(shopInfo));
    components.push(ShopSlider(shopInfo));
    components.push(ShopDescription(shopInfo));
    components.push(ShopContactInfo(shopInfo));
    return components.join("");
};

export { ShopCard };
