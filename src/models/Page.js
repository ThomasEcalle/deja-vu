export class Page {
    constructor(
        id,
        menuTitle,
        detailTitleStroked,
        detailTitleNormal,
        subTitle,
        description,
        approach,
        b2c,
        videoLink,
        translations,
        ) {
        this.id = id,
        this.menuTitle = menuTitle;
        this.detailTitleStroked = detailTitleStroked;
        this.detailTitleNormal = detailTitleNormal;
        this.subTitle = subTitle;
        this.description = description;
        this.approach = approach;
        this.b2c = b2c;
        this.videoLink = videoLink;
        this.translations = translations;
    }

    getMenuTitle(locale) {
        if (this.translations[locale] != undefined) {
            return this.translations[locale]["menuTitle"];
        }

        if (this.translations["en-US"] != undefined) {
            return this.translations["en-US"]["menuTitle"];
        }
        
        return this.menuTitle;
    }

    getDetailTitleStroked(locale) {
        if (this.translations[locale] != undefined) {
            return this.translations[locale]["detailTitleStroked"];
        }

        if (this.translations["en-US"] != undefined) {
            return this.translations["en-US"]["detailTitleStroked"];
        }
        
        return this.detailTitleStroked;
    }

    getDetailTitleNormal(locale) {
        if (this.translations[locale] != undefined) {
            return this.translations[locale]["detailTitleNormal"];
        }

        if (this.translations["en-US"] != undefined) {
            return this.translations["en-US"]["detailTitleNormal"];
        }
        
        return this.detailTitleNormal;
    }

    getSubTitle(locale) {
        if (this.translations[locale] != undefined) {
            return this.translations[locale]["subtitle"];
        }

        if (this.translations["en-US"] != undefined) {
            return this.translations["en-US"]["subtitle"];
        }
        
        return this.subTitle;
    }

    getDescription(locale) {
        if (this.translations[locale] != undefined) {
            return this.translations[locale]["description"];
        }

        if (this.translations["en-US"] != undefined) {
            return this.translations["en-US"]["description"];
        }
        
        return this.description;
    }

    getApproach(locale) {
        if (this.translations[locale] != undefined) {
            return this.translations[locale]["approach"];
        }

        if (this.translations["en-US"] != undefined) {
            return this.translations["en-US"]["approach"];
        }
        
        return this.approach;
    }
}