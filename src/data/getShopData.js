const SHOP_INFO_LIST = [
    {
        name: "WARSAW",
        coords: [52.237049, 21.017532],
        description: "warsaw_desc",
        contact_info: {
            phone: "+375 29 111 11 11",
            address: "City, Street, Building, Apartments",
        },
        imagesData: [
            {
                src: "link_1",
                alterName: "alter name",
            },
            {
                src: "link_2",
                alterName: "alter name",
            },
            {
                src: "link_3",
                alterName: "alter name",
            },
            {
                src: "link_4",
                alterName: "alter name",
            },
        ],
    },
    {
        name: "MOSCOW",
        coords: [55.75222, 37.61556],
        description: "moscow_desc",
        contact_info: {
            phone: "+375 29 111 11 11",
            address: "City, Street, Building, Apartments",
        },
        imagesData: [
            {
                src: "link_1",
                alterName: "alter name",
            },
            {
                src: "link_2",
                alterName: "alter name",
            },
            {
                src: "link_3",
                alterName: "alter name",
            },
            {
                src: "link_4",
                alterName: "alter name",
            },
        ],
    },
    {
        name: "MILAN",
        coords: [45.464664, 9.18854],
        description: "milan_desc",
        contact_info: {
            phone: "+375 29 111 11 11",
            address: "City, Street, Building, Apartments",
        },
        imagesData: [
            {
                src: "link_1",
                alterName: "alter name",
            },
            {
                src: "link_2",
                alterName: "alter name",
            },
            {
                src: "link_3",
                alterName: "alter name",
            },
            {
                src: "link_4",
                alterName: "alter name",
            },
        ],
    },
    {
        name: "LONDON",
        coords: [51.50853, -0.076132],
        description: "london_desc",
        contact_info: {
            phone: "+375 29 111 11 11",
            address: "City, Street, Building, Apartments",
        },
        imagesData: [
            {
                src: "link_1",
                alterName: "alter name",
            },
            {
                src: "link_2",
                alterName: "alter name",
            },
            {
                src: "link_3",
                alterName: "alter name",
            },
            {
                src: "link_4",
                alterName: "alter name",
            },
        ],
    },
    {
        name: "PARIS",
        coords: [48.864716, 2.349014],
        description: "paris_desc",
        contact_info: {
            phone: "+375 29 111 11 11",
            address: "City, Street, Building, Apartments",
        },
        imagesData: [
            {
                src: "link_1",
                alterName: "alter name",
            },
            {
                src: "link_2",
                alterName: "alter name",
            },
            {
                src: "link_3",
                alterName: "alter name",
            },
            {
                src: "link_4",
                alterName: "alter name",
            },
        ],
    },
];

async function getShopData() {
    return await Promise.resolve(SHOP_INFO_LIST);
}

export { getShopData };
