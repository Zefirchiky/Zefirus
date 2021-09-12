let a = document.getElementById("a")
    b = 0
    butp = document.getElementById("but+")
    butm = document.getElementById("but-")
    vv = document.getElementById("vv1")
    f = []
    h = []
    n = 0
    i = 0
    vv1 = vv+1

function dop(){
    b += 1;
    a.innerHTML = b
}
function min(){
    b -= 1;
    a.innerHTML = b
}
function mas(){
    while(i<vv1)
        f[i] = i+1
        i += 1
        while   (i % 2 == 0)
            h[n] = i
            n+=1
    a.innerHTML = h
}
butp.addEventListener ("click", dop);
butm.addEventListener ("click", min);
vv.addEventListener ("click", mas);