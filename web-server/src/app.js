const express = require('express')
const path = require('path')
const hbs = require('hbs')

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
    res.send('oh my god. Today is so hot. I guess its the hottest day this summer')
})

app.listen(3000, () => {
    console.log("server is listening on port: 3000")
})