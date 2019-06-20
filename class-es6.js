

class Polygon {

    constructor(w, h) {
        Object.assign(this, {
            width: w, height: h
        });
    }
    print() {
        console.log(` width ${this.width} height ${this.height}`);
    }


}

let polygon = new Polygon(11, 12);
polygon.print();