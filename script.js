// idk if this works btw

const backButton = document.getElementById("back");
const forwardButton = document.getElementById("forward");
const reloadButton = document.getElementById("reload");
const urlBar = document.getElementById("url");

backButton.addEventListener("click", goBack);
forwardButton.addEventListener("click", goForwards);
reloadButton.addEventListener("click", reload);
urlBar.form.addEventListener("submit", loadUrl)

function goBack() {
    //TODO
}
function goForwards() {
    //TODO
}
function reload() {
    //TODO
}
function loadUrl(givenUrl) {
    givenUrl.preventDefault();
    let url = urlBar.value;
}