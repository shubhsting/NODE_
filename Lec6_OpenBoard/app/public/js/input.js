let imageUpload = document.querySelector("#photo-upload");
let upload = document.querySelector("#upload");

let download = document.querySelector("#download");

upload.addEventListener("click", function () {
    upload.classList.add("nightmode");
    imageUpload.click();
    setTimeout(function () {
        upload.classList.remove("nightmode");
    }, 300);
})

imageUpload.addEventListener("change", function () {

    // console.log(imageUpload.file);
    let fileObject = imageUpload.files[0];
    let filePath = URL.createObjectURL(fileObject);
    console.log(filePath);
    let img = document.createElement("img");
    // <img />
    // set attribute of img element
    img.setAttribute("src", filePath)
    img.classList.add("photo");

    // socket.emit("imagecome", filePath);

    let sticky = document.createElement("div");
    sticky.classList.add("sticky");


    let stickyheader = document.createElement("div");
    stickyheader.classList.add("sticky-header");

    let minimisediv = document.createElement("div");
    minimisediv.classList.add("minimise");

    let imgminimise = document.createElement("img");
    imgminimise.setAttribute("src", "./images/minimise.png");
    imgminimise.setAttribute("id", "imgo");

    minimisediv.appendChild(imgminimise);

    let closediv = document.createElement("div");
    closediv.classList.add("close");

    let imgclose = document.createElement("img");
    imgclose.setAttribute("src", "./images/close.png");
    imgclose.setAttribute("id", "imgo");

    closediv.appendChild(imgclose);


    stickyheader.appendChild(minimisediv);
    stickyheader.appendChild(closediv);

    let stickybody = document.createElement("div");
    stickybody.classList.add("sticky-body");

    // let textarea = document.createElement("textarea");
    // textarea.setAttribute("id", "textarea");

    // textarea.setAttribute("cols", "30");
    // textarea.setAttribute("rows", "10");
    sticky.appendChild(stickyheader);

    sticky.appendChild(stickybody);
    stickybody.appendChild(img);


    document.body.appendChild(sticky);


    let initialX;
    let initialY;
    let isStickyHold = false;
    stickyheader.addEventListener("mousedown", function (e) {
        isStickyHold = true;
        initialX = e.clientX;
        initialY = e.clientY - topOffSet;
    })

    stickyheader.addEventListener("mousemove", function (e) {
        if (isStickyHold) {
            let finalX = e.clientX;
            let finalY = e.clientY - topOffSet;
            let dy = finalY - initialY;
            let dx = finalX - initialX;

            let { top, left } = sticky.getBoundingClientRect();

            sticky.style.top = top + dy + "px";
            sticky.style.left = left + dx + "px";

            initialX = finalX;
            initialY = finalY;
        }

    })

    stickyheader.addEventListener("mouseup", function (e) {
        isStickyHold = false;
    })

    minimisediv.addEventListener("click", function () {
        img.style.display = img.style.display == "none" ? "block" : "none";
    })

    closediv.addEventListener("click", function () {
        sticky.remove();
    })

});