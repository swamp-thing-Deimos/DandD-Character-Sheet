
let acidArrow = []

const getSpell1 = async () => {
    try {
      let res = await fetch(`http://www.dnd5eapi.co/api/spells/1`)
            .then(res => res.json())
        console.log(`res: `, res)
     
    } catch (e) {
        console.log(`spell1 error`)
        console.error(e.message)
    }
    
}
getSpell1()
