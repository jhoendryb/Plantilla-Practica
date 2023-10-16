const dateNow = new Date();
var secondsNow = dateNow.getSeconds();
const timeLoad = (elemento) => {
    const timer = document.getElementById(elemento);
    const date = new Date();
    const {
        [0]: hours,
        [1]: minutes,
        [2]: seconds
    } = date.toLocaleTimeString().split(":");
    console.log(`${hours}:${minutes}`);
    timer.textContent = `${hours}:${minutes}`;
}

const rangeLoead = (elemento) => {
    const range = elemento.parentNode.querySelector("span");
    range.textContent = `${elemento.value}%`;
    console.log(range);
}

window.addEventListener('load', () => {
    timeLoad('p-times');
    setInterval(() => {
        timeLoad('p-times');
    }, 1000);
});