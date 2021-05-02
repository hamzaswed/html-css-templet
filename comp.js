var icon = document.getElementsByClassName("icon")[0],
    links = document.getElementsByTagName("ul")[0],
    span = document.getElementsByTagName("span");
icon.onclick = function(){
    links.style.display ="block";
    for(i=1; i<=3;i++){
        span[i].style.width = "100%";
    }
}
links.onclick = function(){
    links.style.display ="none";
    span[1].style.width = "100%";
    span[2].style.width = "75%";
    span[3].style.width = "50%";
}