export default {
    getUrlData(data = {}) {
        if (typeof data !== 'object') return data
        const arr = [];
        for (let key in data) {
            let res = `${key}=${data[key]}`;
            arr.push(res);
        }
        const str = arr.join('&');
        return str;
    },
}