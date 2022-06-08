export class Title {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.elementNode = document.getElementById(id);
    }

    render() {
        this.elementNode.textContent = this.title;
    }
}