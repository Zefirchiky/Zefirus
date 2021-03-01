let password = 1234
who = prompt ("Ты хто?")

if (who != "admin" && who != ""){
    alert ("Reg?")
}
else if (who == "admin"){
    x = prompt ("Password")
}
else {
    alert ("Cansel")
}

if (x != password && who != ""){
    alert ("Flase password")
}
else if (x == password){
    alert ("Hello admin")
}
else {
    alert ("Nope")
}