let text = "My name is Cecilia Muyide. A Software Developer from Lagos. Pleased to Meet You"
let index = 0
let speed = 50

let p = document.getElementById("text")
p.style.color = "blue"
p.style.fontSize = "2rem"
p.style.textAlign = "center"


function typewriter() {
    if (index < text.length) {
        p.textContent += text.charAt(index)
        index++
        setTimeout(typewriter, speed)
    }
}

