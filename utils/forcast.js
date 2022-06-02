const request = require('request');


const forcast = (address, callback)=>{

const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=2&access_token=pk.eyJ1Ijoid2FyaXNuaXoiLCJhIjoiY2txa3l5M2V3MDRnbDJ2bnVlMHoyZXFjMyJ9.BCnJsLzo0e2XOSXW1bc2fA'

request({url:url,json:true},(error,response)=>{
if(error) {
    callback('Unable to connect.Chek your internet connection', undefined)
}
else if(response.body.features.length === 0 ){
    callback('Search another website',undefined)
}
else {
    callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
    })
}
})
}
module.exoprts = forcast