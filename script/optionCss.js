
let spoilers = document.querySelectorAll('[data-spoilers]');


spoilers.forEach((item) => {
    
    item.addEventListener('click', () => {
       
        item.classList.toggle('_active')
        
        

    })
})
