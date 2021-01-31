const FLICKITY_IMAGE_CLASS = "gallery-cell";

class FlickityGallery {
    constructor(gallery, shopInfo) {
        this._gallery = gallery;
        this.imagesData = shopInfo.imagesData;
    }

    compile() {
        const imgList = this.imagesData.map(({ src, alterName }) => {
            const image = new Image();
            image.src = src;
            image.alt = alterName;
            image.className = FLICKITY_IMAGE_CLASS;
            return image;
        });
        imgList.forEach((image) => {
            this.gallery.appendChild(image);
        });
    }

    get gallery() {
        if (this._gallery) {
            return this._gallery;
        }
        throw new Error("Compile node first");
    }
}

export { FlickityGallery };
