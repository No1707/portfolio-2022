function revealMultipleItems() {
    const revealElementsParents = document.querySelectorAll(".revealMultiple")
    const revealElements = []
    const revealItems = []

    for(let i = 0; i<revealElementsParents.length; i++) {
        const _parent = revealElementsParents[i]
        revealElements.push([])
        revealItems.push([])

        for(const _child of _parent.children) {
            revealElements[i].push(_child)
        }  
    }

    for (let i = 0; i<revealElements.length; i++) {

        for(let j = 0; j<revealElements[i].length; j++){
            const element = revealElements[i][j]

            const item = {}
            item.revealed = false
            item.element = element
            item.index = j
    
            const bounding = element.getBoundingClientRect()
            item.top = bounding.top + scrollY
            item.height = bounding.height
    
            revealItems[i].push(item)
        }
    }

    window.addEventListener('resize', () => {

        const scrollY = window.scrollY

        for(let i = 0; i<revealItems.length; i++){
            for (const _item of revealItems[i]) {
                const bounding = _item.element.getBoundingClientRect()
                _item.top = bounding.top + scrollY
                _item.height = bounding.height
            }
        }
    })

    window.addEventListener("scroll", () => {

        const limit = window.scrollY + window.innerHeight

        for (let i = 0; i < revealItems.length; i++){
            let delay = 0
            for (const _item of revealItems[i]) {
                if (!_item.revealed && limit > _item.top + _item.height * 0.25) {
                    _item.revealed = true
                    _item.element.style.transitionDelay = delay+"s"
                    _item.element.classList.add("revealed")
                    delay += 0.15
                }
            }
        }
        
    })

    for (let i = 0; i < revealItems.length; i++) {
        let delay = 0
        for (const _item of revealItems[i]) {
            if (!_item.revealed && window.scrollY + window.innerHeight > _item.top + _item.height * 0.2) {
                _item.revealed = true
                _item.element.style.transitionDelay = delay + "s"
                _item.element.classList.add("revealed")
                delay += 0.15
            }
        }
    }
}

export default revealMultipleItems