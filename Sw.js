console.log("public sw file")

let cacheData = "pwa"

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/vendors~main.chunk.js",
                "/manifest.json",
                "/favicon.ico",
                "/index.html",
                "/",
                "/users"
            ])
        })
    )
})

this.addEventListener("fetch", (event) => {

    

    if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
        event.waitUntil(
            this.registration.showNotification("Test Notification", {
                body: "Test Notification Body",
                
            }) 
        )
    }

    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {

                if (result) {
                    return result
                }

                let requestUrl = event.request.clone();

                return fetch(requestUrl)
            }

        
    
        
        )
    )
    }
})