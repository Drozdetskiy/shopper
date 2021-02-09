const MAIN_MENU_SELECT_ID = "main-menu-select";

class MainMenuSelect {
    constructor() {
        this._select = document.getElementById(MAIN_MENU_SELECT_ID);
        this._placemarks = {};
    }

    compile() {
        this._select = this._select.addEventListener(
            "change",
            this.getChangeCallback(this._placemarks)
        );
    }
    addOption(shopPoint, shopInfo, key) {
        const option = new Option(shopInfo.name, key);
        const [clientX, clientY] = shopInfo.coords;
        this._placemarks[key] = { shopPoint, clientX, clientY };
        this._select.appendChild(option);
    }

    getChangeCallback(placemarks) {
        function callback() {
            const select = document.getElementById(MAIN_MENU_SELECT_ID);
            const { shopPoint: placemark, clientX, clientY } = placemarks[
                select.value
            ];
            placemark.events.fire("click");
        }
        return callback;
    }
}

export { MainMenuSelect };
