const MAIN_MENU_SELECT_ID = "main-menu-select";

const MainMenuSelect = (shopPointsList) => {
    const menu = document.getElementById(MAIN_MENU_SELECT_ID);
    menu.addEventListener("change", getChangeCallback(shopPointsList));
    return menu;
};

const getChangeCallback = (placemarks) => {
    function callback() {
        const select = document.getElementById(MAIN_MENU_SELECT_ID);
        const placemark = placemarks[select.value];
        placemark.events.fire("click");
    }
    return callback;
};

export { MainMenuSelect };
