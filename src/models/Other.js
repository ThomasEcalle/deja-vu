export class Other {
    constructor(
        id,
        title,
        description,
        bold,
        translations,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.bold = bold;
        this.translations = translations;
    }

    getTitle(locale) {
        if (this.translations[locale] != undefined) {
            return this.translations[locale]["title"];
        }

        if (this.translations["en-US"] != undefined) {
            return this.translations["en-US"]["title"];
        }
        
        return this.title;
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
}