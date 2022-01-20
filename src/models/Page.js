export class Page {
    constructor(
        menuTitle,
        detailTitleStroked,
        detailTitleNormal,
        subTitle,
        description,
        b2c,
        ) {
        this.menuTitle = menuTitle;
        this.detailTitleStroked = detailTitleStroked;
        this.detailTitleNormal = detailTitleNormal;
        this.subTitle = subTitle;
        this.description = description;
        this.b2c = b2c;
    }
    toString() {
        console.log(JSON.stringify(this));
    }
}