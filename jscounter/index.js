let counter = 0;

const countadd = document.getElementById("add")
const countmin = document.getElementById("minus")
const count = document.getElementById("count")

countadd.addEventListener("click", () =>{
    counter++
    count.innerText = counter
})

countmin.addEventListener("click", () =>{
    counter--
    count.innerText = counter
})