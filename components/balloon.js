class Balloon {
    constructor(style, balloonInner, closer) {
        this.style = style;
        this.balloonInner = balloonInner;
        this.closer = closer;
    }

    get mainClass() {
        return this.style.class.split(" ")[0];
    }

    get arrowMainClass() {
        return this.balloonInner.arrowMainClass;
    }

    get closeMainClass() {
        return this.closer.class.split(" ")[0];
    }

    render() {
        return (
            `<div class="${this.style.class}">` +
            `${this.closer.render()}` +
            `${this.balloonInner.render()}` +
            "</div>"
        );
    }
}
