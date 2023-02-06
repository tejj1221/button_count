const button1=document.getElementById("increase")
const button2=document.getElementById("decrease")
const count=document.getElementById("count")
let count1=0
button1.addEventListener("click",()=>{
    count1= count1+1
    count.innerText=count1
})
button2.addEventListener("click",()=>{
    count1= count1-1
    count.innerText=count1
})

