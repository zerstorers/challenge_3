var icon = document.getElementsByTagName("i")[0];
var nav = document.getElementsByTagName("nav")[0];

icon.addEventListener("click", function(){
    if (nav.style.display == "none"){
        nav.style.display = "block";
    }

    else{
        nav.style.display = "none";
    }
});
