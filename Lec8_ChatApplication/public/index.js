let ch = document.querySelector("#send");
let type = document.querySelector("#type");
let content = document.querySelector(".content");
let joinname = document.querySelector("#joinname");
let sname = document.querySelector("#sendname");
let cwindow = document.querySelector(".cwindow");
let jwindow = document.querySelector(".join");

let fname = "Shubham";


sname.addEventListener("click", function () {
    let name = joinname.value;
    if (name) {

        fname = name;
        cwindow.classList.remove("hidden");
        jwindow.classList.add("hidden");
    }
    else {
        alert("Please Enter Name");
    }

})
ch.addEventListener("click", function () {
    let divo = document.createElement("div");
    divo.classList.add("right");
    let name = document.createElement("div");
    name.classList.add("name");
    let txt = type.value;
    if (txt) {
        let message = document.createElement("div");
        message.classList.add("message");
        divo.appendChild(name);
        divo.appendChild(message);
        message.innerHTML = txt;
        name.innerHTML = fname;
        content.appendChild(divo);
        type.value = "";
    }
})