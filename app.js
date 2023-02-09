const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 750
canvas.height = 750

ctx.lineWidth = 2
let isPainting = false
function onMove (e) {
    if (isPainting) {
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()
        return
    }
    ctx.moveTo(e.offsetX, e.offsetY)

}

function onMousedown () {
    isPainting = true
}

function canclePainting () {
    isPainting = false
}

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", onMousedown)
document.addEventListener("mouseup", canclePainting)
//canvas.addEventListener("mouseleave", onMouseup)