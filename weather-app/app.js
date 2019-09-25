const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (!address) {
    console.log("Adress is not provided")
}else{
    geocode(address, (error, {latitude, longtitude, location}) => {
        if (error)
            return console.log(error)
        
        console.log(longtitude, latitude)
        forecast(longtitude, latitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}

//geocode('hanoi', (error, data) => {
//    console.log("error: ", error)
//    console.log("data: ", data)
//})
