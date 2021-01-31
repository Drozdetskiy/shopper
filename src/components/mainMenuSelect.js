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
        this._placemarks[key] = shopPoint;
        this._select.appendChild(option);
    }

    getChangeCallback(placemarks) {
        function callback() {
            const select = document.getElementById(MAIN_MENU_SELECT_ID);
            const placemark = placemarks[select.value];
            // TODO: throw clientX and clientY into callback
            placemark.events.fire("click", { clientX: 10, clientY: 20 });
        }
        return callback;
    }
}

export { MainMenuSelect };
