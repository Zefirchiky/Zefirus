let but = document.getElementById("but")
BackgroundColor = "white"

function back(){
    document.body.style.backgroundColor=BackgroundColor
if(BackgroundColor == "white")
    BackgroundColor = "black";
else
    BackgroundColor = "white";
}

but.addEventListener("click", back)