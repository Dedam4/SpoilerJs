let spoilers = document.querySelectorAll('[data-spoilers]');

if (spoilers.length > 0) {
    initspoilers(spoilers)

}

let slideUp = (target, duration = 500) => {

    console.log('up');



    target.style.transitionProperty = 'height';
    target.style.transitionDuration = `${duration}ms`;

    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;

    target.style.overflow = "hidden";
    target.style.height = '0';

    window.setTimeout(() => {

        target.hidden = true;
        target.style.removeProperty('height');

        target.style.removeProperty('overflow');

        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_active')

    }, duration)


}
let slideDown = (target, duration = 500) => {
    console.log('down');

    let height = target.offsetHeight;

    target.style.overflow = 'hidden';
    target.style.height = '0';
    target.offsetHeight;
    target.style.transitionProperty = 'height';
    target.style.transitionDuration = `${duration}ms`;
    target.style.height = `${height}px`;


    window.setTimeout(() => {
        target.hidden = false;
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');

        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_active');

    }, duration)


}
let slideToggle = (target, duration = 500) => {
    if (target.hidden) {
        target.hidden = !target.hidden;
        return slideDown(target, duration);
    } else {
        

        return slideUp(target, duration);
    }

}

function initspoilers(spoilersArray = []) {

    spoilersArray.forEach((item) => {
        spollerBody(item);
        item.addEventListener('click', spollerAction)
    })
}

function spollerBody(spoilersItem) {

    if (!spoilersItem.classList.contains('_active')) {
        spoilersItem.children[1].hidden = true;


    } else {
        spoilersItem.children[1].hidden = false;


    }


}
function spollerAction(event) {
    event.preventDefault();
    const el = event.target;
    if (el.hasAttribute('data-spoilers') || el.closest('[data-spoilers]')) {
        const spollerItem = el.hasAttribute('data-spoilers') ? el : el.closest('[data-spoilers]');

        spollerItem.classList.toggle('_active');
        slideToggle(spollerItem.children[1], 500);
    }

}
