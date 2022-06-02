const request= require('request');
const geocode= require('./utils/geocode')
const forcast= require('./utils/forcast')

// const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=2&access_token=pk.eyJ1Ijoid2FyaXNuaXoiLCJhIjoiY2txa3l5M2V3MDRnbDJ2bnVlMHoyZXFjMyJ9.BCnJsLzo0e2XOSXW1bc2fA'

// request({url:url, json:true}, (error, response) => {
//     if(error){
//         console.log('chek your Internet connection')
//     }
//     else if(response.body.features.length ===0){
//         console.log('search another website')

//     }
//     else{
//         const latitude= response.body.features[0].center[0]
//         const longitude= response.body.features[0].center[1]
//         console.log(latitude,longitude)
//     }
// })


geocode('philadelphia',(error,data)=>{
    console.log('Error',error),
    console.log('Data',data)
})

// forcast('philadelphia', (error,data) => {
//     console.log('Error',error),
//     console.log('Data',data)
// })