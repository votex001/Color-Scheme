const  colorInp = document.querySelector('input')
const modInp = document.getElementById('selector')
let color = colorInp.value.slice(1)
let mode = `monochrome`
document.querySelector('select').addEventListener('change',a=>mode = a.target.value)
colorInp.addEventListener( 'change', (e) => {color = colorInp.value.slice(1)})

function getColor(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(0,6)}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then((data) => {
        const dataArr = data.colors
        let name = ''
        for (i of dataArr){
            
            color += `<div style="background-color: ${i.hex.value};"></div>`
            name += `<p>${i.hex.value}</p>`
            document.getElementById('colors').innerHTML= color.slice(6)
            document.getElementById('hex-footer').innerHTML= name
        }
        color = colorInp.value.slice(1)
        name= ''
    })
}
getColor()