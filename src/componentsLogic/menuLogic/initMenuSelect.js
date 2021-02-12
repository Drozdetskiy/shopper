import { MAIN_MENU_SELECT_ID } from './constants';

function initMenuSelect(shopPoints, options) {
    const menu = document.getElementById(MAIN_MENU_SELECT_ID);

    const getChangeCallback = (placemarks) => {
        return () => {
            const select = document.getElementById(MAIN_MENU_SELECT_ID);
            const placemark = placemarks[select.value];
            placemark.events.fire('click');
        };
    };

    menu.addEventListener('change', getChangeCallback(shopPoints));
    options.forEach((option) => {
        menu.appendChild(option);
    });
    return menu;
}

export { initMenuSelect };
