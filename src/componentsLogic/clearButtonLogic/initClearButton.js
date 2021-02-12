import { DEFAULT_OPTION_VALUE } from './constants';

function initClearButton(menu, shopPoints) {
    const [closeButton] = document.getElementsByClassName('clear');
    const callback = () => {
        shopPoints
            .filter((shopPoint) => shopPoint)
            .forEach((shopPoint) => {
                shopPoint.balloon.close();
            });
        menu.value = DEFAULT_OPTION_VALUE;
    };
    closeButton.addEventListener('click', callback);
}

export { initClearButton };
