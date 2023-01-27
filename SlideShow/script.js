const slideshowElements = document.querySelectorAll(".slideshow-element")
let elementCount = 1;
setInterval(()=>{
    elementCount++;
    let currentElement = document.querySelector('.current');

    currentElement.classList.remove("current");

    if (elementCount > slideshowElements.length) {
        slideshowElements[0].classList.add('current');
        elementCount = 1;
    }
    else{
        currentElement.nextElementSibling.classList.add("current");
    }



}, 2000);

console.log(slideshowElements);