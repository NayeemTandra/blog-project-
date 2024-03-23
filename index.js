const menuIcone=document.querySelector("#menu--icon")
const menu=document.querySelector("#menu")


// menuIcone.addEventListener("click",function(){
//     if(menu?.className=="hidden"){
//         menu.classList.remove("hidden")
//     }else{
//         menu.classList.add("hidden")

//     }
// })

menuIcone.addEventListener("click",()=>{
    if(menu?.className=="hidden"){
        menu.classList.remove("hidden")
    }else{
        menu.classList.add("hidden")

    }
})