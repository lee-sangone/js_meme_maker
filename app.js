const lineWidth = document.querySelector("#line-width")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 750
canvas.height = 750

ctx.lineWidth = lineWidth.value
let isPainting = false
function onMove (e) {
    if (isPainting) {
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()
        return
    }
    ctx.beginPath()
    ctx.moveTo(e.offsetX, e.offsetY)

}

function onMousedown () {
    isPainting = true
}

function canclePainting () {
    isPainting = false
}

function onLineWidthChange (e) {
    ctx.lineWidth = e.target.value
}

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", onMousedown)
document.addEventListener("mouseup", canclePainting)
//canvas.addEventListener("mouseleave", onMouseup)

lineWidth.addEventListener("change", onLineWidthChange)