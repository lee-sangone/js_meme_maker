const modeBtn = document.getElementById('mode-btn')
const destroyBtn = document.getElementById('destroy-btn')
const eraseBtn = document.getElementById('erase-btn')
const colorOption = Array.from(document.getElementsByClassName('color-option'))
const color = document.getElementById('color')
const lineWidth = document.querySelector("#line-width")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 750
canvas.height = 750

ctx.lineWidth = lineWidth.value
let isPainting = false
let isFilling = false
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

function onColorChange (e) {
    ctx.strokeStyle = e.target.value
    ctx.fillStyle = e.target.value
}

function colorClick (e) {
    ctx.strokeStyle = e.target.dataset.color
    ctx.fillStyle = e.target.dataset.color
    color.value = e.target.dataset.color
}

function onModeClick () {
    if(isFilling) {
        isFilling = false
        modeBtn.innerText = "Fill"
    } else {
        isFilling = true
        modeBtn.innerText = "Draw"
    }
}

function onCanvasClick () {
    if(isFilling){
        ctx.fillRect(0,0, 750,750)
    } 
}

function Destroy () {
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,750,750)
}

function onErase () {
    ctx.strokeStyle = "white"
    isFilling = false
    modeBtn.innerText = "Fill"
}
canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", onMousedown)
document.addEventListener("mouseup", canclePainting)
//canvas.addEventListener("mouseleave", onMouseup)
canvas.addEventListener("click", onCanvasClick)
lineWidth.addEventListener("change", onLineWidthChange)
color.addEventListener("change", onColorChange)

colorOption.forEach (color => color.addEventListener("click", colorClick)) 

modeBtn.addEventListener("click", onModeClick)
destroyBtn.addEventListener("click", Destroy)
eraseBtn.addEventListener("click", onErase)