export class ImageRepository {
    static getImageUrl(hash, size = 150) {
        return `https://dummyjson.com/icon/${hash.replace(/ /g, '+')}/${size}`;
    }
}