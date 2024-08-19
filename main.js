let para1 = document.querySelector("#para1")
let paraContent = para1.textContent
let words = paraContent.split(" ")
let string = ""
for (let i = 0; i < words.length; i++) {
    string += "<span>" + words[i]+ " </span>"
}
console.log(string)
para1.innerHTML = string

  para1.addEventListener("click", (e)=>{
    e.target.style.backgroundColor = "yellow"
  })


