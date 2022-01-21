export class Page {
    constructor(
        id,
        menuTitle,
        detailTitleStroked,
        detailTitleNormal,
        subTitle,
        description,
        b2c,
        videoLink,
        ) {
        this.id = id,
        this.menuTitle = menuTitle;
        this.detailTitleStroked = detailTitleStroked;
        this.detailTitleNormal = detailTitleNormal;
        this.subTitle = subTitle;
        this.description = description;
        this.b2c = b2c;
        this.videoLink = videoLink;
    }
}