const request = require('request')

const forecast = (longtitude, latitude, callback) => {
    //const url = 'https://api.darksky.net/forecast/1da0a4ec225c277403f5f0892a4647b5/37.8267,-122.4233'
    const url = "https://api.darksky.net/forecast/1da0a4ec225c277403f5f0892a4647b5/" + longtitude + ',' + latitude
    request({url:url, json:true}, (error, {body}) => {
        if (error) {
            callback("unable to connect to weather service", undefined)
        } else if (body.error){
            callback("unable to find location", undefined)
        } else {
            //console.log(response.body.daily)
            callback(undefined, body.daily.summary)
        }
    })
}

module.exports = forecast