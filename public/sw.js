console.log("I am in sw.js file")

let cacheData="appv1"

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData)
        .then(cache=>{
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/static/js/vendors~main.chunk.js',
                '/index.html',
                '/',
                '/login',
                'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap'
            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request)
            .then(res=>{
                if(res){
                    return res
                }
                // let requestUrl=event.request.clone()
                // fetch(requestUrl)     
            })
        )
        console.log("went offline")
    }

})