console.log('client side javascript file is loaded!')

const form = document.querySelector("form")
const search = document.querySelector("input")
const pmsg1 = document.querySelector("#p1")
const pmsg2 = document.querySelector("#p2")

form.addEventListener('submit', (e) => {
    
    e.preventDefault()

    const loc = search.value;
    
    fetch('http://127.0.0.1:3000/weather?search=' + loc).then((response)=>{
        console.log(response)

        response.json().then((data) => {
            if (data.error){
                console.log(data.error)
                pmsg1.textContent = data.error
            }else{
                console.log(data.location)
                console.log(data.forecast)
                pmsg1.textContent = data.location
                pmsg2.textContent = data.forecast
            }
        })
    })

})