class Closer {
    constructor(style, href, closerInner) {
        this.style = style;
        this.href = href;
        this.closerInner = closerInner;
    }

    get mainClass() {
        return this.style.class.split(" ")[0];
    }

    render() {
        return (
            `<a class="${this.style.class}" href="${this.href}">` +
            this.closerInner.render() +
            "</a>"
        );
    }
}
