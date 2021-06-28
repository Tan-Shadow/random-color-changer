const colors = ['red', 'yellow', 'purple', 'blue', 'gold', 'rgb(157, 224, 1)', 'rgb(255, 102, 255)', 'rgb(96, 96, 96)', 'rgb(230, 214, 82)', 'Fuchsia', 'cyan'];

const colorArrLen = parseInt(colors.length)

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    const randomNum = getRandomNum()

    document.body.style.backgroundColor = colors[randomNum]
    color.textContent = colors[randomNum]
})

function getRandomNum(){
    return Math.floor(Math.random() * colorArrLen)
}