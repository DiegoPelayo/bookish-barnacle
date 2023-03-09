let info = document.getElementById("informacion");
let btn = document.getElementById("barraLateral");


let info2 = document.getElementById("informacion2");
let btn2 = document.getElementById("barraLateral2");


let info3 = document.getElementById("informacion3");
let btn3 = document.getElementById("barraLateral3");

let info4 = document.getElementById("informacion4");
let btn4 = document.getElementById("barraLateral4");



let barra = document.querySelectorAll(".barraLateral")
barra.forEach(boton => {
    boton.addEventListener("click", () => {
            boton.backgroundColor = "brown";
    

        // boton.style.backgroundColor = "red";
        
    })
} )







// ! CODIGO REUTILIZABLE
let colores = ["red", "blue", "green", "brown", "orange"]
let numColor = 0;

let cambiarColor = function(variable) {
    variable.style.backgroundColor = colores[numColor];
    
    if(numColor <= 4) {
        numColor++
    } else {
        numColor = 0
    }
    // variable.style.transform =  "scale(1.2)";
    variable.classList.toggle("btn-scale")
}








// let profile = document.getElementById("myprofile")
// // let izq2 = document.getElementById("izq2")
// let txt = document.getElementById("txt-barraL")



btn.addEventListener("click", () => {

        cambiarColor(btn)
        
        if(info.style.display === "none") {
            info.style.display = "flex";
            

        } else {
            info.style.display = "none";}
            
})



btn2.addEventListener("click", () => {

    cambiarColor(btn2)
        
    if(info2.style.display === "none") {
        info2.style.display = "flex";
        info2.style.transform

    } else {
        info2.style.display = "none";}
        
})


btn3.addEventListener("click", () => {

    cambiarColor(btn3)
        
    if(info3.style.display === "none") {
        info3.style.display = "flex";
        

    } else {
        info3.style.display = "none";}
        
})



btn4.addEventListener("click", () => {

    cambiarColor(btn4)
        
    if(info4.style.display === "none") {
        info4.style.display = "flex";
        

    } else {
        info4.style.display = "none";}
        
})
