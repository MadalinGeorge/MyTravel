'use strict'



document.addEventListener('DOMContentLoaded', () => {



    // TODO: Float button >
    const floatBtn = document.querySelector('.float-btn')

    floatBtn.addEventListener("click", (e) => {
        e.preventDefault()

        const footer = document.querySelector('#footer')

        if (footer.classList.contains('active')) {
            footer.classList.remove('active')
            floatBtn.innerText = 'Policies & More'

        } else {
            footer.classList.add('active')
            floatBtn.innerText = 'X Close'
        }

    })

})