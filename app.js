const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 750
canvas.height = 750

ctx.fillRect(210,200,15,100)
ctx.fillRect(350,200,15,100)
ctx.fillRect(260,200,65,200)

ctx.arc(290,100,50,0,2 * Math.PI)
ctx.fill()
ctx.beginPath()
ctx.fillStyle = "blue"
ctx.arc(270,100,8,Math.PI,2*Math.PI)
ctx.arc(310,100,8,Math.PI,2*Math.PI)
ctx.fill()