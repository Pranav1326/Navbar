// let btn = document.getElementById("btn");

// btn.addEventListener("click", ()=>{
//     btn.classList.toggle("active");
// });

function myfun(){
    let x = document.getElementById("second");
    if(x.className === "second"){
        x.className += "active";
    }
    else{
        x.className = "second";
    }
}