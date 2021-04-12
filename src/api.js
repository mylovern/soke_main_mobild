import axios from 'axios'
export function getkline(p) {
    return axios({
        method: 'get',
        url: `http://159.138.35.53:8080/kline?interval=${p}`
    })
}