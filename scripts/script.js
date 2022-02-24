// change the theme
AOS.init();
const showText = document.getElementById("showText");
showText.innerHTML = showText.textContent.replace(/\S/g, "<span class='spanen showTextLoaded'>$&</span>");
const element = [...document.getElementsByClassName("showTextLoaded")];
element.forEach((x, i) => {
    x.style.transform = "rotate("+i*14.5+"deg)"
})
let theme = localStorage.getItem("theme");
if(theme == null){
    theme = "dark";
    localStorage.setItem("theme", theme);
}
if(theme == "white"){
    
}
document.getElementById("circleTheme").addEventListener("click", () => {
    const darkThemeBackground = [...document.getElementsByClassName("darkThemeBackground")];
    const lightThemeBackground = [...document.getElementsByClassName("lightThemeBackground")];
    const darkThemeFont = [...document.getElementsByClassName("darkThemeFont")];
    const lightThemeFont = [...document.getElementsByClassName("lightThemeFont")];
    const lineDarkTheme = [...document.getElementsByClassName("lineDarkTheme")];
    const lineLightTheme = [...document.getElementsByClassName("lineLightTheme")];
    const lineDarkThemeInside = [...document.getElementsByClassName("lineDarkThemeInside")];
    const lineLightThemeInside = [...document.getElementsByClassName("lineLightThemeInside")];

    darkThemeBackground.map((x) => {
        x.classList.remove("darkThemeBackground")
        x.classList.add("lightThemeBackground")
        return
    })
    lightThemeBackground.map((x) => {
        x.classList.remove("lightThemeBackground")
        x.classList.add("darkThemeBackground")
        return
    })
    darkThemeFont.map((x) => {
        x.classList.remove("darkThemeFont")
        x.classList.add("lightThemeFont")
        return
    })
    lightThemeFont.map((x) => {
        x.classList.remove("lightThemeFont")
        x.classList.add("darkThemeFont")
        return
    })
    lineDarkTheme.map((x) => {
        x.classList.remove("lineDarkTheme")
        x.classList.add("lineLightTheme")
        return
    })
    lineLightTheme.map((x) => {
        x.classList.remove("lineLightTheme")
        x.classList.add("lineDarkTheme")
        return
    })
    lineDarkThemeInside.map((x) => {
        x.classList.remove("lineDarkThemeInside")
        x.classList.add("lineLightThemeInside")
        return
    })
    lineLightThemeInside.map((x) => {
        x.classList.remove("lineLightThemeInside")
        x.classList.add("lineDarkThemeInside")
        return
    })
    theme = localStorage.getItem("theme");
    if(theme == "dark"){
        theme = "light"
        return localStorage.setItem("theme", theme);
    }
    if(theme == "light"){
        theme = "dark"
        return localStorage.setItem("theme", theme);
    }
    
})
window.addEventListener("load", () => {
    preload.style.display = "none";
    parent.classList.remove("hide");


})
// listen to links
document.getElementById("raceBt").addEventListener("click", () => {
    window.open("https://twitter.com/IGsibra/status/1456021539904790530?s=20&t=fK7std9Vct2DEFtBNBjmwQ", '_blank')
})
document.getElementById("quizareaBt").addEventListener("click", () => {
    window.open("https://quizarea.herokuapp.com/", '_blank')
})
document.getElementById("telegramBotBt").addEventListener("click", () => {
    window.open("https://t.me/CEibra_bot", '_blank')
})
document.getElementById("emailMe").addEventListener("click", () => {
    window.open("mailto:devibrakh@gmail.com", '_blank')
})
document.getElementById("githubMe").addEventListener("click", () => {
    window.open("https://github.com/ibraKH", '_blank')
})
//
var app = document.getElementById('app');

new Typewriter('#app', {
    strings: ['Welcome', "Bienvenue", "Willkommen", "Ἀσπάζομαι", "स्वागत", "ようこそ", "Välkommen"],
    autoStart: true,
    loop: true
});
//

// major lines
const roadFirstLine = document.getElementsByClassName("roadFirstLine");
const curveLine = document.getElementsByClassName("curveLine");
const roadSecendLine = document.getElementsByClassName("roadSecendLine")
const labe = roadFirstLine[0].getBoundingClientRect().top;
let bodyRect = document.body.getBoundingClientRect(),
elemRect = roadFirstLine[0].getBoundingClientRect(),
offset   = elemRect.top - bodyRect.top;
const points = document.getElementsByClassName("point");
console.log(roadSecendLine[0]);
window.addEventListener("scroll" , async (e) => {
    if(window.pageYOffset < 350 || window.pageYOffset > 1100){
        console.log(window.pageYOffset);
        roadFirstLine[0].classList.remove("colored");
        points[1].classList.remove("pointsColored");
        roadFirstLine[1].classList.remove("colored");
        points[2].classList.remove("pointsColored");
        roadFirstLine[2].classList.remove("colored");
        curveLine[1].classList.remove("rightCurve");
        curveLine[0].classList.remove("curveRightBottom");
        points[3].classList.remove("pointsColoredOrange");
        roadSecendLine[2].classList.remove("senedLinesR");
        points[4].classList.remove("pointsColoredOrange");
        roadSecendLine[3].classList.remove("senedLinesR");
    }
    if(window.pageYOffset > 400){
        let count = 0;
        roadFirstLine[0].classList.add("colored");
        const timer = setInterval(() => {
            if(window.pageYOffset < 350 || window.pageYOffset > 1100){
                clearInterval(timer)
            }
            if(count == 11){
                clearInterval(timer);
            }
            
            switch(count){
                case 0: 
                points[1].classList.add("pointsColored");
                break;
                case 1: 
                roadFirstLine[1].classList.add("colored");
                break;
                case 3: 
                points[2].classList.add("pointsColored");
                break;
                case 4: 
                roadFirstLine[2].classList.add("colored");
                break;
                case 5: 
                curveLine[1].classList.add("rightCurve");
                break;
                case 6: 
                curveLine[0].classList.add("curveRightBottom");
                break;
                case 7: 
                points[3].classList.add("pointsColoredOrange");
                break;
                case 8: 
                roadSecendLine[2].classList.add("senedLinesR");
                break;
                case 9: 
                points[4].classList.add("pointsColoredOrange");
                break;
                case 10: 
                roadSecendLine[3].classList.add("senedLinesR");
                break;
            }
            count++
        },1000)
    }
})