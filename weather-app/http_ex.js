    const https= require("https")
    const url = 'https://api.darksky.net/forecast/1da0a4ec225c277403f5f0892a4647b5/37.8267,-122.4233'
    
    const request = https.request(url, (response) => {
        
        let data = ''
        
        response.on('data', (chunk)=>{
            data = data + chunk.toString()
        })

        response.on('end', () => {
            const body = JSON.parse(data)
            console.log(body)
        })
    })

     request.end()