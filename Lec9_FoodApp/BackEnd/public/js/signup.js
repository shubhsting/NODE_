
const fname = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const cpassword = document.querySelector("#cpass");
const role = document.querySelector("#role");
const button = document.querySelector(".sub");

button.addEventListener("click", function (e) {
    e.preventDefault();
    var selectedValue = role.options[role.selectedIndex].value;
    if (fname.value && email.value && password.value && cpassword.value) {
        var selectedValue = role.options[role.selectedIndex].value;
        let signUpObj = {
            "name": fname.value,
            "email": email.value,
            "role": selectedValue,
            "password": password.value,
            "confirmPassword": cpassword.value
        }
        axios.post("http://localhost:3000/api/user/signup", signUpObj).then((obj) => {
            console.log(obj)
        })
            .catch((error) => {
                console.log(error)
            })
    }
})

