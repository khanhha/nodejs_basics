const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast   = require('./utils/forecast')

const app = express()
const publicdir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath  = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicdir))

app.get('', (req, res) => {
    res.render('index', {
        title: "forecast service",
        name : "khanh ha"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "forecast service",
        name : "khanh ha"  
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "forecast service",
        name : "khanh ha",
        content: "use this webpage to find weather forecast for your region"
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.search){
        return res.send({
            error: 'no search query is provided. check your URL request' 
        })
    }else{
        geocode(req.query.search, (error, {longtitude, latitude, location} = {}) => {
            if (error){
                return res.send({error})
            }
            forecast(longtitude, latitude, (error, summary) => {
                if (error){
                    return res.send({error})
                }
                return res.send({
                    adress : req.query.search,
                    longtitude,
                    latitude,
                    location,
                    forecast: summary                 
                })
            })
        })
    }
})

app.get('/*', (req, res) => {
    res.render('404', {
        title: '404',
        name : 'khanh ha',
        errorMessage : "page is not supported"
    })
})

app.listen(3000, () => {
    console.log("server is listening on port: 3000")
})