// function myArtem() {
//     let a = prompt("a =")
// }
// let a = document.getElementById("inp1")

// function starWars() {
//     alert("Nope")
// }

// function starWars2() {
//     alert("How are you?")
// }
// a.addEventListener("click", starWars)
// a.addEventListener("click", starWars2)
// b = document.getElementById("but1")
// class Button {
//     starWars(event) {
//         switch (event.type) {
//             case "mousedown":
//                 b.innerHTML = "Mouse tap";
//                 break;
//             case "mouseup":
//                 b.innerHTML = "Mouse off";
//                 break;
//         }
//     }
// }
// c = new Botton();
// b.addEventListener("mousedown", Bottom);
// b.addEventListener("mouseup", Bottom);
class Button {
    handleEvent(event) {

        let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        this[method](event);
    }

    onMousedown() {
        elem.innerHTML = "Кнопка мыши нажата";
    }

    onMouseup() {
        elem.innerHTML += "...и отжата.";
    }
}

let menu = new Button();
elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);