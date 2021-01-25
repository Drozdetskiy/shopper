const MAP_DATA = {
    center: [55.7, 20.6],
    zoom: 4,
    controls: [],
};

async function getMapData() {
    return await Promise.resolve(MAP_DATA);
}

export { getMapData };
