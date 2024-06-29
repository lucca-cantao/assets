let heart = document.getElementById("heart");
let heartValue = document.querySelector(".heartIcon");
heartValue.value = "off";


function heartActive() {
  if (heartValue.value == "off") {
    heart.innerHTML = `<img src="./images/heart-suit-svgrepo-com.svg" style="height: 25px; width: 30px;">`;
    heartValue.value = "on";
  } else {
    heart.innerHTML = `<img class="images" src="./images/heart-svgrepo-com.svg" style="height: 25px; width: 30px"/>`;
    heartValue.value = "off";
  }
}

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const list = document.querySelector(".itemList");
const itemWidth = 200;
const padding = 10;
prev.addEventListener("click",()=>{
    list.scrollLeft -= (itemWidth + padding);
})
next.addEventListener("click",()=>{
    list.scrollLeft += (itemWidth + padding);
})