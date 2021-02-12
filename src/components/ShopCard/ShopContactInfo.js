const ShopContactInfo = ({ contactInfo }) => {
    const { address, phone } = contactInfo;
    return `<address class="address">${address}</address><p class="phone">${phone}</p>`;
};

export { ShopContactInfo };
