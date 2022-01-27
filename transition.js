const btnNextPage1 = document.getElementById("next-btn-1")

const btnNextPage2 = document.getElementById("next-btn-2")
const btnPrevPage2 = document.getElementById("previous-btn-2")

const btnPrevPage3 = document.getElementById("previous-btn-3")

// pages
const page1 = document.querySelector(".page-1")
const page2 = document.querySelector(".page-2")
const page3 = document.querySelector(".page-3")

// first page
btnNextPage1.addEventListener("click",()=>{
    page1.classList.add("inactive")
    page1.classList.remove("active")
    page2.classList.add("active")
    page2.classList.remove("inactive")
})

// second page
btnPrevPage2.addEventListener("click",()=>{
    page1.classList.remove("inactive")
    page1.classList.add("active")
    page2.classList.remove("active")
    page2.classList.add("inactive")
})
btnNextPage2.addEventListener("click",()=>{
    page2.classList.remove("active")
    page2.classList.add("inactive")
    page3.classList.remove("inactive")
    page3.classList.add("active")
})

// third page
btnPrevPage3.addEventListener("click",()=>{
    page2.classList.remove("inactive")
    page2.classList.add("active")
    page3.classList.remove("active")
    page3.classList.add("inactive")
})