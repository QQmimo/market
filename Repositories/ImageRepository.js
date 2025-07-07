export class ImageRepository {
    static _getDefaultImage(hash, size = 150) {
        return `https://dummyjson.com/icon/${hash.replace(/ /g, '+')}/${size}`;
    }

    static async tryGetImage(url) {
        const response = await fetch(url, {
            method: 'GET'
        });
        if (!response.ok) {
            return this._getDefaultImage(url);
        }
        return url;
    }
}