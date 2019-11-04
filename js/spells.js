let cardTitle = document.getElementById('spellTitle')
let cardBody = document.getElementById('spellText')
let newSpellButton = document.getElementById('newSpell')

const getSpell1 = async (id) => {
    try {
      let res = await fetch(`http://www.dnd5eapi.co/api/spells/${id}`)
            .then(res => res.json())
        console.log(res)
        cardTitle.innerHTML = `<div class="h1">${res.name}</div>`
        cardBody.innerHTML =
           ` Level: ${res.level} </br>
            Range: ${res.range} </br>
            Description: ${res.desc} `
    } catch (e) {
        console.log(`spell1 error`)
        console.error(e.message)
    }

}


const randomSpell = () => {
    let random = Math.floor(Math.random() * 20)
    getSpell1(random)
}
randomSpell()

newSpellButton.addEventListener('click', randomSpell)

