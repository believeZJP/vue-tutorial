import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    timeout: 5000
})

export default function (url, payload) {
    return new Promise((resolve, reject) => {
        service({ url: '/' + url, method: 'post', data: payload })
            .then(res => {
                if (res.status !== 200) {
                    reject(res)
                } else {
                    resolve(res.data)
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}
