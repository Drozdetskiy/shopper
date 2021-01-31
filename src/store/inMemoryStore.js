class InMemoryStore {
    constructor(storedObjects) {
        Object.entries(storedObjects).forEach(([storedKey, value]) => {
            this[storedKey] = new value();
        });
    }
}

class StoredList {
    constructor() {
        this._list = [];
    }

    addValue(value) {
        this._list.push(value);
    }

    getValues() {
        return this._list;
    }

    clearValues() {
        this._list = [];
    }
}

export { InMemoryStore, StoredList };
