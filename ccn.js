
const colors = ["blue","green","purple","red","violet"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener('click', function () {
    const radn = getRNun ();
    document.body.style.backgroundColor = colors[radn];
    color.textContent = colors[radn];
});

function getRNun() {
    return  Math.floor(Math.random ()*colors.length);
}