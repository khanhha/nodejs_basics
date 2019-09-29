const request = require('request')

const geocode = (address, callback) => {
    //const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2hhbmhoaDg5IiwiYSI6ImNrMHk2eHB6NDAzc2YzZHA2ZW11dXZobzcifQ.r_dSOY2hD50sXAnl_jSfUA&limit=1'
    const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1Ijoia2hhbmhoaDg5IiwiYSI6ImNrMHk2eHB6NDAzc2YzZHA2ZW11dXZobzcifQ.r_dSOY2hD50sXAnl_jSfUA"
    request({url:geocodeURL, json:true}, (error, {body}) => {
        if (error){
            callback("unable to conect to geocoding service", undefined)
        } else if (body.features.length === 0){
            callback("unable to find location. try another search", undefined)
        } else{
            callback(undefined, {
                latitude:body.features[0].center[0],
                longtitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode