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


listOne.addEventListener("mouseover", function() { 
  imgOne.style.display = "block"
})

listOne.addEventListener("mouseout", function() { 
  imgOne.style.display = "none"
})

listTwo.addEventListener("mouseover", function() { 
  imgTwo.style.display = "block"
})

listTwo.addEventListener("mouseout", function() { 
  imgTwo.style.display = "none"
})

listThree.addEventListener("mouseover", function() { 
  imgThree.style.display = "block"
})

listThree.addEventListener("mouseout", function() { 
  imgThree.style.display = "none"
})

listFour.addEventListener("mouseover", function() { 
  imgFour.style.display = "block"
})

listFour.addEventListener("mouseout", function() { 
  imgFour.style.display = "none"
})

listFive.addEventListener("mouseover", function() { 
  imgFive.style.display = "block"
})

listFive.addEventListener("mouseout", function() { 
  imgFive.style.display = "none"
})


listOne.addEventListener("mousemove", function(e) {
  let x = e.pageX
  let y = e.pageY
  imgOne.style.left = x * 0.4 + 300 + "px"
  imgOne.style.top = y * 0.3 + "px"
  console.log(e.pageX)
})

listTwo.addEventListener("mousemove", function(e) {
  let x = e.pageX
  let y = e.pageY
  imgTwo.style.left = x * 0.4 + 200 + "px"
  imgTwo.style.top = y * 0.3 + "px"
})
listThree.addEventListener("mousemove", function(e) {
  let x = e.pageX
  let y = e.pageY
  imgThree.style.left = x * 0.4 + 300 + "px"
  imgThree.style.top = y * 0.3 + "px"
})
listFour.addEventListener("mousemove", function(e) {
  let x = e.pageX
  let y = e.pageY
  imgFour.style.left = x * 0.4 + 200 + "px"
  imgFour.style.top = y * 0.3 + "px"
})
listFive.addEventListener("mousemove", function(e) {
  let x = e.pageX
  let y = e.pageY
  imgFive.style.left = x * 0.4 + 300 + "px"
  imgFive.style.top = y * 0.3 + "px"
})