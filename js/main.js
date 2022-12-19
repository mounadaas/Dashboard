
// friends 
let removeButton = document.getElementById("remove");
console.log(removeButton)

let boxRemove = document.querySelector(".contact-box");
console.log(boxRemove)

removeButton.onclick = function(){
    boxRemove.forEach((box =>{
        box. remove();
    }))
   
}