const nameInput =  document.querySelector("")
const emailInput =  document.querySelector("")
const zayavkaForm = document.querySelector("")
const submitBtn = document.querySelector("")

zayavkaForm.addEventListener("submit", onSubmit)
function onSubmit(evt) {
    evt.preventDefault()
    const sposobDostavki = document.querySelector('input[name="rate"]:checked').value;

}