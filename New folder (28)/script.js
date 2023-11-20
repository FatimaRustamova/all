let myText = document.querySelector("#input");
let myButton1 = document.querySelector("#but1");
let myButton2 = document.querySelector("#but2");
let myButton3 = document.querySelector("#but3");

myButton1.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.append(li);
})