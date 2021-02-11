import { ShopHeader } from "./ShopHeader";
import { ShopSlider } from "./ShopSlider";
import { ShopDescription } from "./ShopDescription";
import { ShopContactInfo } from "./ShopContactInfo";

const ShopCard = (shopInfo) => {
    const componentsList = [];
    componentsList.push(ShopHeader(shopInfo));
    componentsList.push(ShopSlider(shopInfo));
    componentsList.push(ShopDescription(shopInfo));
    componentsList.push(ShopContactInfo(shopInfo));
    return componentsList.join("");
};

export { ShopCard };
