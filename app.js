document.getElementsByTagName("a")[0].addEventListener
("click",function(){
    document.getElementsByClassName("content")[0].style.display="block";
    document.getElementsByClassName("content")[1].style.display="none";
    document.getElementsByClassName("content")[2].style.display="none";
    document.getElementsByTagName("a")[0].classList.add("active");
    document.getElementsByTagName("a")[1].classList.    remove("active");
    document.getElementsByTagName("a")[2].classList.remove("active");
})

document.getElementsByTagName("a")[1].addEventListener("click",function(){
    document.getElementsByClassName("content")[1].style.display="block";
    document.getElementsByClassName("content")[0].style.display="none";
    document.getElementsByClassName("content")[2].style.display="none";
    document.getElementsByTagName("a")[1].classList.add("active");
    document.getElementsByTagName("a")[0].classList.remove("active");
    document.getElementsByTagName("a")[2].classList.remove("active");
})

document.getElementsByTagName("a")[2].addEventListener("click",function(){
    document.getElementsByClassName("content")[2].style.display="block";
    document.getElementsByClassName("content")[0].style.display="none";
    document.getElementsByClassName("content")[1].style.display="none";
    document.getElementsByTagName("a")[2].classList.add("active");
    document.getElementsByTagName("a")[0].classList.remove("active");
    document.getElementsByTagName("a")[1].classList.remove("active");
})
