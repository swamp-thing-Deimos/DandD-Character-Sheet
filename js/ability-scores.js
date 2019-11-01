$(document).ready(function () {
    //   http://www.dnd5eapi.co/api/ability-scores
    
    let proficency = $('#proficency-button')

    

    
    const getApi = async (name) => {
        try {
            let div = document.getElementById(`${name}-modal-body`)
            if (name === 'proficiencies') {
                let res = await fetch(`http://www.dnd5eapi.co/api/proficiencies`)
                    .then(res => res.json())
                console.log(res)
            }
            else console.log(`ljidfl`)
        
        } catch (e) {
            console.error(e.message)
        }
    }

    proficency.click(function (e) {
        let value = e.target.value
        getApi(value)
    })
})