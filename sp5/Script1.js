const form = document.querySelector('.form');
const inputField = document.querySelectorAll('.field');

form.addEventListener('submit', (e) => {
    // prevent default behavior
    e.preventDefault();

    validate();
});

const validate = () => {

    inputField.forEach((item) => {
        if (item.value === "") {
            item.classList.add("error");
            item.classList.remove("success");
        } else {
            item.classList.remove("error");
            item.classList.add("success");
        }
    })
}