const ShopContactInfo = ({ contactInfo }) => {
    const { address, phone } = contactInfo;
    return `<p class="address">${address}</p><p class="phone">${phone}</p>`;
};

export { ShopContactInfo };
