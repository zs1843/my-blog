import axios from 'axios';
import utils from '@/utils';

const baseURL = process.env.NODE_ENV === 'development' ? '/api' : '';
const headers = {}//isFrom ? {'Content-Type': 'application/x-www-form-urlencoded'} : {'Content-Type': 'application/json', 'Accept': 'application/json'}
const instance = axios.create({
    baseURL,
    headers,
    timeout: 10000
});

export default {
    request(url, method, request, status = '0000'){
        return new Promise((resolve, reject)=>{
            instance({
                method,
                url,
                request
            }).then(response => {
                const res = response.data;
                if(res && response.status === status){
                    return resolve(res);
                }

                // reject(res);

            }).catch( err => {

                reject(err);
            })
        })
    },

    // get
    get(url, data){
        this.request(`${url}${data ? '?' : ''}${utils.getUrlData(data)}`, 'get');
    },
    
    // post
    post(url, data){
        this.request(url, 'post', data);
    },

    // delete
    delete(url){
        this.request(url, 'delete');
    },

    // put
    put(url){
        this.request(url, 'put');
    },
}