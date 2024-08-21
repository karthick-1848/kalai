let scroll = document.querySelector(".container");
let back = document.getElementById("back");
let next = document.getElementById("next");
scroll.addEventListener("wheel", (event) => {
    event.preventDefault();
    scroll.scrollLeft += event.deltaY;
});
back.addEventListener("click", ()=>{
    scroll.style.scrollBehavior ="smooth";
    scroll.scrollLeft += 900;
});
next.addEventListener("click", ()=>{
    scroll.style.scrollBehavior ="smooth";
    scroll.scrollLeft -= 900;
});
