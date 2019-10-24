let rollResult = document.getElementById('roll-result')

let d4 = document.getElementById('d4')
const rollD4 = () => {
    console.log(`D4`)
    let rolled = Math.floor(Math.random() * 4) + 1;
    rollResult.innerHTML = rolled
}
d4.addEventListener('click', rollD4)

let d6 = document.getElementById('d6')
const rollD6 = () => {
    console.log(`D6`)
    let rolled = Math.floor(Math.random() * 6) + 1;
    rollResult.innerHTML = rolled
}
d6.addEventListener('click', rollD6)


let d8 = document.getElementById('d8')
console.log(d8)
const rollD8 = () => {
    console.log(`D8`)
    let rolled = Math.floor(Math.random() * 8) + 1;
    rollResult.innerHTML = rolled
}
d8.addEventListener('click', rollD8)

let d10 = document.getElementById('d10')
const rollD10 = () => {
    console.log(`D10`)
    let rolled = Math.floor(Math.random() * 10) + 1;
    rollResult.innerHTML = rolled
}
d10.addEventListener('click', rollD10)

let d12 = document.getElementById('d12')
const rollD12 = () => {
    console.log(`D12`)
    let rolled = Math.floor(Math.random() * 12) + 1;
    rollResult.innerHTML = rolled
}
d12.addEventListener('click', rollD12)

let d20 = document.getElementById('d20')
const rollD20 = () => {
    console.log(`D20`)
    let rolled = Math.floor(Math.random() * 20) + 1;
    rollResult.innerHTML = rolled
}
d20.addEventListener('click', rollD20)

