const SHOP_INFO_LIST = [
    {
        header: "WARSAW",
        coords: [52.237049, 21.017532],
        description: "warsaw_desc",
        contactInfo: {
            phone: "+375 29 111 11 11",
            address: "City, Street, Building, Apartments",
        },
        imagesData: [
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
        ],
    },
    {
        header: "MOSCOW",
        coords: [55.75222, 37.61556],
        description: "moscow_desc",
        contactInfo: {
            phone: "+375 29 111 11 11",
            address: "City, Street, Building, Apartments",
        },
        imagesData: [
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
        ],
    },
    {
        header: "MILAN",
        coords: [45.464664, 9.18854],
        description: "milan_desc",
        contactInfo: {
            phone: "+375 29 111 11 11",
            address: "City, Street, Building, Apartments",
        },
        imagesData: [
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
        ],
    },
    {
        header: "LONDON",
        coords: [51.50853, -0.076132],
        description: "london_desc",
        contactInfo: {
            phone: "+375 29 111 11 11",
            address: "City, Street, Building, Apartments",
        },
        imagesData: [
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
        ],
    },
    {
        header: "PARIS",
        coords: [48.864716, 2.349014],
        description: "paris_desc",
        contactInfo: {
            phone: "+375 29 111 11 11",
            address: "City, Street, Building, Apartments",
        },
        imagesData: [
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
            {
                src: "assets/logo.png",
                alterName: "alter name",
            },
        ],
    },
];

async function getShopData() {
    return SHOP_INFO_LIST;
}

export { getShopData };
