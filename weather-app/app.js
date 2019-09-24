const request = require('request')
const url = 'https://api.darksky.net/forecast/1da0a4ec225c277403f5f0892a4647b5/37.8267,-122.4233'

request({url:url}, (error, response) => {
    const data = JSON.parse(response.body)
    //console.log(data)
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2hhbmhoaDg5IiwiYSI6ImNrMHk2eHB6NDAzc2YzZHA2ZW11dXZobzcifQ.r_dSOY2hD50sXAnl_jSfUA&limit=1'
request({url:geocodeURL, json:true}, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longtitude = response.body.features[0].center[1]
    console.log(latitude, longtitude)
})