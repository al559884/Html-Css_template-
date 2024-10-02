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