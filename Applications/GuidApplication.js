export class GuidApplication {
    new() {
        const symbols = '0123456789ABCDEF';
        const mask = 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx';
        return mask.replace(/x/g, c => symbols.charAt(Math.random() * symbols.length));
    }
}