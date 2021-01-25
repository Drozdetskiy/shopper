// class LocalStorage {
//     constructor() {
//         this.storage = {};
//     }
//
//     setItem(key, data) {
//         this.storage[key] = data;
//     }
//
//     getItem(key) {
//         return this.storage[key];
//     }
// }
//
// const localStorage = new LocalStorage();

class Store {
    constructor(name = "appStorage") {
        this.name = name;
        this._store = {};
    }

    add(
        key,
        callback,
        ttl,
        serialize = JSON.stringify,
        deserialize = JSON.parse
    ) {
        this._store[key] = {
            callback,
            ttl,
            serialize,
            deserialize,
        };
    }

    async fetchStore(force = false) {
        const callbacksList = Object.keys(this._store).map((key) => {
            this.fetchStoredKey(key, force);
        });
        await Promise.all(callbacksList);
    }

    async fetchStoredKey(key, force = false) {
        try {
            const updatedTime = JSON.parse(
                localStorage.getItem(`${this.name}_${key}_updatedAt`) || 0
            );
            const now = Date.now();
            const storeData = this._store[key];
            if (force || updatedTime + storeData.ttl * 1000 < now) {
                const data = await storeData.callback();
                localStorage.setItem(
                    `${this.name}_${key}`,
                    storeData.serialize(data)
                );
                localStorage.setItem(
                    `${this.name}_${key}_updatedAt`,
                    JSON.stringify(now)
                );
            }
        } catch (Error) {
            console.error(`Can't fetch ${key} for storage`);
        }
    }

    async get(key) {
        const storeData = this._store[key];
        const keyUpdatedAt = localStorage.getItem(
            `${this.name}_${key}_updatedAt`
        );
        if (keyUpdatedAt + storeData.ttl * 1000 < Date.now()) {
            await this.fetchStoredKey(key, true);
        }
        const data = localStorage.getItem(`${this.name}_${key}`);
        return storeData.deserialize(data);
    }
}

let STORE;

function getStore() {
    if (!STORE) {
        STORE = new Store();
    }
    return STORE;
}

export { getStore };
