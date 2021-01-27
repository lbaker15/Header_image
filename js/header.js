//NAV

$('.burgerIcon').hover(function() {
    TweenMax.to('.burgerLine:first-child', 0.2, { x: -10 });
    TweenMax.to('.burgerLine:last-child', 0.2, { x: 10 });
},
              
function() {
    TweenMax.to('.burgerLine:first-child', 0.2, { x: 0 });
    TweenMax.to('.burgerLine:last-child', 0.2, { x: 0 });
});

var tlmenu = new TimelineMax({paused:true});

tlmenu.to('nav', 0.3, { autoAlpha:1 })
.staggerFromTo('nav li', 0.5, { y: 100, opacity: 0 }, { y: 0, opacity:1 }, 0.1);

$('.burgerIcon').click(function() {
   tlmenu.play(0); 
});

$('.closeButton').click(function() {
   tlmenu.reverse(0); 
});


let listOne = document.getElementById("liOne")
let listTwo = document.getElementById("liTwo")
let listThree = document.getElementById("liThree")
let listFour = document.getElementById("liFour")
let listFive = document.getElementById("liFive")
let imgOne = document.querySelector(".one")
let imgTwo = document.querySelector(".two")
let imgThree = document.querySelector(".three")
let imgFour = document.querySelector(".four")
let imgFive = document.querySelector(".five")

const movement = (listItem, imgItem) => {
  listItem.addEventListener("mouseover", function() { 
    imgItem.style.display = "block"
  })
  listItem.addEventListener("mouseout", function() { 
    imgItem.style.display = "none"
  })
  listItem.addEventListener("mousemove", function(e) {
    const x = e.clientX
    const y = e.clientY
    const target = document.querySelector(".navMenu")
    const targetCoords = target.getBoundingClientRect()
    //targetCoors.left & offsetWidth static numbers larger as window increases
    //offsetWidth hardly changes with window increase - both produce static number that accounts for window
    const top = targetCoords.top 
    const left = targetCoords.left + target.offsetWidth
    //Always subtract the midpoint to create range, add minus here to not break code
    const angleX = -((left - x) - 260)
    const angleY = -(top - y / 2) - 41
    imgItem.style.transform = `translate(${angleX}px, ${angleY}px)`
  })
}
movement(listOne, imgOne)
movement(listTwo, imgTwo)
movement(listThree, imgThree)
movement(listFour, imgFour)
movement(listFive, imgFive)
