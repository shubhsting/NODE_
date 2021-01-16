const pname = document.querySelector("#pname");
const duration = document.querySelector("#dur");
const price = document.querySelector("#price");
const rating = document.querySelector("#rating");
const discount = document.querySelector("#discount");
const submit = document.querySelector(".btn");
const message = document.querySelector(".message");
submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (pname && duration && price && rating && discount && submit) {
        let signUpObj = {
            "name": pname.value,
            "duration": duration.value,
            "price": price.value,
            "ratings": rating.value,
            "discount": discount.value
        }
        axios.post("http://localhost:3000/api/plans", signUpObj).then((obj) => {
            message.innerHTML = obj.data.message;
        })
            .catch((error) => {
                console.log(error)
            })
    }
    else {

    }
})