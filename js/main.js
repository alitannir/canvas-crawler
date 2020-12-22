// console.log(movement);
// movement.innerText = "hello!"

// Explicitly defining for my own understanding

let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')
let statusDisplay = document.getElementById('status')


// Getting context for drawing on canvas

let ctx = game.getContext('2d')
// game.height = '400px'
// // game.width = '800px'
// game.width = getComputedStyle(game).width

game.setAttribute('height', getComputedStyle(game)['height'])
game.setAttribute('width', getComputedStyle(game)['width'])
// draw a filled box
// determines the fill color
ctx.fillStyle = 'white'
ctx.fillRect(10, 10, 100, 100)
// draw a line box
// establishing line looks
ctx.strokeStyle = 'red'
ctx.lineWidth = 10;
ctx.strokeRect(10, 10, 100, 100)