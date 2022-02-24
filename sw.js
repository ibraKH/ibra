const filesToCache = 
[
"./",
"/style.css",
"/images/circleLoop.gif",
"/images/Attention.png",
"/images/darkTheme/backendVector.png",
"/images/css.png",
"/images/email.png",
"/images/darkTheme/emailVector.png",
"/images/expressLogo.png",
"/images/favicon.png",
"/images/firebase.png",
"/images/footerVector.png",
"/images/darkTheme/frontendVector.png",
"/images/darkTheme/github.png",
"/images/html.png",
"/images/idea.png",
"/images/darkTheme/ideaVector.png",
"/images/infoVector.png",
"/images/js.png",
"/images/majorVector.png",
"/images/mongodb.png",
"/images/mysqlLogo.png",
"/images/el.gif",
"/images/nodejs.png",
"/images/projectsill.png",
"/images/projectsVector.png",
"/images/quizarea.png",
"/images/race.png",
"/images/showVector.png",
"/images/svelteLogo.png",
"/images/telegramBot.png",
"/images/darkTheme/telegram.png",
"/images/topVector.png",
"/images/darkTheme/twitter.png",
"/images/vueLogo.png",
"/images/ibra.png",
"/images/reactLogo.png",
"/images/lightTheme/backendVectorLight.png",
"/images/lightTheme/emailVectorLight.png",
"/images/lightTheme/frontendVectorPng.png",
"/images/lightTheme/githubLight.png",
"/images/lightTheme/ideaVectorLight.png",
"/images/lightTheme/telegramLight.png",
"/images/lightTheme/twitterLight.png"
]
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(filesToCache)
        })
    )
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})