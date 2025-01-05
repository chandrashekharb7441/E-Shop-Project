let add_to_card = document.getElementById("atc");
add_to_card.addEventListener("click", function() {
    alert("Item added to the cart!");
});

let shopnow = document.getElementById("shopnow");
shopnow.addEventListener("click", function() {
    alert("sorry curently not availables");
});
let shopnow2 = document.getElementById("shopnow2");
shopnow2.addEventListener("click", function() {
    alert("sorry curently not availables");
});
let shopnow3 = document.getElementById("shopnow3");
shopnow3.addEventListener("click", function() {
    alert("sorry curently not availables");
});
let shopnow4 = document.getElementById("shopnow4");
shopnow4.addEventListener("click", function() {
    alert("sorry curently not availables");
});

let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
let futureDate=new Date("30 february 2025");
let currentDate = new Date();
let myDate = futureDate - currentDate;

let days = Math.floor(myDate / 1000/60/60/24);
let hours = Math.floor(myDate / 1000/60/60) % 243
let min = Math.floor(myDate / 1000 / 60) % 60;
let sec = Math.floor(myDate / 1000) % 60;

daysItem.innerHTML = days;
hoursItem.innerHTML = hours;
minItem.innerHTML = min;
secItem.innerHTML = sec;
}
countDown()

setInterval(countDown, 1000)