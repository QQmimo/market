export class RequestApplication {
    static async get(url) {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'aacept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return new Promise(resolve => {
            setTimeout(() => {
                response.json().then(data => {
                    resolve(data);
                });
            }, 2000);
        });
    }
}