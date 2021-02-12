const SHOP_INFO_LIST = [
    {
        title: 'WARSAW',
        coords: [52.237049, 21.017532],
        description: 'warsaw_desc',
        contactInfo: {
            phone: '+375 29 111 11 11',
            address: 'City, Street, Building, Apartments',
        },
        imagesData: [
            {
                src: 'assets/zara/zara1.jpg',
                alterName: 'alter name',
            },
            {
                src: 'assets/zara/zara2.jpg',
                alterName: 'alter name',
            },
            {
                src: 'assets/zara/zara3.jpg',
                alterName: 'alter name',
            },
            {
                src: 'assets/zara/zara4.jpg',
                alterName: 'alter name',
            },
        ],
    },
    {
        title: 'MOSCOW',
        coords: [55.75222, 37.61556],
        description: 'moscow_desc',
        contactInfo: {
            phone: '+375 29 111 11 11',
            address: 'City, Street, Building, Apartments',
        },
        imagesData: [
            {
                src: 'assets/adidas/adidas1.jpeg',
                alterName: 'alter name',
            },
            {
                src: 'assets/adidas/adidas2.jpg',
                alterName: 'alter name',
            },
            {
                src: 'assets/adidas/adidas3.jpg',
                alterName: 'alter name',
            },
            {
                src: 'assets/adidas/adidas4.jpeg',
                alterName: 'alter name',
            },
        ],
    },
    {
        title: 'MILAN',
        coords: [45.464664, 9.18854],
        description: 'milan_desc',
        contactInfo: {
            phone: '+375 29 111 11 11',
            address: 'City, Street, Building, Apartments',
        },
        imagesData: [
            {
                src: 'assets/nike/nike1.jpg',
                alterName: 'alter name',
            },
            {
                src: 'assets/nike/nike2.jpg',
                alterName: 'alter name',
            },
            {
                src: 'assets/nike/nike3.jpg',
                alterName: 'alter name',
            },
            {
                src: 'assets/nike/nike4.jpg',
                alterName: 'alter name',
            },
        ],
    },
    {
        title: 'LONDON',
        coords: [51.50853, -0.076132],
        description: 'london_desc',
        contactInfo: {
            phone: '+375 29 111 11 11',
            address: 'City, Street, Building, Apartments',
        },
        imagesData: [
            {
                src: 'assets/mango/mango1.jpg',
                alterName: 'alter name',
            },
            {
                src: 'assets/mango/mangoa2.jpg',
                alterName: 'alter name',
            },
            {
                src: 'assets/mango/mango3.jpeg',
                alterName: 'alter name',
            },
            {
                src: 'assets/mango/mango4.jpg',
                alterName: 'alter name',
            },
        ],
    },
    {
        title: 'PARIS',
        coords: [48.864716, 2.349014],
        description: 'paris_desc',
        contactInfo: {
            phone: '+375 29 111 11 11',
            address: 'City, Street, Building, Apartments',
        },
        imagesData: [
            {
                src: 'assets/sportmaster/sportmaster1.jpg',
                alterName: 'alter name',
            },
            {
                src: 'assets/sportmaster/sportmaster2.jpg',
                alterName: 'alter name',
            },
            {
                src: 'assets/sportmaster/sportmaster3.jpg',
                alterName: 'alter name',
            },
            {
                src: 'assets/sportmaster/sportmaster4.jpg',
                alterName: 'alter name',
            },
        ],
    },
];

async function getShopData() {
    return SHOP_INFO_LIST;
}

export { getShopData };
