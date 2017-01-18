import Axios from 'axios';

let API = {
    getWeather: function () {
        return new Promise(function (resolve, reject) {
            Axios.get('http://api.apixu.com/v1/forecast.json', {
                params:{
                    key: '0cde55ce933147b7b48183931161811',
                    days: 4,
                    q: 'Odesa'
                }
            }).then(function (data) {
                resolve(data.data)
            })
        })
    }
};

export default API;