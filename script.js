// toggle bettwen light and dark
const toggle = document.querySelector('.toggle')
toggle.addEventListener('click', () => {
    const body = document.body
    body.classList.toggle('dark')

    const styleElement = document.head.appendChild(document.createElement("style"));
    if(body.classList.contains('dark')) {
        styleElement.innerHTML = ".clock::before {background-image: url('Image/darkClock.jpg');}";
        toggle.innerText = 'light'
    }
    else {
        styleElement.innerHTML = ".clock::before {background-image: url('Image/lightClock.jpg');}";
        toggle.innerText = 'dark'
    }
})

// setTime
function setTime () {
    // get time
    const time = new Date()
    const hour = time.getHours() % 12
    const minute = time.getMinutes()
    const second = time.getSeconds()

    // get elements
    const hourEl = document.querySelector('.hour')
    const minuteEl = document.querySelector('.minute')
    const secondEl = document.querySelector('.second')

    // set Time
    hourEl.style.transform = `translate(-50%, -100%) rotate(${hour * 30}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minute * 6}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${second * 6}deg)`
}

setInterval(setTime, 100)
