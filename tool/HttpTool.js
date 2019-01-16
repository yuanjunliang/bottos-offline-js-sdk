const fetch = require("node-fetch")
const baseUrl = "http://42.159.154.130:8689/v1"

const post = (url,params)=>{
    url = baseUrl + url
    return fetch(url,{
        method:"POST",
        body:JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' },
    }).then(response=>response.json())
    .catch(error=>error)
}

const get = (url)=>{
    url = baseUrl + url
    return fetch(url)
            .then(response=>response.json())
            .catch(error=>error)
}


module.exports = {post,get}