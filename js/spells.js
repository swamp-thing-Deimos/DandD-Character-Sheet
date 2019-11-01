let cardTitle = document.getElementById('card-title')
let cardBody = document.getElementById('card-body')

const getSpell1 = async (id) => {
    try {
      let res = await fetch(`http://www.dnd5eapi.co/api/spells/${id}`)
            .then(res => res.json())

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
    let random = Math.floor(Math.random() * 30)
    getSpell1(random)
}
randomSpell()

