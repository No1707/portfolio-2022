function revealItem() {
    const revealElements = document.querySelectorAll(".reveal")
    const revealItems = []

    for (const _element of revealElements) {
        const item = {}
        item.revealed = false
        item.element = _element

        const bounding = _element.getBoundingClientRect()
        item.top = bounding.top + scrollY
        item.height = bounding.height

        revealItems.push(item)
        console.log(item.element)
    }

    window.addEventListener('resize', () => {

        const scrollY = window.scrollY

        for (const _item of revealItems) {
            const bounding = _item.element.getBoundingClientRect()
            _item.top = bounding.top + scrollY
            _item.height = bounding.height
        }
    })

    window.addEventListener("scroll", () => {

        const limit = window.scrollY + window.innerHeight

        for (const _item of revealItems) {

            if (!_item.revealed && limit > _item.top + _item.height * 0.5) {
                _item.revealed = true
                
                _item.element.classList.add("revealed")
            }
        }
    })

    for (const _item of revealItems) {

        if (!_item.revealed && window.scrollY + window.innerHeight > _item.top + _item.height * 0.5) {
            _item.revealed = true
            _item.element.classList.add("revealed")
        }
    }
}

export default revealItem