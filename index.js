const header =document.querySelector("header");

window.addEventListener("scroll",function(){
header.classList.toggle("sticky",this.window.scrollY>0)
})

let down=document.getElementById("down");
window.onscroll=function(){
    if(scrollY>100)
    {
        down.style.display="block";
        down.style.Behavior="smooth"
    }
    else{
        down.style.display="none";
    }
}
let menus=document.getElementById("menus");
let list =document.querySelector(".list");
let navHeader=document.querySelector(".navHeader");
let xx=document.getElementById("xx");

list.onclick = () => {
    list.classList.add("hide");
    navHeader.classList.toggle("open")
    xx.classList.remove("hide");
}
xx.onclick = () =>{
    list.classList.remove("hide");
    navHeader.classList.remove("open")
    xx.classList.add("hide");
}