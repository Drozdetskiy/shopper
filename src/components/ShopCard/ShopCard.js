import { ShopTitle } from './ShopTitle';
import { ShopSlider } from './ShopSlider';
import { ShopDescription } from './ShopDescription';
import { ShopContactInfo } from './ShopContactInfo';

const ShopCard = (shopInfo) => {
    const content = [];
    content.push(ShopTitle(shopInfo));
    content.push(ShopSlider(shopInfo));
    content.push(ShopDescription(shopInfo));
    content.push(ShopContactInfo(shopInfo));
    console.log(content.join(''));
    return `<div class="shop-info-container"> ${content.join('')} </div>`;
};

export { ShopCard };
