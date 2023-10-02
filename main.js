const images = document.querySelector(".imagen")
const btn = document.querySelector(".close")




images.addEventListener("click",()=>{
    btn.style.display = "block"
    images.classList.add("imagen-active")
    images.classList.remove("imagen")
})

btn.addEventListener("click",()=>{
    images.classList.add("imagen")
    images.classList.remove("imagen-active")
    btn.style.display = "none"

})

// const imageOpen = (item) =>{
//     btn.classList.add("close-active")
//     item.classList.add("imagen-active")
//     item.classList.remove("imagen")

//     // btnClosed.addEventListener("click",()=>{
//     //     item.classList.remove("imagen-active")
//     //     console.log("hola")
//     // })
// }


// images.forEach((image)=>{
//     image.addEventListener("click",()=>{
//         imageOpen(image)
//     })

//     btn.addEventListener("click",()=>{
//         image.classList.remove("imagen-active")
//         image.classList.add("imagen")
//     })
// })