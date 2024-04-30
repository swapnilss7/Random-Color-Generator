let btn = document.querySelector("button");

btn.addEventListener("click", function () {
   let h2 = document.querySelector("h2");
   let RandomColor = getRandomColor();
   h2.innerText = RandomColor;

   let div = document.querySelector("div")
   div.style.backgroundColor = RandomColor;


   console.log("color generated");
});


function getRandomColor () {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `RGB(${red}, ${blue}, ${green})`;
    return color;
}