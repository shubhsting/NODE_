const email = document.querySelector("#em");
const password = document.querySelector("#pwd");
let button = document.querySelector(".sub");
let odiv = document.querySelector(".message");
button.addEventListener("click", function (e) {
    e.preventDefault();
    if (email.value && password.value) {
        console.log(password.value);
        axios.post("http://localhost:3000/api/user/login", { email: email.value, password: password.value }).then((obj) => {
            console.log(obj.data.message);
            if (obj.data.data) {
                window.location.href = "/";
            } else {
                odiv.innerHTML = obj.data.message
            }
        })
            .catch((error) => {
                console.log(error);
            })
    }

})